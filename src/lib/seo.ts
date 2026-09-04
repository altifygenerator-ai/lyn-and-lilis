import { services } from "@/data/services";
import { locations } from "@/data/locations";
import type { Service } from "@/data/services";
import type { Location } from "@/data/locations";

export const siteUrl = "https://www.lynandlilistidyhouse.com";
export const businessId = `${siteUrl}/#cleaningservice`;

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
    "@id": businessId,
    name: "Lyn & Lili’s Tidy House Home Services",
    alternateName: "Lyn & Lili’s Tidy House",
    url: siteUrl,
    logo: absoluteUrl("/icon-512.png"),
    image: absoluteUrl("/images/hero.png"),
    telephone: "+18702604536",
    email: "lynandlilistidyhouse@gmail.com",
    priceRange: "$$",
    description:
      "Locally owned house cleaning and home services serving Hot Springs, Arkadelphia, Malvern, Glenwood, Amity, and nearby Southwest Arkansas communities.",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "https://schema.org/Monday",
          "https://schema.org/Tuesday",
          "https://schema.org/Wednesday",
          "https://schema.org/Thursday",
          "https://schema.org/Friday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    areaServed: [
      { "@type": "Place", name: "Hot Springs, Arkansas" },
      { "@type": "Place", name: "Arkadelphia, Arkansas" },
      { "@type": "Place", name: "Malvern, Arkansas" },
      { "@type": "Place", name: "Glenwood, Arkansas" },
      { "@type": "Place", name: "Amity, Arkansas" },
      { "@type": "Place", name: "Caddo Gap, Arkansas" },
      { "@type": "Place", name: "Lake Greeson" },
      { "@type": "Place", name: "Lake Hamilton" },
      { "@type": "Place", name: "Lake Catherine" },
      { "@type": "Place", name: "Hot Springs Village, Arkansas" },
      { "@type": "Place", name: "Rockwell, Arkansas" },
      { "@type": "Place", name: "Piney, Arkansas" },
      { "@type": "Place", name: "Royal, Arkansas" },
      { "@type": "Place", name: "Mountain Pine, Arkansas" },
      { "@type": "Place", name: "Pearcy, Arkansas" },
    ],
    serviceType: [
      "House Cleaning",
      "Recurring House Cleaning",
      "Weekly House Cleaning",
      "Biweekly House Cleaning",
      "Deep Cleaning",
      "Tobacco Residue and Nicotine-Stained Wall Cleaning",
      "Move-Out Cleaning",
      "Move-In Cleaning",
      "Airbnb Turnover Cleaning",
      "Vacation Rental Cleaning",
      "Rental Turnover Cleaning",
      "Office Cleaning",
      "Professional Building Cleaning",
      "Home Organization and Decluttering",
      "Senior Home Cleaning and Household Help",
      "Holiday Cleaning",
      "Post-Party Cleaning",
    ],
  };
}

export function locationServiceSchema(location: Location) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}${location.href}#service`,
    name: `House Cleaning Services in ${location.city}, ${location.state}`,
    serviceType: "House Cleaning",
    description: location.intro,
    url: `${siteUrl}${location.href}`,
    provider: {
      "@type": "CleaningService",
      "@id": businessId,
    },
    areaServed: {
      "@type": "Place",
      name: `${location.city}, ${location.state}`,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Cleaning services in ${location.city}`,
      itemListElement: location.priorityServiceSlugs.map((slug) => {
        const service = services.find((item) => item.slug === slug);
        return {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service?.title ?? slug,
          },
        };
      }),
    },
  };
}

export function serviceSchema(service: Service, location?: Location) {
  const isRecurringLocal =
    Boolean(location) && service.slug === "standard-cleaning";
  const schemaName = isRecurringLocal
    ? `Recurring House Cleaning in ${location!.city}, ${location!.state}`
    : location
      ? `${service.title} in ${location.city}, ${location.state}`
      : service.title;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": location
      ? `${siteUrl}/locations/${location.slug}/${service.slug}#service`
      : `${siteUrl}/services/${service.slug}#service`,
    name: schemaName,
    serviceType: isRecurringLocal ? "Recurring House Cleaning" : service.title,
    description: location
      ? `${schemaName}. ${service.description}`
      : service.metaDescription,
    provider: {
      "@type": "CleaningService",
      "@id": businessId,
    },
    areaServed: location
      ? { "@type": "Place", name: `${location.city}, ${location.state}` }
      : [
          { "@type": "Place", name: "Hot Springs, Arkansas" },
          { "@type": "Place", name: "Arkadelphia, Arkansas" },
          { "@type": "Place", name: "Malvern, Arkansas" },
          { "@type": "Place", name: "Glenwood, Arkansas" },
          { "@type": "Place", name: "Amity, Arkansas" },
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
