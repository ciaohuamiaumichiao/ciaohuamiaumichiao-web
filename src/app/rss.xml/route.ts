import { getAllWritings, getWriting } from "@/lib/writing";

const BASE_URL = "https://ciaohuamiaumichiao-web.vercel.app";

function escape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const writings = getAllWritings();
  const items = writings
    .map((w) => {
      const post = getWriting(w.slug);
      const desc = w.excerpt ?? post?.content?.slice(0, 200) ?? "";
      const pubDate = w.date ? new Date(w.date).toUTCString() : new Date().toUTCString();
      return `    <item>
      <title>${escape(w.title)}</title>
      <link>${BASE_URL}/writing/${w.slug}</link>
      <guid>${BASE_URL}/writing/${w.slug}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escape(desc)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>小花貓咪叫｜寫作</title>
    <link>${BASE_URL}/writing</link>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <description>張正杰的寫作筆記——影像、品牌敘事、創作者職涯。</description>
    <language>zh-TW</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
