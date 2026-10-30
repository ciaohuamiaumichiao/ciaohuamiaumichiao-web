import fs from "node:fs";
import path from "node:path";
import { BASE_URL } from "@/lib/site";
import { getAllWritings, getWriting, toYmd } from "@/lib/writing";

/* llms.txt：content/llms.md 是手寫的基本介紹，文章清單從 content/writing 自動產生 */

function base(): string {
  return fs.readFileSync(path.join(process.cwd(), "content", "llms.md"), "utf-8").trimEnd();
}

function writingIndex(): string {
  const items = getAllWritings().map((w) => {
    const date = toYmd(w.date);
    const summary = w.description ?? w.excerpt;
    const excerpt = summary ? `: ${summary.replace(/\s+/g, " ")}` : "";
    return `- [${w.title}](${BASE_URL}/writing/${w.slug})（${date}）${excerpt}`;
  });
  return [
    "## 寫作",
    "",
    `張正杰的文章，上課、拍片、跟客戶聊天的時候想到的事，還有電影心得。共 ${items.length} 篇。RSS: ${BASE_URL}/rss.xml`,
    "",
    ...items,
  ].join("\n");
}

export function buildLlms(): string {
  return `${base()}\n\n${writingIndex()}\n`;
}

export function buildLlmsFull(): string {
  const posts = getAllWritings()
    .map((m) => getWriting(m.slug))
    .filter((w): w is NonNullable<typeof w> => !!w)
    .map(
      (w) =>
        `---\n\n# ${w.title}\n\n網址：${BASE_URL}/writing/${w.slug}\n日期：${toYmd(w.date)}\n作者：張正杰 Kimi Chang\n\n${w.content.trim()}`
    );
  return `${buildLlms()}\n# 文章全文\n\n${posts.join("\n\n")}\n`;
}

export const textHeaders = {
  "Content-Type": "text/plain; charset=utf-8",
  "Cache-Control": "public, max-age=3600, s-maxage=3600",
};
