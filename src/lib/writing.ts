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
    .filter((p) => !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
  return items;
}

export function getWriting(slug: string): Writing | null {
  const files = readAllFiles();
  const file = files.find((f) => f.replace(/\.(md|mdx)$/, "") === slug);
  if (!file) return null;
  const raw = fs.readFileSync(path.join(WRITING_DIR, file), "utf-8");
  const { data, content } = matter(raw);
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
