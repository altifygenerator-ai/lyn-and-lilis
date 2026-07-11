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

const service = getService("holiday-special-occasion-cleaning");
const canonicalPath = "/services/holiday-special-occasion-cleaning";

export const metadata: Metadata = {
  title: "Holiday & Post-Party Cleaning in Hot Springs, AR",
  description:
    "Holiday cleaning, guest-ready cleaning, after-party cleanup, and post-holiday home resets in Hot Springs and nearby Southwest Arkansas areas.",
  alternates: {
    canonical: absoluteUrl(canonicalPath),
  },
  openGraph: {
    title: "Holiday & Post-Party Cleaning in Hot Springs, AR",
    description:
      "Holiday cleaning, guest-ready cleaning, after-party cleanup, and post-holiday home resets in Hot Springs and nearby Southwest Arkansas areas.",
    url: absoluteUrl(canonicalPath),
    siteName: "Lyn & Lili’s Tidy House",
    type: "website",
  },
};

export default function HolidaySpecialOccasionCleaningPage() {
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
