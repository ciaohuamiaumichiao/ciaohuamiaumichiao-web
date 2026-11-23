import { renderOg, OG_SIZE } from "@/lib/og";
import { getWriting, toYmd } from "@/lib/writing";

/* 每篇的圖說（og:image:alt）帶文章標題；靜態 alt 只能全站同一句，
   所以用 generateImageMetadata，圖片網址會變成 /opengraph-image/card */
export function generateImageMetadata({ params }: { params: { slug: string } }) {
  const w = getWriting(params.slug);
  return [
    {
      id: "card",
      alt: w ? `${w.title}｜張正杰 Kimi Chang 的寫作` : "張正杰的寫作",
      size: OG_SIZE,
      contentType: "image/png",
    },
  ];
}

/* 左上那行小標依文章類型換，不再每篇都是 SCRIPTS & NOTES */
function kickerFor(tags: string[] = []): string {
  const has = (t: string) => tags.includes(t);
  if (has("影評") || has("我陪你閱讀影像")) return "FILM NOTES · 我陪你閱讀影像";
  if (has("訪談")) return "INTERVIEW";
  if (has("講座筆記")) return "LECTURE NOTES";
  return "SCRIPTS & NOTES";
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const w = getWriting(slug);
  const date = toYmd(w?.date).replaceAll("-", ".");
  /* 第一個 tag 若是專欄名，已經寫在小標了，底部就不重複 */
  const tags = (w?.tags ?? ["寫作"]).filter((t) => t !== "我陪你閱讀影像");
  return renderOg({
    slate: `WRITING — ${date}`,
    kicker: kickerFor(w?.tags),
    title: w?.title ?? "寫作",
    subtitle: "張正杰 Kimi Chang · 小花貓咪叫",
    footer: tags.slice(0, 4),
    timecode: "ciaohua.genesis131.com",
  });
}
