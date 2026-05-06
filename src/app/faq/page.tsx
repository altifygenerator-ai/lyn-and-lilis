import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { faqs } from "@/data/faqs";
import { FaArrowLeft, FaCircleQuestion } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "FAQ | Lyn & Lili’s Tidy House Home Services",
  description:
    "Frequently asked questions about Lyn & Lili’s home cleaning, deep cleaning, move-out cleaning, Airbnb cleaning, and professional building cleaning services.",
};

export default function FAQPage() {
  return (
    <>
      <Header />

      <main className="pt-20">
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    }),
  }}
/>
        <section className="bg-[var(--seafoam-soft)] px-5 py-24">
          <div className="container-custom">
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-black/60 hover:text-[var(--gray-dark)]"
            >
              <FaArrowLeft />
              Back to Home
            </Link>

            <p className="font-script text-4xl text-[var(--pink)]">
              Questions
            </p>

            <h1 className="font-heading mt-3 max-w-3xl text-5xl font-bold leading-tight text-[var(--gray-dark)] md:text-6xl">
              Frequently Asked Questions
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/70">
              A few quick answers about scheduling, pricing, service areas, and
              what to expect when working with Lyn & Lili’s.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom grid gap-5 px-5">
            {faqs.map((faq) => (
              <div key={faq.question} className="soft-card bg-white p-6">
                <div className="flex gap-4">
                  <FaCircleQuestion className="mt-1 shrink-0 text-xl text-[var(--pink)]" />

                  <div>
                    <h2 className="font-heading text-2xl font-bold text-[var(--gray-dark)]">
                      {faq.question}
                    </h2>

                    <p className="mt-3 leading-7 text-black/65">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="container-custom px-5">
            <div className="soft-card bg-[var(--pink-soft)] p-8 md:p-12">
              <h2 className="font-heading text-4xl font-bold text-[var(--gray-dark)]">
                Still have a question?
              </h2>

              <p className="mt-4 max-w-2xl leading-8 text-black/65">
                Send us a message and tell us what you need cleaned. We’ll help
                you figure out the right service and give you a clear quote.
              </p>

              <Link href="/#quote" className="btn-primary mt-6">
                Request a Quote
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}