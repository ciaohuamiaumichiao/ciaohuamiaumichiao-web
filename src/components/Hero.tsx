"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Radial gradient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.04] blur-[120px]" />
      </div>

      {/* Decorative lines */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-0 h-full w-px bg-gradient-to-b from-transparent via-border/50 to-transparent" />
        <div className="absolute right-[10%] top-0 h-full w-px bg-gradient-to-b from-transparent via-border/50 to-transparent" />
      </div>

      <div className="relative text-center">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, letterSpacing: "0.35em" }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.1, 0, 1] }}
          className="text-[10px] uppercase text-accent-dim sm:text-xs"
        >
          Director &middot; Curator &middot; Digital Creator
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0, 1] }}
          className="mt-8 text-4xl tracking-tight sm:text-5xl lg:text-6xl"
        >
          張正杰
          <span className="ml-3 font-sans text-2xl font-light tracking-wide text-muted sm:text-3xl lg:text-4xl">
            Kimi Chang
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-accent/60 to-transparent"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-4 text-base tracking-[0.15em] text-muted sm:text-lg"
        >
          小花貓咪叫 <span className="font-mono text-sm">ciaohuamiaumichiao</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mx-auto mt-10 max-w-sm text-sm leading-relaxed text-muted/80"
        >
          以影像說故事，以策展連結人，以數位創造可能。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-12 flex justify-center gap-4"
        >
          <a
            href="#services"
            className="group relative rounded-full border border-accent/20 px-7 py-2.5 text-xs uppercase tracking-[0.15em] text-accent transition-all hover:border-accent/50 hover:bg-accent/5"
          >
            了解服務
          </a>
          <a
            href="https://line.me/R/ti/p/@097eutou"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#06C755] px-7 py-2.5 text-xs uppercase tracking-[0.15em] font-medium text-white transition-opacity hover:opacity-90"
          >
            LINE 聯繫
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[9px] uppercase tracking-[0.3em] text-muted/50">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-6 w-px bg-gradient-to-b from-muted/40 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
