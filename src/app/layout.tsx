import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "小花貓咪叫 ciaohuamiaumichiao — 導演・策展人",
  description:
    "張正杰——影像導演、策展人、創意數位建置。影像製作、策展顧問、品牌數位建置服務。",
  openGraph: {
    title: "小花貓咪叫 ciaohuamiaumichiao",
    description: "導演・策展人・創意數位建置",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
