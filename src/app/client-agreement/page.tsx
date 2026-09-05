import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientAgreementForm from "@/components/ClientAgreementForm";
import { CLIENT_POLICY_EFFECTIVE_DATE } from "@/lib/client-policies";

export const metadata: Metadata = {
  title: "Client Policy Agreement",
  description:
    "Review and accept Lyn & Lili’s Tidy House client policies for scheduling, cancellations, deposits, payment, and property access.",
  alternates: {
    canonical: "/client-agreement",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ClientAgreementPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="relative overflow-hidden bg-[var(--cream)] px-5 py-20 md:py-24">
          <div className="absolute right-[-100px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[var(--pink-soft)]" />
          <div className="absolute bottom-[-150px] left-[-130px] h-[350px] w-[350px] rounded-full bg-[var(--seafoam-soft)]" />

          <div className="container-custom relative z-10">
            <p className="font-script text-4xl text-[var(--pink)]">Simple and clear</p>
            <h1 className="font-heading mt-3 max-w-4xl text-5xl font-bold leading-tight text-[var(--gray-dark)] md:text-6xl">
              Client Policy Agreement
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-black/70">
              We&apos;ve put our scheduling and payment policies in one place so everybody knows what to expect. Review them below, enter your information, and acknowledge the current policy version for your cleaning account.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-black/50">
              <span>Current policies effective {CLIENT_POLICY_EFFECTIVE_DATE}</span>
              <span aria-hidden="true">•</span>
              <Link href="/policies" className="font-bold text-[var(--gray-dark)] hover:text-[var(--pink)]">
                View policies without the form
              </Link>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom px-5">
            <ClientAgreementForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
