import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "小花貓咪叫 ciaohuamiaumichiao — 張正杰",
    short_name: "小花貓咪叫",
    description:
      "張正杰——影像導演、策展人、創意數位建置。影像製作、影像與藝術顧問、品牌數位建置服務。",
    start_url: "/",
    display: "standalone",
    background_color: "#080808",
    theme_color: "#d4a96e",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
