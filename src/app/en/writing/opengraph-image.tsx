import { renderOg, OG_SIZE } from "@/lib/og";

export const alt = "Writing by Kimi Chang";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOg({
    slate: "WRITING — INDEX",
    kicker: "NOTES FROM SET",
    title: "Writing",
    subtitle: "KIMI CHANG · VIDEO PRODUCER & CREATIVE DIRECTOR",
    footer: ["Live production", "Documentary", "AI & creative work", "Film notes"],
    timecode: "RSS AVAILABLE",
  });
}
