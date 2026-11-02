import { renderOg, OG_SIZE } from "@/lib/og";

export const alt = "Higgsfield 評價與價格：導演 13 天花掉 1,100 點的實測｜小花貓咪叫";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOg({
    slate: "FIELD NOTES — HIGGSFIELD",
    kicker: "HIGGSFIELD REVIEW",
    title: "Higgsfield 值得訂嗎？",
    subtitle: "一個導演 13 天花掉 1,100 點的實測",
    footer: ["帳單公開", "模型怎麼選", "價格方案", "含聯盟連結"],
  });
}
