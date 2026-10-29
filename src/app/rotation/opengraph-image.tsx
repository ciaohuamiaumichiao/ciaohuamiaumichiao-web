import { renderOg, OG_SIZE } from "@/lib/og";

export const alt = "排班陪跑：陪教會把服事排班理順｜小花貓咪叫 張正杰";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOg({
    slate: "SERVICE — ROTATION",
    kicker: "WORKSHOP + 8 WEEKS COACHING",
    title: "排班陪跑",
    subtitle: "陪教會把服事排班理順，系統留給你們",
    footer: ["一日工作坊", "八週陪跑", "LINE 通知", "不收月費"],
  });
}
