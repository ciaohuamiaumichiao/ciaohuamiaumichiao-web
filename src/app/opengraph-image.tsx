import { renderOg, OG_SIZE } from "@/lib/og";

export const alt = "張正杰 Kimi Chang｜導演・紀錄片・節目製作｜小花貓咪叫";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOg({
    slate: "DATE — 2026",
    kicker: "DIRECTOR · DOCUMENTARY · PROGRAMS",
    title: "張正杰",
    subtitle: "KIMI CHANG · 小花貓咪叫 ciaohuamiaumichiao",
    footer: ["紀錄片", "音樂 MV", "節目製作", "直播轉播"],
  });
}
