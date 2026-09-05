import { createHmac, timingSafeEqual } from "node:crypto";

type StripeMetadata = Record<string, string>;

type StripeCustomer = {
  id: string;
};

type StripeCheckoutSession = {
  id: string;
  url: string | null;
  mode?: string;
  setup_intent?: string | null;
  metadata?: StripeMetadata | null;
};

function getSecretKey() {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) throw new Error("STRIPE_SECRET_KEY must be configured");
  return secretKey;
}

async function stripePost<T>(path: string, params: URLSearchParams) {
  const response = await fetch(`https://api.stripe.com/v1/${path}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getSecretKey()}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
    cache: "no-store",
  });

  const data = (await response.json()) as T & {
    error?: { message?: string };
  };

  if (!response.ok) {
    throw new Error(data.error?.message || `Stripe request failed: ${response.status}`);
  }

  return data;
}

export async function createStripeCustomer(input: {
  name: string;
  email: string;
  phone: string;
  metadata: StripeMetadata;
}) {
  const params = new URLSearchParams();
  params.set("name", input.name);
  params.set("email", input.email);
  params.set("phone", input.phone);

  for (const [key, value] of Object.entries(input.metadata)) {
    params.set(`metadata[${key}]`, value);
  }

  return stripePost<StripeCustomer>("customers", params);
}

export async function createSetupCheckoutSession(input: {
  customerId: string;
  agreementId: string;
  policyVersion: string;
  successUrl: string;
  cancelUrl: string;
}) {
  const params = new URLSearchParams();
  params.set("mode", "setup");
  params.append("payment_method_types[]", "card");
  params.set("customer", input.customerId);
  params.set("success_url", input.successUrl);
  params.set("cancel_url", input.cancelUrl);
  params.set("metadata[agreement_id]", input.agreementId);
  params.set("metadata[policy_version]", input.policyVersion);
  params.set("setup_intent_data[metadata][agreement_id]", input.agreementId);
  params.set("setup_intent_data[metadata][policy_version]", input.policyVersion);

  return stripePost<StripeCheckoutSession>("checkout/sessions", params);
}

function safeEqualHex(expectedHex: string, suppliedHex: string) {
  try {
    const expected = Buffer.from(expectedHex, "hex");
    const supplied = Buffer.from(suppliedHex, "hex");
    return expected.length === supplied.length && timingSafeEqual(expected, supplied);
  } catch {
    return false;
  }
}

export function verifyStripeWebhook(
  payload: string,
  signatureHeader: string,
  webhookSecret: string,
  toleranceSeconds = 300
) {
  const pieces = signatureHeader.split(",");
  const timestamps = pieces
    .filter((piece) => piece.startsWith("t="))
    .map((piece) => piece.slice(2));
  const signatures = pieces
    .filter((piece) => piece.startsWith("v1="))
    .map((piece) => piece.slice(3));

  const timestamp = Number(timestamps[0]);
  if (!Number.isFinite(timestamp) || !signatures.length) {
    throw new Error("Invalid Stripe signature header");
  }

  const age = Math.abs(Math.floor(Date.now() / 1000) - timestamp);
  if (age > toleranceSeconds) {
    throw new Error("Stripe webhook timestamp is outside the allowed tolerance");
  }

  const signedPayload = `${timestamp}.${payload}`;
  const expectedSignature = createHmac("sha256", webhookSecret)
    .update(signedPayload)
    .digest("hex");

  if (!signatures.some((signature) => safeEqualHex(expectedSignature, signature))) {
    throw new Error("Stripe webhook signature mismatch");
  }

  return JSON.parse(payload) as {
    type: string;
    data: {
      object: StripeCheckoutSession;
    };
  };
}
