import { getAllWritingsEn } from "@/lib/writing";
import { BASE_URL } from "@/lib/site";

/* 英文文章 RSS（中文在 /rss.xml） */
function escape(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

export const revalidate = 3600;

export async function GET() {
  const items = getAllWritingsEn()
    .map((w) => {
      const pubDate = w.date ? new Date(w.date).toUTCString() : new Date().toUTCString();
      return `    <item>
      <title>${escape(w.title)}</title>
      <link>${BASE_URL}/en/writing/${w.slug}</link>
      <guid>${BASE_URL}/en/writing/${w.slug}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escape(w.description ?? w.excerpt ?? "")}</description>
    </item>`;
    })
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Kimi Chang | Writing</title>
    <link>${BASE_URL}/en/writing</link>
    <atom:link href="${BASE_URL}/en/rss.xml" rel="self" type="application/rss+xml" />
    <description>Essays by Kimi Chang, a Taipei-based video producer and creative director: notes from set, the edit and the control room, plus film reviews.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=3600, s-maxage=3600" },
  });
}
