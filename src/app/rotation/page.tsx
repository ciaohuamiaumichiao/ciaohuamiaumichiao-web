import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RotationContent } from "./RotationContent";

export const metadata: Metadata = {
  title: "排班陪跑 — 陪你的教會把服事排班理順｜小花貓咪叫",
  description:
    "不是賣你一套軟體，是陪你的團隊把排班這件事理順。一日工作坊＋八週陪跑，系統教到會、之後不用付月費。從 HOLYWOOD 影視團隊的真實系統長出來的服務。",
};

export default function RotationPage() {
  return (
    <>
      <Header />
      <RotationContent />
      <Footer />
    </>
  );
}
