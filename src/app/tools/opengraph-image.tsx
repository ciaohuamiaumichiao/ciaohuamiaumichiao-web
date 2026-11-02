import { renderOg, OG_SIZE } from "@/lib/og";

export const alt = "工具實測：導演真的在用的影像與 AI 工具｜小花貓咪叫";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOg({
    slate: "FIELD NOTES — TOOLS",
    kicker: "FIELD NOTES",
    title: "工具實測",
    subtitle: "導演自己花錢用過的影像與 AI 工具",
    footer: ["實際帳單", "案子心得", "聯盟連結都標清楚"],
  });
}
