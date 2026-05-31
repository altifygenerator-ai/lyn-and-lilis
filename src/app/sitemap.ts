import type { MetadataRoute } from "next";
import { locations } from "@/data/locations";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.lynandlilistidyhouse.com";

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
  ];

  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const locationPages = locations.map((location) => ({
    url: `${baseUrl}${location.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const hotSpringsServicePages = [
    "airbnb-cleaning",
    "deep-cleaning",
    "move-in-move-out-cleaning",
  ].map((serviceSlug) => ({
    url: `${baseUrl}/locations/hot-springs-ar/${serviceSlug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.82,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...locationPages,
    ...hotSpringsServicePages,
  ];
}
