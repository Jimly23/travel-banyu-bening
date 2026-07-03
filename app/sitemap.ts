import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://daffatravel.youvitation.net",
      lastModified: new Date(),
      priority: 1,
      changeFrequency: "daily",
    },
  ];
}