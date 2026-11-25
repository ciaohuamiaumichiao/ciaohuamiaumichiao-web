import { BASE_URL } from "@/lib/site";

/* 麵包屑結構化資料（看不見，只給搜尋引擎與 AI 讀）。items 的 path 用站內路徑，例如 ["首頁", "/"] */
export function BreadcrumbJsonLd({ items }: { items: [name: string, path: string][] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, path], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: `${BASE_URL}${path === "/" ? "" : path}`,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
