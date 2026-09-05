import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SharePoliciesButton from "@/components/SharePoliciesButton";
import {
  FaArrowLeft,
  FaCalendarCheck,
  FaCircleDollarToSlot,
  FaClock,
  FaCreditCard,
  FaHouseCircleCheck,
  FaMoneyBillTransfer,
  FaShieldHeart,
  FaBroom,
} from "react-icons/fa6";
import {
  CLIENT_POLICY_EFFECTIVE_DATE,
  CLIENT_POLICY_VERSION,
  clientPolicies,
} from "@/lib/client-policies";

export const metadata: Metadata = {
  title: "Client Policies | Booking, Cancellation & Payment",
  description:
    "Read Lyn & Lili’s Tidy House client policies for scheduling, cancellations, deposits, payment, property access, cards on file, and cleaning appointments.",
  alternates: {
    canonical: "/policies",
  },
};

const icons = {
  "quotes-pricing": FaCircleDollarToSlot,
  deposits: FaCalendarCheck,
  cancellations: FaClock,
  access: FaHouseCircleCheck,
  payment: FaMoneyBillTransfer,
  "card-on-file": FaCreditCard,
  extras: FaBroom,
  safety: FaShieldHeart,
};

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

            <p className="font-script text-4xl text-[var(--pink)]">Simple and clear</p>
            <h1 className="font-heading mt-3 max-w-4xl text-5xl font-bold leading-tight text-[var(--gray-dark)] md:text-6xl">
              Client Policies
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-black/70">
              As we&apos;ve grown, we&apos;ve put a few simple policies in writing so scheduling stays organized and fair for our clients and our cleaning team. Most of this is simply putting in writing how we already operate, with the goal of keeping expectations clear on both sides.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <SharePoliciesButton />
              <span className="text-sm text-black/45">
                Version {CLIENT_POLICY_VERSION} · Effective {CLIENT_POLICY_EFFECTIVE_DATE}
              </span>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom px-5">
            <div className="grid gap-5 md:grid-cols-2">
              {clientPolicies.map((policy) => {
                const Icon = icons[policy.id as keyof typeof icons] || FaShieldHeart;

                return (
                  <div key={policy.id} className="soft-card bg-white p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--pink-soft)] text-xl text-[var(--gray-dark)]">
                      <Icon />
                    </div>
                    <h2 className="font-heading mt-5 text-2xl font-bold text-[var(--gray-dark)]">
                      {policy.title}
                    </h2>
                    <p className="mt-3 leading-7 text-black/65">{policy.body}</p>
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
                <p className="font-script text-4xl text-[var(--pink)]">Why we use these</p>
                <h2 className="font-heading mt-2 text-4xl font-bold text-[var(--gray-dark)]">
                  Reserved appointment time matters on both sides.
                </h2>
              </div>

              <div className="space-y-5 text-base leading-7 text-black/65">
                <p>
                  When a cleaning is scheduled, we plan travel, staffing, and the rest of the day around that appointment. Last-minute changes can leave a time slot we can no longer fill, especially once the team is already on the road.
                </p>
                <p>
                  These policies are not meant to make normal schedule changes difficult. They are here so new and existing clients know what to expect, and so we can keep serving everyone as consistently as possible while the business grows.
                </p>
                <div className="rounded-2xl border border-white/60 bg-white/65 p-5">
                  <h3 className="font-heading text-xl font-bold text-[var(--gray-dark)]">
                    Genuine emergencies happen
                  </h3>
                  <p className="mt-2">
                    If something unexpected happens, talk to us. We will always try to handle genuine emergencies reasonably. The cancellation policy is primarily there for preventable last-minute cancellations, no-access situations, and appointments canceled after travel has already begun.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="container-custom px-5">
            <div className="soft-card bg-[var(--pink-soft)] p-8 md:p-12">
              <FaShieldHeart className="text-3xl text-[var(--pink)]" />
              <h2 className="font-heading mt-5 text-4xl font-bold text-[var(--gray-dark)]">
                Questions about a policy?
              </h2>
              <p className="mt-4 max-w-3xl leading-8 text-black/65">
                Give us a call or text if you are unsure how a policy applies to your appointment. We would rather clear something up ahead of time than have either side guessing.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
                <a href="tel:8702604536" className="btn-secondary">
                  Call or Text Us
                </a>
                <Link
                  href="/client-agreement"
                  className="text-sm font-semibold text-black/45 underline underline-offset-4 transition hover:text-[var(--gray-dark)]"
                >
                  Client agreement form
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
