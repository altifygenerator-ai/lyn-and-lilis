import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AgreementCompleteMessage from "@/components/AgreementCompleteMessage";

export const metadata: Metadata = {
  title: "Client Agreement Complete",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ClientAgreementCompletePage() {
  return (
    <>
      <Header />
      <main className="min-h-[70vh] pt-20">
        <section className="section-padding">
          <div className="container-custom px-5">
            <Suspense
              fallback={
                <div className="soft-card mx-auto max-w-3xl bg-white p-8 text-center md:p-12">
                  <p className="text-black/55">Loading confirmation…</p>
                </div>
              }
            >
              <AgreementCompleteMessage />
            </Suspense>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
