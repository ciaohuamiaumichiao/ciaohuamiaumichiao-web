import type { MetadataRoute } from "next";
import { getAllWritings } from "@/lib/writing";

import { BASE_URL } from "@/lib/site";

export const revalidate = 3600;

export default function sitemap(): MetadataRoute.Sitemap {
  const all = getAllWritings();
  /* 首頁與寫作列表的「最後更新」= 最新一篇文章的日期，不再每次都填現在 */
  const latest = all[0] ? new Date(all[0].updated ?? all[0].date) : new Date();

  const writings = all.map((w) => ({
    url: `${BASE_URL}/writing/${w.slug}`,
    lastModified: new Date(w.updated ?? w.date ?? Date.now()),
    changeFrequency: "monthly" as const,
    priority: 0.7,
    ...(w.cover ? { images: [`${BASE_URL}${w.cover}`] } : {}),
  }));

  /* 服務頁的日期寫死：改了頁面內容就順手更新這裡 */
  return [
    {
      url: BASE_URL,
      lastModified: latest,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/companion`,
      lastModified: new Date("2026-11-05"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/rotation`,
      lastModified: new Date("2026-10-30"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/writing`,
      lastModified: latest,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/tools`,
      lastModified: new Date("2026-11-02"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/tools/higgsfield`,
      lastModified: new Date("2026-11-02"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...writings,
  ];
}
