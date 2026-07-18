import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SeoJsonLd from "@/components/SeoJsonLd";
import LocalServicePageContent from "@/components/LocalServicePageContent";
import { getLocalServiceFaq, getLocalServiceMeta } from "@/data/routeMaps";
import {
  absoluteUrl,
  breadcrumbSchema,
  faqSchema,
  getLocation,
  getService,
  localBusinessSchema,
  serviceSchema,
} from "@/lib/seo";

const location = getLocation("arkadelphia-ar");
const service = getService("tobacco-residue-wall-cleaning");
const canonicalPath =
  "/locations/arkadelphia-ar/tobacco-residue-wall-cleaning";
const pageMeta = getLocalServiceMeta(
  "arkadelphia-ar",
  "tobacco-residue-wall-cleaning",
);
const localFaq = getLocalServiceFaq(
  "arkadelphia-ar",
  "tobacco-residue-wall-cleaning",
);

export const metadata: Metadata = {
  title: pageMeta.title,
  description: pageMeta.description,
  alternates: {
    canonical: absoluteUrl(canonicalPath),
  },
  openGraph: {
    title: pageMeta.title,
    description: pageMeta.description,
    url: absoluteUrl(canonicalPath),
    siteName: "Lyn & Lili’s Tidy House",
    type: "website",
  },
};

export default function ArkadelphiaTobaccoResidueWallCleaningPage() {
  if (!location || !service) notFound();

  return (
    <>
      <SeoJsonLd
        data={[
          localBusinessSchema(),
          serviceSchema(service, location),
          faqSchema(localFaq),
          breadcrumbSchema([
            { name: "Home", url: absoluteUrl("/") },
            { name: location.city, url: absoluteUrl(location.href) },
            { name: service.title, url: absoluteUrl(canonicalPath) },
          ]),
        ]}
      />

      <Header />

      <main className="pt-20">
        <LocalServicePageContent
          location={location}
          service={service}
          faq={localFaq}
        />
      </main>

      <Footer />
    </>
  );
}
