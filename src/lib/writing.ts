import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const WRITING_DIR = path.join(process.cwd(), "content", "writing");

export type WritingAbout = {
  /* schema.org 類型：Movie、Book、Event、TVSeries… */
  type: string;
  name: string;
  sameAs?: string;
};

export type WritingMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  tags?: string[];
  draft?: boolean;
  /* 從方格子等外部平台搬回來的文章，標註原文位置 */
  originalUrl?: string;
  /* SEO：<title> 用的短標題、搜尋結果摘要、搜尋關鍵字。沒填就退回 title／excerpt／tags */
  seoTitle?: string;
  description?: string;
  keywords?: string[];
  /* 內容大改過的日期，給 dateModified 與 sitemap */
  updated?: string;
  /* 文章在談的作品（影評、書評），給結構化資料 */
  about?: WritingAbout[];
  /* 內文第一張圖，自動抓 */
  cover?: string;
};

export type Writing = WritingMeta & {
  content: string;
};

/* 排程發佈：date 是台北時間當天 00:00 才上線。
   頁面用 ISR（revalidate）定時重算，日期一到就會出現。 */
function isPublished(date: unknown): boolean {
  if (!date) return true;
  const d = date instanceof Date ? date : new Date(String(date));
  if (Number.isNaN(d.getTime())) return true;
  const ymd = d.toISOString().slice(0, 10);
  const goLive = new Date(`${ymd}T00:00:00+08:00`);
  return goLive.getTime() <= Date.now();
}

function readAllFiles(): string[] {
  if (!fs.existsSync(WRITING_DIR)) return [];
  return fs
    .readdirSync(WRITING_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));
}

function parse(file: string): Writing {
  const slug = file.replace(/\.(md|mdx)$/, "");
  const raw = fs.readFileSync(path.join(WRITING_DIR, file), "utf-8");
  const { data, content } = matter(raw);
  const cover = content.match(/!\[[^\]]*\]\((\/[^)\s]+)\)/)?.[1];
  return {
    slug,
    title: (data.title as string) ?? slug,
    date: (data.date as string) ?? "",
    excerpt: data.excerpt as string | undefined,
    tags: data.tags as string[] | undefined,
    draft: data.draft as boolean | undefined,
    originalUrl: data.originalUrl as string | undefined,
    seoTitle: data.seoTitle as string | undefined,
    description: data.description as string | undefined,
    keywords: data.keywords as string[] | undefined,
    updated: data.updated as string | undefined,
    about: data.about as WritingAbout[] | undefined,
    cover,
    content,
  };
}

export function getAllWritings(): WritingMeta[] {
  return readAllFiles()
    .map(parse)
    .map(({ content: _content, ...meta }) => meta)
    .filter((p) => !p.draft && isPublished(p.date))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getWriting(slug: string): Writing | null {
  const file = readAllFiles().find((f) => f.replace(/\.(md|mdx)$/, "") === slug);
  if (!file) return null;
  const w = parse(file);
  if (w.draft || !isPublished(w.date)) return null;
  return w;
}

/* 延伸閱讀：同 tag 越多越前面，平手取日期近的 */
export function getRelatedWritings(slug: string, limit = 3): WritingMeta[] {
  const all = getAllWritings();
  const me = all.find((w) => w.slug === slug);
  if (!me) return all.slice(0, limit);
  const myTags = new Set([...(me.tags ?? []), ...(me.keywords ?? [])]);
  return all
    .filter((w) => w.slug !== slug)
    .map((w) => ({
      w,
      score: [...(w.tags ?? []), ...(w.keywords ?? [])].filter((t) => myTags.has(t)).length,
    }))
    .sort((a, b) => b.score - a.score || (a.w.date < b.w.date ? 1 : -1))
    .slice(0, limit)
    .map((x) => x.w);
}

export function getAllSlugs(): string[] {
  return getAllWritings().map((w) => w.slug);
}

export function formatDate(date: string): string {
  if (!date) return "";
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return date;
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(
    d.getDate(),
  ).padStart(2, "0")}`;
}

/* frontmatter 的 date 會被 gray-matter 解析成 Date，統一轉成 YYYY-MM-DD */
export function toYmd(date: unknown): string {
  if (!date) return "";
  const d = date instanceof Date ? date : new Date(String(date));
  return Number.isNaN(d.getTime()) ? String(date) : d.toISOString().slice(0, 10);
}
