import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const WRITING_DIR = path.join(process.cwd(), "content", "writing");

export type WritingMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  tags?: string[];
  draft?: boolean;
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

export function getAllWritings(): WritingMeta[] {
  const files = readAllFiles();
  const items = files
    .map((file) => {
      const slug = file.replace(/\.(md|mdx)$/, "");
      const raw = fs.readFileSync(path.join(WRITING_DIR, file), "utf-8");
      const { data } = matter(raw);
      return {
        slug,
        title: (data.title as string) ?? slug,
        date: (data.date as string) ?? "",
        excerpt: data.excerpt as string | undefined,
        tags: data.tags as string[] | undefined,
        draft: data.draft as boolean | undefined,
      };
    })
    .filter((p) => !p.draft && isPublished(p.date))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
  return items;
}

export function getWriting(slug: string): Writing | null {
  const files = readAllFiles();
  const file = files.find((f) => f.replace(/\.(md|mdx)$/, "") === slug);
  if (!file) return null;
  const raw = fs.readFileSync(path.join(WRITING_DIR, file), "utf-8");
  const { data, content } = matter(raw);
  if (data.draft || !isPublished(data.date)) return null;
  return {
    slug,
    title: (data.title as string) ?? slug,
    date: (data.date as string) ?? "",
    excerpt: data.excerpt as string | undefined,
    tags: data.tags as string[] | undefined,
    content,
  };
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
