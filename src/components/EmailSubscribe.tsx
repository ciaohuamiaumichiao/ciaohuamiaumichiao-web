"use client";

import { useState } from "react";

/**
 * Substack 訂閱表單（自製 inline form）。
 *
 * 直接 POST 到 Substack 的訂閱 endpoint，使用者填完 email 不用跳離網站。
 * Substack 會自動寄確認信給對方完成訂閱（double opt-in）。
 *
 * Endpoint：https://[publication].substack.com/api/v1/free
 * 必要欄位：email
 *
 * 由於 Substack 沒有 CORS 標頭，fetch 用 no-cors 模式發送
 * — 我們收不到回應內容，但請求會送達。送出後就樂觀顯示成功訊息。
 *
 * 換 publication：改下方常數即可。
 */
const SUBSTACK_PUBLICATION = "ciaohuamiaumichiao";
const SUBSTACK_API = `https://${SUBSTACK_PUBLICATION}.substack.com/api/v1/free`;

export function EmailSubscribe({
  variant = "inline",
}: {
  variant?: "inline" | "section";
}) {
  if (variant === "section") {
    return (
      <section className="border-y border-border/30 px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-accent/80">
            Newsletter
          </p>
          <h2 className="text-2xl font-light tracking-tight sm:text-3xl">
            新文章上線時通知我
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted">
            一個月最多兩封信。寫影像、品牌敘事、創作者職涯。不轉賣、不洗版。
          </p>
          <SubscribeForm size="lg" />
        </div>
      </section>
    );
  }

  return (
    <div className="rounded-lg border border-border/40 bg-surface/50 p-6">
      <h3 className="text-base font-light tracking-tight">新文章上線時通知我</h3>
      <p className="mt-2 text-xs leading-relaxed text-muted">
        一個月最多兩封信。寫影像、品牌敘事、創作者職涯。
      </p>
      <SubscribeForm size="sm" />
    </div>
  );
}

type Status = "idle" | "loading" | "success";

function SubscribeForm({ size }: { size: "sm" | "lg" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status !== "idle") return;
    setStatus("loading");
    try {
      const body = new FormData();
      body.append("email", email);
      await fetch(SUBSTACK_API, {
        method: "POST",
        mode: "no-cors",
        body,
      });
    } catch {
      // 即使網路錯誤也樂觀顯示成功——Substack 的確認信會說明真實狀態
    }
    setStatus("success");
    setEmail("");
  }

  if (status === "success") {
    return (
      <div className={`mt-5 flex items-start gap-3 rounded border border-accent/40 bg-accent/5 ${size === "lg" ? "px-5 py-4" : "px-4 py-3"} text-left`}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-accent">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div>
          <p className="text-sm text-foreground">
            收到了！
          </p>
          <p className="mt-1 text-xs leading-relaxed text-muted">
            請去信箱點 Substack 寄給你的確認信完成訂閱（找不到的話檢查垃圾信件夾）。
          </p>
        </div>
      </div>
    );
  }

  const padding = size === "lg" ? "py-3" : "py-2.5";
  const buttonPadding = size === "lg" ? "px-7 py-3" : "px-5 py-2.5";

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-5 flex flex-col gap-3 sm:flex-row"
    >
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        disabled={status === "loading"}
        className={`flex-1 rounded border border-border/60 bg-transparent px-4 ${padding} text-sm placeholder:text-muted/60 focus:border-accent focus:outline-none disabled:opacity-50`}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className={`rounded border border-accent/60 bg-accent/10 ${buttonPadding} text-xs uppercase tracking-[0.15em] text-accent transition-colors hover:bg-accent hover:text-background disabled:cursor-wait disabled:opacity-60`}
      >
        {status === "loading" ? "送出中⋯" : "訂閱"}
      </button>
    </form>
  );
}
