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

const service = getService("standard-cleaning");

export const metadata: Metadata = {
  title: "Standard House Cleaning in Glenwood, Amity, Arkadelphia & Hot Springs AR | Lyn & Lili’s",
  description:
    "Weekly, biweekly, and routine house cleaning for busy homeowners in Glenwood, Amity, Arkadelphia, Hot Springs, and nearby Arkansas areas.",
  alternates: {
    canonical: absoluteUrl("/services/standard-cleaning"),
  },
  openGraph: {
    title: "Standard House Cleaning in Glenwood, Amity, Arkadelphia & Hot Springs AR | Lyn & Lili’s",
    description:
      "Weekly, biweekly, and routine house cleaning for busy homeowners in Glenwood, Amity, Arkadelphia, Hot Springs, and nearby Arkansas areas.",
    url: absoluteUrl("/services/standard-cleaning"),
    siteName: "Lyn & Lili’s Tidy House",
    type: "website",
  },
};

export default function StandardCleaningPage() {
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
            { name: service.title, url: absoluteUrl("/services/standard-cleaning") },
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
