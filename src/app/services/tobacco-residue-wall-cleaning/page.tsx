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

const service = getService("tobacco-residue-wall-cleaning");
const canonicalPath = "/services/tobacco-residue-wall-cleaning";

export const metadata: Metadata = {
  title:
    "Nicotine-Stained Wall Cleaning in Hot Springs, Glenwood & Arkadelphia AR",
  description:
    "Tobacco residue and smoke-stained wall cleaning for homes, rentals, inherited properties, and pre-paint preparation in Hot Springs, Glenwood, Arkadelphia, Amity, and Malvern, Arkansas.",
  alternates: {
    canonical: absoluteUrl(canonicalPath),
  },
  openGraph: {
    title: "Tobacco Residue & Nicotine-Stained Wall Cleaning | Lyn & Lili’s",
    description:
      "Hands-on cleaning for visible tobacco film and yellow staining on washable walls, trim, doors, ceilings, and hard surfaces.",
    url: absoluteUrl(canonicalPath),
    siteName: "Lyn & Lili’s Tidy House",
    type: "website",
    images: [
      {
        url: absoluteUrl(
          "/images/tobacco-wall-cleaning/wall-after-cleaning.webp",
        ),
        width: 1536,
        height: 1152,
        alt: "Wall after tobacco residue cleaning by Lyn and Lili’s",
      },
    ],
  },
};

export default function TobaccoResidueWallCleaningPage() {
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
