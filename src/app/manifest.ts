import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "小花貓咪叫 ciaohuamiaumichiao — 張正杰",
    short_name: "小花貓咪叫",
    description:
      "張正杰——影像導演、策展人。影像製作、節目製作、直播與轉播統籌、創意數位建置服務。",
    start_url: "/",
    display: "standalone",
    background_color: "#08090b",
    theme_color: "#d8a45c",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
