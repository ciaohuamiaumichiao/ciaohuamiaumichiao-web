import type { MetadataRoute } from "next";

const BASE_URL = "https://ciaohuamiaumichiao-web.vercel.app";

const sections = [
  { path: "", priority: 1 },
  { path: "#about", priority: 0.8 },
  { path: "#services", priority: 0.9 },
  { path: "#showreel", priority: 0.7 },
  { path: "#exhibitions", priority: 0.7 },
  { path: "#backstage", priority: 0.6 },
  { path: "#contact", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return sections.map((section) => ({
    url: `${BASE_URL}/${section.path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: section.priority,
  }));
}
