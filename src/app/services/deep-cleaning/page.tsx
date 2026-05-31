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

const service = getService("deep-cleaning");

export const metadata: Metadata = {
  title: "Deep Cleaning Services in Hot Springs, Glenwood, Arkadelphia & Amity AR | Lyn & Lili’s",
  description:
    "Detailed deep cleaning for homes, cabins, rentals, lake homes, and lived-in spaces in Hot Springs, Glenwood, Arkadelphia, Amity, and nearby Arkansas areas.",
  alternates: {
    canonical: absoluteUrl("/services/deep-cleaning"),
  },
  openGraph: {
    title: "Deep Cleaning Services in Hot Springs, Glenwood, Arkadelphia & Amity AR | Lyn & Lili’s",
    description:
      "Detailed deep cleaning for homes, cabins, rentals, lake homes, and lived-in spaces in Hot Springs, Glenwood, Arkadelphia, Amity, and nearby Arkansas areas.",
    url: absoluteUrl("/services/deep-cleaning"),
    siteName: "Lyn & Lili’s Tidy House",
    type: "website",
  },
};

export default function DeepCleaningPage() {
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
            { name: service.title, url: absoluteUrl("/services/deep-cleaning") },
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
