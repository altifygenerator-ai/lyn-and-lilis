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

const service = getService("professional-building-cleaning");

export const metadata: Metadata = {
  title: "Office & Professional Building Cleaning in Hot Springs, Arkadelphia & Glenwood AR",
  description:
    "Office cleaning and professional building cleaning for small businesses, waiting areas, bathrooms, breakrooms, and workspaces in Hot Springs, Arkadelphia, Glenwood, and nearby Arkansas areas.",
  alternates: {
    canonical: absoluteUrl("/services/professional-building-cleaning"),
  },
  openGraph: {
    title: "Office & Professional Building Cleaning in Hot Springs, Arkadelphia & Glenwood AR",
    description:
      "Office cleaning and professional building cleaning for small businesses, waiting areas, bathrooms, breakrooms, and workspaces in Hot Springs, Arkadelphia, Glenwood, and nearby Arkansas areas.",
    url: absoluteUrl("/services/professional-building-cleaning"),
    siteName: "Lyn & Lili’s Tidy House",
    type: "website",
  },
};

export default function ProfessionalBuildingCleaningPage() {
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
            { name: service.title, url: absoluteUrl("/services/professional-building-cleaning") },
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
