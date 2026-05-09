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
    name: "Lyn & Lili’s Tidy House Home Services",
    url: siteUrl,
    telephone: "8702604536",
    areaServed: [
      "Amity, Arkansas",
      "Glenwood, Arkansas",
      "Arkadelphia, Arkansas",
      "Hot Springs, Arkansas",
      "Caddo Gap, Arkansas",
      "Lake Greeson",
      "Lake Hamilton",
    ],
    serviceType: [
      "House Cleaning",
      "Deep Cleaning",
      "Move-Out Cleaning",
      "Move-In Cleaning",
      "Airbnb Turnover Cleaning",
      "Vacation Rental Cleaning",
      "Office Cleaning",
    ],
  };
}

export function serviceSchema(service: any, location?: any) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: location
      ? `${service.title} in ${location.city}, ${location.state}`
      : service.title,
    description: location
      ? `${service.title} for homes, rentals, and properties in ${location.city}, ${location.state}.`
      : service.metaDescription,
    provider: {
      "@type": "CleaningService",
      name: "Lyn & Lili’s Tidy House Home Services",
      url: siteUrl,
      telephone: "8702604536",
    },
    areaServed: location
      ? `${location.city}, ${location.state}`
      : [
          "Amity, Arkansas",
          "Glenwood, Arkansas",
          "Arkadelphia, Arkansas",
          "Hot Springs, Arkansas",
        ],
  };
}

export function faqSchema(faq?: { q: string; a: string }[]) {
  if (!faq?.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}