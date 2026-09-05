import Link from "next/link";
import { getServicePricing } from "@/data/pricing";

export default function ServicePricingSection({
  serviceSlug,
}: {
  serviceSlug: string;
}) {
  const pricing = getServicePricing(serviceSlug);

  if (!pricing) return null;

  return (
    <section className="section-padding bg-[var(--pink-soft)]">
      <div className="container-custom px-5">
        <div className="max-w-4xl">
          <p className="font-script text-4xl text-[var(--pink)]">
            {pricing.eyebrow}
          </p>
          <h2 className="font-heading mt-2 text-4xl font-bold text-[var(--gray-dark)]">
            {pricing.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-black/70">
            {pricing.intro}
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pricing.tiers.map((tier) => (
            <div key={tier.label} className="soft-card bg-white p-6">
              <p className="text-2xl font-extrabold text-[var(--seafoam)]">
                {tier.price}
              </p>
              <h3 className="font-heading mt-2 text-xl font-bold text-[var(--gray-dark)]">
                {tier.label}
              </h3>
              {tier.detail ? (
                <p className="mt-3 text-sm leading-6 text-black/60">
                  {tier.detail}
                </p>
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-7 grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-2xl border border-black/10 bg-white/70 p-5 text-sm leading-7 text-black/65">
            <strong className="text-[var(--gray-dark)]">How the quote works: </strong>
            {pricing.note}
          </div>

          <div className="rounded-2xl border border-black/10 bg-[var(--gray-dark)] p-5 text-sm leading-7 text-white/75">
            <strong className="text-white">Booking & payment: </strong>
            Some first-time, deep-clean, move-in/move-out, or larger jobs may require a 25% booking deposit. Payment is due when service is complete, and we ask that it be submitted within one hour. Balances still unpaid after 24 hours may receive a $15 late fee. <Link href="/policies" className="font-bold text-white underline underline-offset-4">Full policies</Link>.
          </div>
        </div>
      </div>
    </section>
  );
}
