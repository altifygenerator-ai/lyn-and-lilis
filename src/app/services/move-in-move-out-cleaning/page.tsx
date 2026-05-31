import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SeoJsonLd from "@/components/SeoJsonLd";
import ServicePageContent from "@/components/ServicePageContent";
import {
  absoluteUrl,
  breadcrumbSchema,
  faqSchema,
  getService,
  localBusinessSchema,
  serviceSchema,
} from "@/lib/seo";

const service = getService("move-in-move-out-cleaning");

export const metadata: Metadata = {
  title: "Move-In & Move-Out Cleaning in Hot Springs, Arkadelphia, Glenwood & Amity AR",
  description:
    "Move-in and move-out cleaning for renters, landlords, sellers, homeowners, apartments, and empty homes in Hot Springs, Arkadelphia, Glenwood, Amity, and nearby Arkansas areas.",
  alternates: {
    canonical: absoluteUrl("/services/move-in-move-out-cleaning"),
  },
  openGraph: {
    title: "Move-In & Move-Out Cleaning in Hot Springs, Arkadelphia, Glenwood & Amity AR",
    description:
      "Move-in and move-out cleaning for renters, landlords, sellers, homeowners, apartments, and empty homes in Hot Springs, Arkadelphia, Glenwood, Amity, and nearby Arkansas areas.",
    url: absoluteUrl("/services/move-in-move-out-cleaning"),
    siteName: "Lyn & Lili’s Tidy House",
    type: "website",
  },
};

export default function MoveOutCleaningPage() {
  if (!service) notFound();

  return (
    <>
      <SeoJsonLd
        data={[
          localBusinessSchema(),
          serviceSchema(service),
          faqSchema(service.faq),
          breadcrumbSchema([
            { name: "Home", url: absoluteUrl("/") },
            { name: "Services", url: absoluteUrl("/#services") },
            { name: service.title, url: absoluteUrl("/services/move-in-move-out-cleaning") },
          ]),
        ]}
      />

      <Header />

      <main className="pt-20">
        <ServicePageContent service={service} />
      </main>

      <Footer />
    </>
  );
}
