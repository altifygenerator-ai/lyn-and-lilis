import { MetadataRoute } from "next";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.lynandlilistidyhouse.com";

  const staticPages = ["", "/about", "/faq"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const locationPages = locations.map((location) => ({
    url: `${baseUrl}/locations/${location.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const localServicePages = locations.flatMap((location) =>
    location.priorityServiceSlugs.map((serviceSlug) => ({
      url: `${baseUrl}/locations/${location.slug}/${serviceSlug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }))
  );

  return [
    ...staticPages,
    ...servicePages,
    ...locationPages,
    ...localServicePages,
  ];
}