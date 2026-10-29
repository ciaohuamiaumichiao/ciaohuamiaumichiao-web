import { renderOg, OG_SIZE } from "@/lib/og";
import { getWriting, toYmd } from "@/lib/writing";

export const alt = "張正杰的寫作";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const w = getWriting(slug);
  const date = toYmd(w?.date).replaceAll("-", ".");
  return renderOg({
    slate: `WRITING — ${date}`,
    kicker: "SCRIPTS & NOTES",
    title: w?.title ?? "寫作",
    subtitle: "張正杰 Kimi Chang · 小花貓咪叫",
    footer: (w?.tags ?? ["寫作"]).slice(0, 4),
    timecode: "ciaohua.genesis131.com",
  });
}
