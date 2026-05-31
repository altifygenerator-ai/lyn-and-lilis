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

const service = getService("airbnb-cleaning");

export const metadata: Metadata = {
  title: "Airbnb Cleaning in Hot Springs, Glenwood & Lake Areas AR | Lyn & Lili’s",
  description:
    "Airbnb cleaning and vacation rental turnover cleaning for short-term rentals, cabins, lake homes, and guest-ready properties in Hot Springs, Glenwood, Lake Hamilton, and nearby Arkansas areas.",
  alternates: {
    canonical: absoluteUrl("/services/airbnb-cleaning"),
  },
  openGraph: {
    title: "Airbnb Cleaning in Hot Springs, Glenwood & Lake Areas AR | Lyn & Lili’s",
    description:
      "Airbnb cleaning and vacation rental turnover cleaning for short-term rentals, cabins, lake homes, and guest-ready properties in Hot Springs, Glenwood, Lake Hamilton, and nearby Arkansas areas.",
    url: absoluteUrl("/services/airbnb-cleaning"),
    siteName: "Lyn & Lili’s Tidy House",
    type: "website",
  },
};

export default function AirbnbCleaningPage() {
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
            { name: service.title, url: absoluteUrl("/services/airbnb-cleaning") },
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
