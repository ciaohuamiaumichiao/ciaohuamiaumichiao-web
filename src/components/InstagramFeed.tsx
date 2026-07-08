"use client";

import { useEffect } from "react";
import { SectionSlate } from "./SectionSlate";

// Behold widget ID — 設定步驟：
// 1. 前往 https://behold.so 免費註冊
// 2. 連結你的 Instagram 帳號 @ciaohuamiaumichiao
// 3. 建立一個 widget，選擇樣式（建議 Grid）
// 4. 複製 widget ID，填入下方
const BEHOLD_WIDGET_ID = "cECR6KvFPWPhVAOC5sAr";

export function InstagramFeed() {
  useEffect(() => {
    if (!BEHOLD_WIDGET_ID) return;

    // Load Behold embed script
    const existing = document.querySelector(
      'script[src="https://w.behold.so/widget.js"]'
    );
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://w.behold.so/widget.js";
      script.type = "module";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="instagram" className="border-t border-border px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionSlate index="09" en="Stills" zh="最新動態" note="@CIAOHUAMIAUMICHIAO" />

        <div className="mt-12">
          {BEHOLD_WIDGET_ID ? (
            // Behold 即時 Instagram Feed
            <div
              dangerouslySetInnerHTML={{
                __html: `<behold-widget feed-id="${BEHOLD_WIDGET_ID}"></behold-widget>`,
              }}
            />
          ) : (
            // 尚未設定 Behold — 顯示 placeholder 連結
            <a
              href="https://www.instagram.com/ciaohuamiaumichiao"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="frame-marks aspect-square border border-border/50 bg-surface transition-all group-hover:border-accent/30"
                  >
                    <div className="flex h-full items-center justify-center">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-border"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" />
                        <circle cx="12" cy="12" r="5" />
                        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-center text-sm text-muted group-hover:text-accent">
                前往 Instagram 查看最新動態 →
              </p>
            </a>
          )}
        </div>

        <div className="mt-8 text-right">
          <a
            href="https://www.instagram.com/ciaohuamiaumichiao"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted transition-colors hover:text-accent"
          >
            Instagram →
          </a>
        </div>
      </div>
    </section>
  );
}
