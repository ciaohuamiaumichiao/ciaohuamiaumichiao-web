import { renderOg, OG_SIZE } from "@/lib/og";

export const alt = "ether.fi Cash 卡評價：台灣能辦嗎？導演半年刷 1,353 美元的帳單｜小花貓咪叫";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOg({
    slate: "FIELD NOTES — ETHER.FI CASH",
    kicker: "ETHER.FI CASH REVIEW",
    title: "ether.fi Cash 卡在台灣好用嗎？",
    subtitle: "半年刷 1,353 美元、被拒絕 47 次的實測",
    footer: ["帳單公開", "回饋怎麼算", "台灣怎麼儲值", "含推薦連結"],
  });
}
