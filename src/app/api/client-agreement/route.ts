import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  CLIENT_POLICY_VERSION,
  clientPolicySnapshot,
} from "@/lib/client-policies";
import {
  createSetupCheckoutSession,
  createStripeCustomer,
} from "@/lib/stripe";
import { insertAgreement, updateAgreement } from "@/lib/supabase-admin";

const resend = new Resend(process.env.RESEND_API_KEY);
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.lynandlilistidyhouse.com";
const notifyEmail =
  process.env.CLIENT_AGREEMENT_NOTIFY_EMAIL ||
  "lynandlilistidyhouse@gmail.com";
const resendFrom =
  process.env.RESEND_FROM_EMAIL ||
  "Lyn and Lilis Website <quotes@hometownwebservicesar.cc>";

function normalize(value: unknown, maxLength = 500) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Honeypot: bots may fill this hidden field, real clients won't.
    if (body.companyWebsite) {
      return NextResponse.json({ success: true });
    }

    const fullName = normalize(body.fullName, 120);
    const email = normalize(body.email, 160).toLowerCase();
    const phone = normalize(body.phone, 40);
    const serviceAddress = normalize(body.serviceAddress, 240);
    const serviceNotes = normalize(body.serviceNotes, 1200);
    const typedSignature = normalize(body.typedSignature, 120);
    const agreedToPolicies = body.agreedToPolicies === true;
    const saveCard = body.saveCard === true;
    const cardAuthorization = body.cardAuthorization === true;

    if (
      !fullName ||
      !email ||
      !isValidEmail(email) ||
      !phone ||
      !serviceAddress ||
      !typedSignature ||
      !agreedToPolicies
    ) {
      return NextResponse.json(
        { error: "Please complete all required agreement fields." },
        { status: 400 }
      );
    }

    if (typedSignature.toLowerCase() !== fullName.toLowerCase()) {
      return NextResponse.json(
        { error: "The typed acknowledgment must match the full name." },
        { status: 400 }
      );
    }

    if (saveCard && !cardAuthorization) {
      return NextResponse.json(
        { error: "Card-on-file authorization is required to save a card." },
        { status: 400 }
      );
    }

    const forwardedFor = request.headers.get("x-forwarded-for") || "";
    const clientIp = forwardedFor.split(",")[0]?.trim() || null;
    const userAgent = request.headers.get("user-agent")?.slice(0, 500) || null;

    const agreement = await insertAgreement({
      full_name: fullName,
      email,
      phone,
      service_address: serviceAddress,
      service_notes: serviceNotes || null,
      typed_signature: typedSignature,
      agreed_to_policies: true,
      policy_version: CLIENT_POLICY_VERSION,
      policy_snapshot: clientPolicySnapshot,
      accepted_at: new Date().toISOString(),
      card_authorization: saveCard && cardAuthorization,
      card_on_file: false,
      client_ip: clientIp,
      user_agent: userAgent,
    });

    let checkoutUrl: string | null = null;
    let stripeCustomerId: string | null = null;
    let stripeSessionId: string | null = null;

    if (saveCard) {
      const customer = await createStripeCustomer({
        name: fullName,
        email,
        phone,
        metadata: {
          agreement_id: agreement.id,
          service_address: serviceAddress.slice(0, 450),
          business: "Lyn & Lili's Tidy House",
        },
      });

      stripeCustomerId = customer.id;

      const session = await createSetupCheckoutSession({
        customerId: customer.id,
        agreementId: agreement.id,
        policyVersion: CLIENT_POLICY_VERSION,
        successUrl: `${siteUrl}/client-agreement/complete?session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: `${siteUrl}/client-agreement/complete?card_setup=cancelled`,
      });

      checkoutUrl = session.url;
      stripeSessionId = session.id;

      await updateAgreement(agreement.id, {
        stripe_customer_id: stripeCustomerId,
        stripe_checkout_session_id: stripeSessionId,
      });
    }

    try {
      await resend.emails.send({
        from: resendFrom,
        to: notifyEmail,
        replyTo: email,
        subject: `Client policies accepted — ${fullName}`,
        html: `
          <h2>Client Policy Agreement Accepted</h2>
          <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Service address:</strong> ${escapeHtml(serviceAddress)}</p>
          <p><strong>Notes:</strong> ${escapeHtml(serviceNotes || "None provided")}</p>
          <p><strong>Policy version:</strong> ${escapeHtml(CLIENT_POLICY_VERSION)}</p>
          <p><strong>Card setup requested:</strong> ${saveCard ? "Yes" : "No"}</p>
          <p><strong>Agreement ID:</strong> ${escapeHtml(agreement.id)}</p>
          ${stripeCustomerId ? `<p><strong>Stripe customer:</strong> ${escapeHtml(stripeCustomerId)}</p>` : ""}
          <p>The full policy snapshot and acceptance record are stored in Supabase.</p>
        `,
      });

      await resend.emails.send({
        from: resendFrom,
        to: email,
        replyTo: notifyEmail,
        subject: "Your Lyn & Lili’s client policy agreement",
        html: `
          <h2>Thanks, ${escapeHtml(fullName)}.</h2>
          <p>We recorded your agreement to Lyn & Lili’s Tidy House client policy version ${escapeHtml(CLIENT_POLICY_VERSION)}.</p>
          <p>This covers scheduling, cancellations, property access, deposits, payment, and other appointment basics.</p>
          ${saveCard ? "<p>You chose to continue to Stripe to securely save a card on file. Stripe handles the card details directly.</p>" : ""}
          <p>If you have a question before your appointment, just reply to this email or contact Lyn & Lili’s.</p>
          <p><a href="${siteUrl}/policies">View the current client policies</a></p>
        `,
      });
    } catch (emailError) {
      console.error("Agreement email notification error:", emailError);
    }

    return NextResponse.json({
      success: true,
      agreementId: agreement.id,
      checkoutUrl,
    });
  } catch (error) {
    console.error("Client agreement error:", error);
    return NextResponse.json(
      { error: "We couldn't save the agreement. Please try again." },
      { status: 500 }
    );
  }
}
