import { BASE_URL } from "@/lib/site";

/* 歡迎搜尋引擎與 AI 引擎讀取；AI 爬蟲另外列出，表明是刻意開放 */
const AI_BOTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
];

export function GET() {
  const body = `User-agent: *
Allow: /

${AI_BOTS.map((b) => `User-agent: ${b}`).join("\n")}
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
LLMs-Txt: ${BASE_URL}/llms.txt
LLMs-Full-Txt: ${BASE_URL}/llms-full.txt
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
