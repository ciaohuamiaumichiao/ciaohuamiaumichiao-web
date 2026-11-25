import type { MetadataRoute } from "next";
import { getAllWritings, getAllWritingsEn } from "@/lib/writing";

import { BASE_URL } from "@/lib/site";

export const revalidate = 3600;

export default function sitemap(): MetadataRoute.Sitemap {
  const all = getAllWritings();
  /* 首頁與寫作列表的「最後更新」= 最新一篇文章的日期，不再每次都填現在 */
  const latest = all[0] ? new Date(all[0].updated ?? all[0].date) : new Date();

  const en = new Set(getAllWritingsEn().map((w) => w.slug));
  const langs = (slug: string) =>
    en.has(slug)
      ? { alternates: { languages: { "zh-Hant": `${BASE_URL}/writing/${slug}`, en: `${BASE_URL}/en/writing/${slug}` } } }
      : {};
  /* 英文翻譯文章 */
  const writingsEn = getAllWritingsEn().map((w) => ({
    url: `${BASE_URL}/en/writing/${w.slug}`,
    lastModified: new Date(w.updated ?? w.date ?? Date.now()),
    changeFrequency: "monthly" as const,
    priority: 0.7,
    ...langs(w.slug),
  }));

  const writings = all.map((w) => ({
    url: `${BASE_URL}/writing/${w.slug}`,
    lastModified: new Date(w.updated ?? w.date ?? Date.now()),
    changeFrequency: "monthly" as const,
    priority: 0.7,
    ...(w.cover ? { images: [`${BASE_URL}${w.cover}`] } : {}),
    ...langs(w.slug),
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
      url: `${BASE_URL}/en`,
      lastModified: new Date("2026-11-25"),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: { "zh-Hant": BASE_URL, en: `${BASE_URL}/en` } },
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
      lastModified: new Date("2026-11-25"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/tools/higgsfield`,
      lastModified: new Date("2026-11-02"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/tools/etherfi`,
      lastModified: new Date("2026-11-25"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/en/writing`,
      lastModified: new Date("2026-11-25"),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: { languages: { "zh-Hant": `${BASE_URL}/writing`, en: `${BASE_URL}/en/writing` } },
    },
    ...writings,
    ...writingsEn,
  ];
}
