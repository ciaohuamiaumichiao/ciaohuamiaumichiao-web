"use client";

import { FadeIn } from "./FadeIn";
import { SectionSlate } from "./SectionSlate";

export function Showreel() {
  return (
    <section id="showreel" className="border-t border-border px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionSlate index="05" en="Program" zh="作品影像" note="PGM · YOUTUBE" />

        <FadeIn delay={0.2}>
          {/* 監視器框 */}
          <div className="mt-14 overflow-hidden border border-border/60">
            {/* 上緣狀態列 */}
            <div className="flex items-center justify-between border-b border-border/60 bg-surface px-4 py-2.5">
              <div className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-live" />
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/80">
                  PGM — Showreel
                </span>
              </div>
              <span className="hidden font-mono text-[9px] tracking-[0.15em] text-muted sm:inline">
                16:9 · 1080P
              </span>
            </div>

            <div className="aspect-video w-full bg-black">
              <iframe
                src="https://www.youtube.com/embed/videoseries?list=PLoB4pTdgzrfgxNIOhQlxWOm1zL3lYdWpB"
                title="作品精選播放清單"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* 下緣 timecode 列 */}
            <div className="flex items-center justify-between border-t border-border/60 bg-surface px-4 py-2">
              <span className="font-mono text-[9px] tracking-[0.15em] text-muted">
                作品精選播放清單
              </span>
              <a
                href="https://www.youtube.com/channel/UCfxcum7XC4qB-jFbH1qjE-Q"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[9px] uppercase tracking-[0.12em] text-accent/70 transition-colors hover:text-accent"
              >
                YouTube 頻道 →
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-16 flex flex-col items-center gap-5 text-center">
            <p className="text-sm text-muted">
              想了解更多作品或合作洽談？
            </p>
            <a
              href="https://line.me/R/ti/p/@097eutou"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#06C755] px-7 py-3 font-mono text-[10px] uppercase tracking-[0.12em] font-medium text-white transition-opacity hover:opacity-90"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              加入 LINE 聊聊
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
