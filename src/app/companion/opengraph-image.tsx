import { renderOg, OG_SIZE } from "@/lib/og";

export const alt = "影像陪伴計畫：陪你把自己的故事拍出來｜小花貓咪叫 張正杰";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOg({
    slate: "PROJECT — COMPANION",
    kicker: "COMPANION FILM PROJECT",
    title: "影像陪伴計畫",
    subtitle: "陪你，把自己的故事拍出來",
    footer: ["偏鄉學校", "教會團隊", "學生", "公益團體", "幕後的人"],
  });
}
