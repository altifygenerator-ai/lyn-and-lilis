import { services } from "@/data/services";
import { locations } from "@/data/locations";

export const siteUrl = "https://www.lynandlilistidyhouse.com";

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug);
}

export function absoluteUrl(path = "") {
  return `${siteUrl}${path}`;
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CleaningService",
    "@id": `${siteUrl}/#cleaningservice`,
    name: "Lyn & Lili’s Tidy House Home Services",
    url: siteUrl,
    telephone: "+18702604536",
    areaServed: [
      { "@type": "Place", name: "Amity, Arkansas" },
      { "@type": "Place", name: "Glenwood, Arkansas" },
      { "@type": "Place", name: "Arkadelphia, Arkansas" },
      { "@type": "Place", name: "Hot Springs, Arkansas" },
      { "@type": "Place", name: "Malvern, Arkansas" },
      { "@type": "Place", name: "Caddo Gap, Arkansas" },
      { "@type": "Place", name: "Lake Greeson" },
      { "@type": "Place", name: "Lake Hamilton" },
      { "@type": "Place", name: "Lake Catherine" },
    ],
    serviceType: [
      "House Cleaning",
      "Standard Cleaning",
      "Deep Cleaning",
      "Move-Out Cleaning",
      "Move-In Cleaning",
      "Airbnb Turnover Cleaning",
      "Vacation Rental Cleaning",
      "Rental Turnover Cleaning",
      "Office Cleaning",
      "Professional Building Cleaning",
    ],
  };
}

export function serviceSchema(service: any, location?: any) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": location
      ? `${siteUrl}/locations/${location.slug}/${service.slug}#service`
      : `${siteUrl}/services/${service.slug}#service`,
    name: location
      ? `${service.title} in ${location.city}, ${location.state}`
      : service.title,
    serviceType: service.title,
    description: location
      ? `${service.title} for homes, rentals, vacation rentals, and properties in ${location.city}, ${location.state}.`
      : service.metaDescription,
    provider: {
      "@type": "CleaningService",
      "@id": `${siteUrl}/#cleaningservice`,
      name: "Lyn & Lili’s Tidy House Home Services",
      url: siteUrl,
      telephone: "+18702604536",
    },
    areaServed: location
      ? { "@type": "Place", name: `${location.city}, ${location.state}` }
      : [
          { "@type": "Place", name: "Amity, Arkansas" },
          { "@type": "Place", name: "Glenwood, Arkansas" },
          { "@type": "Place", name: "Arkadelphia, Arkansas" },
          { "@type": "Place", name: "Hot Springs, Arkansas" },
          { "@type": "Place", name: "Malvern, Arkansas" },
        ],
  };
}

type FaqItem =
  | { q: string; a: string; question?: never; answer?: never }
  | { question: string; answer: string; q?: never; a?: never };

export function faqSchema(faq?: FaqItem[]) {
  if (!faq?.length) return null;

  const mainEntity = faq
    .map((item) => {
      const question = "q" in item ? item.q : item.question;
      const answer = "a" in item ? item.a : item.answer;

      if (!question || !answer) return null;

      return {
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      };
    })
    .filter(Boolean);

  if (!mainEntity.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
  };
}
