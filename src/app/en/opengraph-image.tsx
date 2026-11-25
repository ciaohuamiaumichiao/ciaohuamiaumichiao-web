import { renderOg, OG_SIZE } from "@/lib/og";

export const alt = "Kimi Chang | Video Producer & Creative Director | Remote from Taiwan";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOg({
    slate: "REMOTE · UTC+8",
    kicker: "VIDEO PRODUCER · CREATIVE DIRECTOR",
    title: "Kimi Chang",
    subtitle: "DOCUMENTARY · SHOWS · LIVE STREAMING · AI-ASSISTED POST",
    footer: ["Documentary", "Video podcasts", "Live streaming", "AI workflows"],
  });
}
