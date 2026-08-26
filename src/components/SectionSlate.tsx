"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";

/**
 * Rundown 條：每個區塊的標頭。
 * `CUE 01 — ABOUT ……………………… note`
 *  大襯線中文標題
 */
export function SectionSlate({
  index,
  en,
  zh,
  note,
}: {
  index: string;
  en: string;
  zh: string;
  note?: string;
}) {
  return (
    <FadeIn>
      <div className="relative flex items-baseline justify-between gap-6 border-b border-border pb-4">
        <p className="font-mono text-[10px] tracking-[0.15em] text-accent">
          CUE {index}
          <span className="ml-4 hidden uppercase text-muted sm:inline">{en}</span>
        </p>
        {note && (
          <p className="shrink-0 font-mono text-[9px] uppercase tracking-[0.12em] text-muted">
            {note}
          </p>
        )}
        {/* cue 進點：底線的訊號掃過 */}
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.1, ease: [0.25, 0.1, 0, 1] }}
          className="absolute -bottom-px left-0 h-px w-full origin-left bg-gradient-to-r from-accent via-accent/60 to-transparent"
          aria-hidden
        />
      </div>
      <h2 className="mt-8 text-4xl tracking-tight lg:text-5xl">{zh}</h2>
    </FadeIn>
  );
}
