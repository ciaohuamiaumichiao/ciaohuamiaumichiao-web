import type { MetadataRoute } from "next";
import { getAllWritings } from "@/lib/writing";

import { BASE_URL } from "@/lib/site";

export const revalidate = 3600;

export default function sitemap(): MetadataRoute.Sitemap {
  const writings = getAllWritings().map((w) => ({
    url: `${BASE_URL}/writing/${w.slug}`,
    lastModified: w.date ? new Date(w.date) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/rotation`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/writing`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...writings,
  ];
}
