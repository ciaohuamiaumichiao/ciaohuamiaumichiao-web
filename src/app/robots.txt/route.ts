const BASE_URL = "https://ciaohua.genesis131.com";

export function GET() {
  const body = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
LLMs-Txt: ${BASE_URL}/llms.txt
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
