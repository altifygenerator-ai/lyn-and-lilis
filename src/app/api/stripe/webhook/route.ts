import { NextResponse } from "next/server";
import { verifyStripeWebhook } from "@/lib/stripe";
import { updateAgreement } from "@/lib/supabase-admin";

export async function POST(request: Request) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret) {
    return NextResponse.json(
      { error: "STRIPE_WEBHOOK_SECRET is not configured" },
      { status: 500 }
    );
  }

  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing Stripe signature" }, { status: 400 });
  }

  const payload = await request.text();
  let event;

  try {
    event = verifyStripeWebhook(payload, signature, webhookSecret);
  } catch (error) {
    console.error("Stripe webhook signature error:", error);
    return NextResponse.json({ error: "Invalid webhook signature" }, { status: 400 });
  }

  try {
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      const agreementId = session.metadata?.agreement_id;

      if (agreementId && session.mode === "setup") {
        await updateAgreement(agreementId, {
          card_on_file: true,
          card_on_file_at: new Date().toISOString(),
          stripe_setup_intent_id: session.setup_intent || null,
        });
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Stripe webhook processing error:", error);
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 });
  }
}
