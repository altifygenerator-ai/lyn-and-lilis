import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SeoJsonLd from "@/components/SeoJsonLd";
import LocalServicePageContent from "@/components/LocalServicePageContent";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import {
  absoluteUrl,
  breadcrumbSchema,
  faqSchema,
  getLocation,
  getService,
  localBusinessSchema,
  serviceSchema,
} from "@/lib/seo";

type Props = {
  params: Promise<{
    slug: string;
    serviceSlug: string;
  }>;
};

export async function generateStaticParams() {
  return locations.flatMap((location) =>
    services.map((service) => ({
      slug: location.slug,
      serviceSlug: service.slug,
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, serviceSlug } = await params;

  const location = getLocation(slug);
  const service = getService(serviceSlug);

  if (!location || !service) return {};

  const title = `${service.title} in ${location.city}, ${location.state} | Lyn & Lili’s`;
  const description = `${service.title} for homes, rentals, and properties in ${location.city}, ${location.state}. Local cleaning help for ${location.pageFocus}.`;

  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(`/locations/${location.slug}/${service.slug}`),
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(`/locations/${location.slug}/${service.slug}`),
      siteName: "Lyn & Lili’s Tidy House",
      type: "website",
    },
  };
}

export default async function LocalServicePage({ params }: Props) {
  const { slug, serviceSlug } = await params;

  const location = getLocation(slug);
  const service = getService(serviceSlug);

  if (!location || !service) notFound();

  const localFaq = [
    {
      q: `Do you offer ${service.title.toLowerCase()} in ${location.city}?`,
      a: `Yes. Lyn & Lili’s offers ${service.title.toLowerCase()} in ${location.city}, ${location.state} and nearby areas.`,
    },
    {
      q: `How much does ${service.title.toLowerCase()} cost in ${location.city}?`,
      a: `Pricing depends on the size, condition, and type of space. We give a clear quote before getting started.`,
    },
    {
      q: `Can I book a one-time ${service.title.toLowerCase()}?`,
      a: `Yes. Many customers book one-time cleaning before deciding if they want recurring help.`,
    },
  ];

  return (
    <>
      <SeoJsonLd
        data={[
          localBusinessSchema(),
          serviceSchema(service, location),
          faqSchema(localFaq),
          breadcrumbSchema([
            { name: "Home", url: absoluteUrl("/") },
            {
              name: location.city,
              url: absoluteUrl(`/locations/${location.slug}`),
            },
            {
              name: service.title,
              url: absoluteUrl(`/locations/${location.slug}/${service.slug}`),
            },
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