"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FaCheck, FaCreditCard, FaTriangleExclamation } from "react-icons/fa6";

export default function AgreementCompleteMessage() {
  const searchParams = useSearchParams();
  const cardCancelled = searchParams.get("card_setup") === "cancelled";

  return (
    <div className="soft-card mx-auto max-w-3xl bg-white p-8 text-center md:p-12">
      <div
        className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full text-2xl text-[var(--gray-dark)] ${
          cardCancelled ? "bg-[var(--pink-soft)]" : "bg-[var(--seafoam-soft)]"
        }`}
      >
        {cardCancelled ? <FaTriangleExclamation /> : <FaCheck />}
      </div>
      <p className="font-script mt-5 text-4xl text-[var(--pink)]">
        {cardCancelled ? "Agreement saved" : "All set"}
      </p>
      <h1 className="font-heading mt-2 text-4xl font-bold text-[var(--gray-dark)] md:text-5xl">
        {cardCancelled
          ? "Your policies are accepted, but the card setup was not completed."
          : "Your agreement is complete."}
      </h1>
      <p className="mx-auto mt-5 max-w-2xl leading-8 text-black/65">
        {cardCancelled
          ? "Your client policy acknowledgment was already recorded before the secure Stripe step opened. No card was saved. If Lyn & Lili's needs a card on file for the appointment, we can send you back through the secure setup later."
          : "Your client policy acknowledgment has been recorded. If you chose to keep a card on file, Stripe handled the card details securely and Lyn & Lili's will see that the setup was completed."}
      </p>
      <div className="mx-auto mt-7 flex max-w-xl items-start gap-3 rounded-2xl bg-[var(--pink-soft)] p-5 text-left text-sm leading-6 text-black/60">
        <FaCreditCard className="mt-1 shrink-0" />
        <span>
          Saving a card does not create a charge by itself. Any cleaning or applicable policy fee still follows the quote and client policies you agreed to.
        </span>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-primary">
          Back to Home
        </Link>
        <Link href="/policies" className="btn-secondary">
          View Policies
        </Link>
      </div>
    </div>
  );
}
