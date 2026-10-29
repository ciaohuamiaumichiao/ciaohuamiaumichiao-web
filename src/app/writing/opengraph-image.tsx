import { renderOg, OG_SIZE } from "@/lib/og";

export const alt = "寫作｜張正杰";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOg({
    slate: "WRITING — INDEX",
    kicker: "SCRIPTS & NOTES",
    title: "寫作",
    subtitle: "上課、拍片、跟客戶聊天的時候想到的事",
    footer: ["幕後工作", "影像", "個人品牌", "信仰"],
    timecode: "RSS AVAILABLE",
  });
}
