import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.lynandlilistidyhouse.com";
  const lastModified = new Date();

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.72,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.68,
    },

    // Hardcoded city landing pages.
    {
      url: `${baseUrl}/house-cleaning-hot-springs-ar`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/house-cleaning-glenwood-ar`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.86,
    },
    {
      url: `${baseUrl}/house-cleaning-arkadelphia-ar`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.84,
    },
    {
      url: `${baseUrl}/house-cleaning-amity-ar`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${baseUrl}/house-cleaning-malvern-ar`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Core service pages.
    {
      url: `${baseUrl}/services/standard-cleaning`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${baseUrl}/services/deep-cleaning`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${baseUrl}/services/tobacco-residue-wall-cleaning`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.86,
    },
    {
      url: `${baseUrl}/services/move-in-move-out-cleaning`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/airbnb-cleaning`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/professional-building-cleaning`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.76,
    },
    {
      url: `${baseUrl}/services/home-organization`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${baseUrl}/services/senior-home-help`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${baseUrl}/services/holiday-special-occasion-cleaning`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Hardcoded Hot Springs service pages.
    {
      url: `${baseUrl}/locations/hot-springs-ar/standard-cleaning`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.92,
    },
    {
      url: `${baseUrl}/locations/hot-springs-ar/deep-cleaning`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.92,
    },
    {
      url: `${baseUrl}/locations/hot-springs-ar/tobacco-residue-wall-cleaning`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.93,
    },
    {
      url: `${baseUrl}/locations/hot-springs-ar/move-in-move-out-cleaning`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations/hot-springs-ar/airbnb-cleaning`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations/hot-springs-ar/professional-building-cleaning`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.86,
    },
    {
      url: `${baseUrl}/locations/hot-springs-ar/home-organization`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations/hot-springs-ar/senior-home-help`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations/hot-springs-ar/holiday-special-occasion-cleaning`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.88,
    },

    // Hardcoded Glenwood service pages.
    {
      url: `${baseUrl}/locations/glenwood-ar/standard-cleaning`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.78,
    },
    {
      url: `${baseUrl}/locations/glenwood-ar/deep-cleaning`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.78,
    },
    {
      url: `${baseUrl}/locations/glenwood-ar/tobacco-residue-wall-cleaning`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations/glenwood-ar/move-in-move-out-cleaning`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.76,
    },
    {
      url: `${baseUrl}/locations/glenwood-ar/airbnb-cleaning`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.76,
    },
    {
      url: `${baseUrl}/locations/glenwood-ar/professional-building-cleaning`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.72,
    },

    // Hardcoded Arkadelphia service pages.
    {
      url: `${baseUrl}/locations/arkadelphia-ar/standard-cleaning`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.76,
    },
    {
      url: `${baseUrl}/locations/arkadelphia-ar/deep-cleaning`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.76,
    },
    {
      url: `${baseUrl}/locations/arkadelphia-ar/tobacco-residue-wall-cleaning`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.78,
    },
    {
      url: `${baseUrl}/locations/arkadelphia-ar/move-in-move-out-cleaning`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.74,
    },
    {
      url: `${baseUrl}/locations/arkadelphia-ar/airbnb-cleaning`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.72,
    },
    {
      url: `${baseUrl}/locations/arkadelphia-ar/professional-building-cleaning`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.72,
    },

    // Hardcoded Amity service pages.
    {
      url: `${baseUrl}/locations/amity-ar/standard-cleaning`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.74,
    },
    {
      url: `${baseUrl}/locations/amity-ar/deep-cleaning`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.74,
    },
    {
      url: `${baseUrl}/locations/amity-ar/tobacco-residue-wall-cleaning`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.76,
    },
    {
      url: `${baseUrl}/locations/amity-ar/move-in-move-out-cleaning`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.72,
    },
    {
      url: `${baseUrl}/locations/amity-ar/airbnb-cleaning`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/locations/amity-ar/professional-building-cleaning`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Hardcoded Malvern service pages.
    {
      url: `${baseUrl}/locations/malvern-ar/standard-cleaning`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.72,
    },
    {
      url: `${baseUrl}/locations/malvern-ar/deep-cleaning`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.72,
    },
    {
      url: `${baseUrl}/locations/malvern-ar/tobacco-residue-wall-cleaning`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.74,
    },
    {
      url: `${baseUrl}/locations/malvern-ar/move-in-move-out-cleaning`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/locations/malvern-ar/airbnb-cleaning`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.68,
    },
    {
      url: `${baseUrl}/locations/malvern-ar/professional-building-cleaning`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.68,
    },
  ];

  return routes;
}
