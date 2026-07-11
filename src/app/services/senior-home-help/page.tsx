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

const service = getService("senior-home-help");
const canonicalPath = "/services/senior-home-help";

export const metadata: Metadata = {
  title: "Senior Home Cleaning & Household Help in Hot Springs, AR",
  description:
    "Non-medical senior home cleaning, laundry, bedding changes, light organization, and household help in Hot Springs and nearby Southwest Arkansas areas.",
  alternates: {
    canonical: absoluteUrl(canonicalPath),
  },
  openGraph: {
    title: "Senior Home Cleaning & Household Help in Hot Springs, AR",
    description:
      "Non-medical senior home cleaning, laundry, bedding changes, light organization, and household help in Hot Springs and nearby Southwest Arkansas areas.",
    url: absoluteUrl(canonicalPath),
    siteName: "Lyn & Lili’s Tidy House",
    type: "website",
  },
};

export default function SeniorHomeHelpPage() {
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
            { name: service.title, url: absoluteUrl(canonicalPath) },
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
