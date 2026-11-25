import { renderOg, OG_SIZE } from "@/lib/og";
import { getWritingEn, toYmd } from "@/lib/writing";

/* 英文文章分享圖：每篇的圖說帶標題，網址是 /opengraph-image/card（同中文文章的做法） */
export function generateImageMetadata({ params }: { params: { slug: string } }) {
  const w = getWritingEn(params.slug);
  return [
    {
      id: "card",
      alt: w ? `${w.title} | Writing by Kimi Chang` : "Writing by Kimi Chang",
      size: OG_SIZE,
      contentType: "image/png",
    },
  ];
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const w = getWritingEn(slug);
  const date = toYmd(w?.date).replaceAll("-", ".");
  const interview = w?.tags?.includes("Interview");
  const lecture = w?.tags?.includes("Lecture notes");
  return renderOg({
    slate: `WRITING — ${date}`,
    kicker: interview ? "INTERVIEW" : lecture ? "LECTURE NOTES" : "NOTES FROM SET",
    title: w?.title ?? "Writing",
    subtitle: "KIMI CHANG · VIDEO PRODUCER & CREATIVE DIRECTOR",
    footer: (w?.tags ?? ["Writing"]).slice(0, 4),
    timecode: "ciaohua.genesis131.com/en",
  });
}
