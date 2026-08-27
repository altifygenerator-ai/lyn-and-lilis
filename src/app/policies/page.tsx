import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  FaArrowLeft,
  FaCalendarCheck,
  FaCircleDollarToSlot,
  FaClock,
  FaHouseCircleCheck,
  FaMoneyBillTransfer,
  FaShieldHeart,
} from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Booking & Payment Policies",
  description:
    "Read Lyn & Lili’s Tidy House booking, deposit, payment, cancellation, pricing, and service policies before your cleaning appointment.",
  alternates: {
    canonical: "/policies",
  },
};

const policyCards = [
  {
    icon: FaCircleDollarToSlot,
    title: "Quotes & pricing",
    body: "Website prices are starting points. Final quotes are based on the size of the home, bedrooms, bathrooms, square footage, condition, buildup, pet hair, add-ons, travel, and the amount of work involved. We will give you a clear quote before work begins.",
  },
  {
    icon: FaCalendarCheck,
    title: "Booking deposits",
    body: "One-time jobs of $200 or more may require a 25% booking deposit to reserve the appointment. Any required deposit is applied toward the final balance. When a deposit is required, the appointment is not considered reserved until it has been received.",
  },
  {
    icon: FaClock,
    title: "Payment is due within one hour",
    body: "Payment is due when the service is completed and must be received within one hour of completion. This applies to every customer and every accepted payment method unless a different arrangement was agreed to before the appointment.",
  },
  {
    icon: FaMoneyBillTransfer,
    title: "$15 late payment fee",
    body: "If payment has not been received within one hour after the service is completed, a $15 late payment fee may be added to the balance. Any unpaid balance and applicable late fee must be paid before another appointment can be scheduled or completed.",
  },
  {
    icon: FaCalendarCheck,
    title: "Cancellations & rescheduling",
    body: "Please give at least 24 hours’ notice when you need to cancel or move an appointment. With at least 24 hours’ notice, an eligible booking deposit can be transferred to a new date. Late cancellations or no-shows may result in the deposit being forfeited.",
  },
  {
    icon: FaHouseCircleCheck,
    title: "Changes to the job",
    body: "Quotes are based on the home and work described before the appointment. If the condition, size, clutter, buildup, laundry, or requested work is substantially different when we arrive, we will talk with you before doing work that would increase the quoted price.",
  },
];

export default function PoliciesPage() {
  return (
    <>
      <Header />

      <main className="pt-20">
        <section className="relative overflow-hidden bg-[var(--cream)] px-5 py-24">
          <div className="absolute right-[-100px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[var(--pink-soft)]" />
          <div className="absolute bottom-[-150px] left-[-130px] h-[350px] w-[350px] rounded-full bg-[var(--seafoam-soft)]" />

          <div className="container-custom relative z-10">
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-black/60 hover:text-[var(--gray-dark)]"
            >
              <FaArrowLeft />
              Back to Home
            </Link>

            <p className="font-script text-4xl text-[var(--pink)]">
              Simple and clear
            </p>
            <h1 className="font-heading mt-3 max-w-4xl text-5xl font-bold leading-tight text-[var(--gray-dark)] md:text-6xl">
              Booking & Payment Policies
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-black/70">
              We want pricing, scheduling, and payment to be straightforward.
              These policies explain what to expect before, during, and after a
              cleaning so there are no surprises on either side.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom px-5">
            <div className="grid gap-5 md:grid-cols-2">
              {policyCards.map((policy) => {
                const Icon = policy.icon;

                return (
                  <div key={policy.title} className="soft-card bg-white p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--pink-soft)] text-xl text-[var(--gray-dark)]">
                      <Icon />
                    </div>
                    <h2 className="font-heading mt-5 text-2xl font-bold text-[var(--gray-dark)]">
                      {policy.title}
                    </h2>
                    <p className="mt-3 leading-7 text-black/65">
                      {policy.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[var(--seafoam-soft)] py-20">
          <div className="container-custom px-5">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
              <div>
                <p className="font-script text-4xl text-[var(--pink)]">
                  A few more details
                </p>
                <h2 className="font-heading mt-2 text-4xl font-bold text-[var(--gray-dark)]">
                  What helps the appointment go smoothly
                </h2>
              </div>

              <div className="space-y-5 text-base leading-7 text-black/65">
                <div>
                  <h3 className="font-heading text-xl font-bold text-[var(--gray-dark)]">
                    Access to the property
                  </h3>
                  <p className="mt-2">
                    Please make sure we can access the home or property at the
                    scheduled time. If we cannot get in and cannot reach you,
                    the appointment may need to be treated as a late
                    cancellation or rescheduled.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-bold text-[var(--gray-dark)]">
                    Accepted payment methods
                  </h3>
                  <p className="mt-2">
                    We currently accept Cash App, cash, and checks. Whatever
                    method you use, payment still needs to be received within
                    one hour after the service is completed.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-bold text-[var(--gray-dark)]">
                    Add-ons and extra work
                  </h3>
                  <p className="mt-2">
                    Extra services that were not included in the original quote
                    will be discussed before they are added. We do not want you
                    finding out about an unexpected charge after the job is
                    already finished.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-bold text-[var(--gray-dark)]">
                    Safety and specialty cleanup
                  </h3>
                  <p className="mt-2">
                    Some conditions require specialty remediation or equipment
                    beyond normal home cleaning. We may decline or stop work if
                    we find unsafe conditions, active infestations, hazardous
                    materials, or cleanup that falls outside the service that
                    was booked.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="container-custom px-5">
            <div className="soft-card bg-[var(--pink-soft)] p-8 md:p-12">
              <div className="flex max-w-3xl flex-col items-start gap-5">
                <FaShieldHeart className="text-3xl text-[var(--pink)]" />
                <h2 className="font-heading text-4xl font-bold text-[var(--gray-dark)]">
                  Have a question about a quote or policy?
                </h2>
                <p className="leading-8 text-black/65">
                  Just ask before the appointment. We would rather clear
                  something up ahead of time than have either side unsure about
                  the price, scope, or payment after the work is done.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/#quote" className="btn-primary">
                    Request a Quote
                  </Link>
                  <a href="tel:8702604536" className="btn-secondary">
                    Call or Text Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
