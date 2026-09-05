"use client";

import { useState } from "react";
import Link from "next/link";
import { FaCheck, FaCreditCard, FaShieldHeart } from "react-icons/fa6";
import {
  CLIENT_POLICY_EFFECTIVE_DATE,
  CLIENT_POLICY_VERSION,
  clientPolicies,
} from "@/lib/client-policies";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  serviceAddress: string;
  serviceNotes: string;
  typedSignature: string;
  agreedToPolicies: boolean;
  saveCard: boolean;
  cardAuthorization: boolean;
  companyWebsite: string;
};

const initialForm: FormState = {
  fullName: "",
  email: "",
  phone: "",
  serviceAddress: "",
  serviceNotes: "",
  typedSignature: "",
  agreedToPolicies: false,
  saveCard: false,
  cardAuthorization: false,
  companyWebsite: "",
};

export default function ClientAgreementForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [complete, setComplete] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!form.agreedToPolicies) {
      setError("Please confirm that you have read and agree to the client policies.");
      return;
    }

    if (form.saveCard && !form.cardAuthorization) {
      setError("Please confirm the card-on-file authorization before continuing.");
      return;
    }

    if (form.typedSignature.trim().toLowerCase() !== form.fullName.trim().toLowerCase()) {
      setError("Please type your full name exactly as entered above for your acknowledgment.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/client-agreement", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "We couldn't save the agreement. Please try again.");
      }

      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
        return;
      }

      setComplete(true);
      setForm(initialForm);
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "We couldn't save the agreement. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (complete) {
    return (
      <div className="soft-card bg-white p-8 md:p-10">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--seafoam-soft)] text-xl text-[var(--gray-dark)]">
          <FaCheck />
        </div>
        <h2 className="font-heading mt-5 text-3xl font-bold text-[var(--gray-dark)]">
          You&apos;re all set.
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-black/65">
          Your policy agreement has been recorded and Lyn & Lili&apos;s has been notified. If a deposit or anything else is needed for your appointment, we&apos;ll let you know.
        </p>
        <Link href="/" className="btn-secondary mt-6">
          Back to the website
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-8">
      <div className="soft-card bg-white p-7 md:p-9">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-black/45">
          Client information
        </p>
        <h2 className="font-heading mt-2 text-3xl font-bold text-[var(--gray-dark)]">
          Tell us who this agreement is for
        </h2>

        <div className="mt-7 grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-bold text-[var(--gray-dark)]">
            Full name *
            <input
              required
              value={form.fullName}
              onChange={(event) => update("fullName", event.target.value)}
              className="input-style font-normal"
              autoComplete="name"
            />
          </label>

          <label className="grid gap-2 text-sm font-bold text-[var(--gray-dark)]">
            Phone *
            <input
              required
              value={form.phone}
              onChange={(event) => update("phone", event.target.value)}
              className="input-style font-normal"
              autoComplete="tel"
              inputMode="tel"
            />
          </label>

          <label className="grid gap-2 text-sm font-bold text-[var(--gray-dark)]">
            Email *
            <input
              required
              type="email"
              value={form.email}
              onChange={(event) => update("email", event.target.value)}
              className="input-style font-normal"
              autoComplete="email"
            />
          </label>

          <label className="grid gap-2 text-sm font-bold text-[var(--gray-dark)]">
            Service address *
            <input
              required
              value={form.serviceAddress}
              onChange={(event) => update("serviceAddress", event.target.value)}
              className="input-style font-normal"
              autoComplete="street-address"
            />
          </label>
        </div>

        <label className="mt-5 grid gap-2 text-sm font-bold text-[var(--gray-dark)]">
          Service or appointment notes <span className="font-normal text-black/40">(optional)</span>
          <textarea
            value={form.serviceNotes}
            onChange={(event) => update("serviceNotes", event.target.value)}
            className="input-style min-h-28 resize-y font-normal"
            placeholder="Example: deep clean, biweekly cleaning, move-out clean, quoted appointment date, etc."
          />
        </label>

        <div className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
          <label>
            Company website
            <input
              tabIndex={-1}
              autoComplete="off"
              value={form.companyWebsite}
              onChange={(event) => update("companyWebsite", event.target.value)}
            />
          </label>
        </div>
      </div>

      <div className="soft-card bg-white p-7 md:p-9">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-black/45">
              Policies
            </p>
            <h2 className="font-heading mt-2 text-3xl font-bold text-[var(--gray-dark)]">
              Please review the current client policies
            </h2>
          </div>
          <div className="rounded-full bg-[var(--seafoam-soft)] px-4 py-2 text-xs font-bold text-black/55">
            Version {CLIENT_POLICY_VERSION} · Effective {CLIENT_POLICY_EFFECTIVE_DATE}
          </div>
        </div>

        <p className="mt-4 max-w-3xl leading-7 text-black/60">
          As we&apos;ve grown, we&apos;ve put a few simple policies in writing so scheduling stays organized and fair for our clients and our cleaning team. Most of this is simply putting in writing how we already operate.
        </p>

        <div className="mt-7 grid gap-4">
          {clientPolicies.map((policy) => (
            <div key={policy.id} className="rounded-2xl border border-black/10 bg-[var(--cream)] p-5">
              <h3 className="font-heading text-xl font-bold text-[var(--gray-dark)]">
                {policy.title}
              </h3>
              <p className="mt-2 leading-7 text-black/62">{policy.body}</p>
            </div>
          ))}
        </div>

        <label className="mt-7 flex items-start gap-3 rounded-2xl border border-[var(--seafoam)] bg-[var(--seafoam-soft)] p-5">
          <input
            required
            type="checkbox"
            checked={form.agreedToPolicies}
            onChange={(event) => update("agreedToPolicies", event.target.checked)}
            className="mt-1 h-5 w-5 accent-[var(--gray-dark)]"
          />
          <span className="leading-7 text-black/70">
            <strong className="text-[var(--gray-dark)]">I have read and agree to these client policies.</strong>{" "}
            I understand the cancellation, property access, deposit, and payment terms above.
          </span>
        </label>
      </div>

      <div className="soft-card bg-white p-7 md:p-9">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--pink-soft)] text-xl text-[var(--gray-dark)]">
            <FaCreditCard />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-black/45">Optional</p>
            <h2 className="font-heading mt-1 text-3xl font-bold text-[var(--gray-dark)]">
              Keep a card securely on file
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-black/60">
              This can make future cleanings easier and gives us a secure payment method for agreed charges. Card details are handled by Stripe, not stored on the Lyn & Lili&apos;s website.
            </p>
          </div>
        </div>

        <label className="mt-6 flex items-start gap-3 rounded-2xl border border-black/10 bg-[var(--cream)] p-5">
          <input
            type="checkbox"
            checked={form.saveCard}
            onChange={(event) => {
              update("saveCard", event.target.checked);
              if (!event.target.checked) update("cardAuthorization", false);
            }}
            className="mt-1 h-5 w-5 accent-[var(--gray-dark)]"
          />
          <span className="leading-7 text-black/70">
            I want to securely save a card with Stripe for this client account.
          </span>
        </label>

        {form.saveCard && (
          <label className="mt-4 flex items-start gap-3 rounded-2xl border border-[var(--pink)] bg-[var(--pink-soft)] p-5">
            <input
              required
              type="checkbox"
              checked={form.cardAuthorization}
              onChange={(event) => update("cardAuthorization", event.target.checked)}
              className="mt-1 h-5 w-5 accent-[var(--gray-dark)]"
            />
            <span className="leading-7 text-black/70">
              <strong className="text-[var(--gray-dark)]">Card-on-file authorization:</strong>{" "}
              I authorize Lyn & Lili&apos;s Tidy House Home Services to keep my payment method securely on file through Stripe and use it for cleaning charges I have agreed to and any cancellation or no-access fee that applies under the policies above. I can contact Lyn & Lili&apos;s to change or remove the payment method for future charges.
            </span>
          </label>
        )}
      </div>

      <div className="soft-card bg-white p-7 md:p-9">
        <div className="flex items-start gap-4">
          <FaShieldHeart className="mt-1 text-2xl text-[var(--pink)]" />
          <div className="w-full">
            <h2 className="font-heading text-3xl font-bold text-[var(--gray-dark)]">
              Acknowledge the agreement
            </h2>
            <p className="mt-3 leading-7 text-black/60">
              Type your full name below. This records who accepted policy version {CLIENT_POLICY_VERSION} and when it was accepted.
            </p>

            <label className="mt-5 grid gap-2 text-sm font-bold text-[var(--gray-dark)]">
              Type your full name *
              <input
                required
                value={form.typedSignature}
                onChange={(event) => update("typedSignature", event.target.value)}
                className="input-style font-normal"
                placeholder={form.fullName || "Your full name"}
              />
            </label>

            {error && (
              <p role="alert" className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                {error}
              </p>
            )}

            <button type="submit" disabled={submitting} className="btn-primary mt-6 disabled:cursor-not-allowed disabled:opacity-60">
              {submitting
                ? "Saving agreement…"
                : form.saveCard
                  ? "Agree & continue to secure card setup"
                  : "Agree to client policies"}
            </button>

            <p className="mt-4 max-w-2xl text-xs leading-6 text-black/45">
              By submitting this form, you are creating an electronic record of your policy acknowledgment. This form does not change a quoted service price or create a new service charge by itself.
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}
