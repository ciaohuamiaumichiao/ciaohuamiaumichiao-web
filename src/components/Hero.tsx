"use client";

import { motion } from "framer-motion";

const ease = [0.25, 0.1, 0, 1] as const;

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6">
      {/* 四角 safe-area 十字標 */}
      <div className="pointer-events-none absolute inset-0 hidden font-mono text-[11px] text-muted/40 sm:block" aria-hidden>
        <span className="absolute left-5 top-20">+</span>
        <span className="absolute right-5 top-20">+</span>
        <span className="absolute bottom-6 left-5">+</span>
        <span className="absolute bottom-6 right-5">+</span>
      </div>

      {/* 左上：production meta */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.7 }}
        className="absolute left-6 top-24 hidden font-mono text-[9px] leading-[1.9] tracking-[0.12em] text-muted sm:block lg:left-10"
        aria-hidden
      >
        <p>PROD&nbsp;&nbsp;CIAOHUAMIAUMICHIAO</p>
        <p>ROLE&nbsp;&nbsp;DIRECTOR / CURATOR</p>
        <p>DATE&nbsp;&nbsp;2026.07</p>
      </motion.div>

      {/* 右上：REC */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.7 }}
        className="absolute right-6 top-24 flex items-center gap-2 lg:right-10"
        aria-hidden
      >
        <span className="rec-blink h-2 w-2 rounded-full bg-live" />
        <span className="font-mono text-[9px] tracking-[0.2em] text-muted">REC</span>
      </motion.div>

      {/* 右緣：直排 tagline（如片頭字幕） */}
      <motion.p
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.4, ease }}
        className="v-text absolute right-10 top-1/2 hidden -translate-y-1/2 font-serif text-sm text-muted lg:block xl:right-16"
        style={{ fontFamily: '"Noto Serif TC", serif' }}
      >
        以影像說故事，以策展連結人，以數位創造可能。
      </motion.p>

      {/* 主構圖：置左 */}
      <div className="relative mx-auto w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.05em" }}
          animate={{ opacity: 1, letterSpacing: "0.18em" }}
          transition={{ duration: 1.2, delay: 0.2, ease }}
          className="font-mono text-[10px] uppercase text-accent sm:text-[11px]"
        >
          Director · Curator · Digital Creator
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease }}
          className="mt-8 text-6xl tracking-tight sm:text-7xl lg:text-8xl"
        >
          張正杰
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75, ease }}
          className="mt-5 flex flex-wrap items-baseline gap-x-5 gap-y-2"
        >
          <p className="font-mono text-[11px] tracking-[0.2em] text-muted">KIMI CHANG</p>
          <span className="hidden h-px w-10 bg-accent/40 sm:inline-block" />
          <p className="text-sm tracking-[0.12em] text-muted">
            小花貓咪叫 <span className="font-mono text-[11px]">ciaohuamiaumichiao</span>
          </p>
        </motion.div>

        {/* 一人製作所宣言 */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.05 }}
          className="mt-10 max-w-md text-sm leading-[1.9] text-muted"
        >
          影像、節目、直播、網站，四條線同時在跑。
          從企劃、現場到上線，一個導演的製作所。
        </motion.p>

        {/* 直排 tagline 的手機版（橫排） */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.2 }}
          className="mt-4 max-w-md text-[13px] leading-relaxed text-muted/80 lg:hidden"
        >
          以影像說故事，以策展連結人，以數位創造可能。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.35, ease }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <a
            href="#work"
            className="frame-marks border border-accent/30 px-7 py-3 font-mono text-[10px] uppercase tracking-[0.15em] text-accent transition-colors hover:border-accent/60 hover:bg-accent/5"
          >
            今年做的事
          </a>
          <a
            href="https://line.me/R/ti/p/@097eutou"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#06C755] px-7 py-3 font-mono text-[10px] uppercase tracking-[0.15em] font-medium text-white transition-opacity hover:opacity-90"
          >
            LINE 聯繫
          </a>
        </motion.div>
      </div>

      {/* 底部：timecode + scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-6 right-6 mx-auto flex max-w-6xl items-center justify-between"
      >
        <p className="font-mono text-[9px] tracking-[0.18em] text-muted/70">
          TC 00:00:00:00
        </p>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted/70">
            Scroll
          </span>
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="block h-5 w-px bg-gradient-to-b from-muted/50 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
