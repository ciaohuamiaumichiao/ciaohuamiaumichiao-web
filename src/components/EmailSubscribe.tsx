/**
 * Substack 訂閱按鈕（外連到 Substack 訂閱頁）。
 *
 * 為什麼用外連而不是 embed iframe：
 * 1. Substack 的 iframe 樣式無法配合本站主題、載入慢
 * 2. 外連讓訂閱流程在 Substack 完成，使用者體驗更順
 * 3. 未來想換服務只要改 URL 即可
 *
 * 設定步驟：docs/newsletter-setup.md
 */
const SUBSTACK_URL = "https://ciaohuamiaumichiao.substack.com/subscribe";

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
          <SubscribeButton size="lg" />
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
      <SubscribeButton size="sm" />
    </div>
  );
}

function SubscribeButton({ size }: { size: "sm" | "lg" }) {
  const padding = size === "lg" ? "px-7 py-3" : "px-5 py-2.5";
  return (
    <a
      href={SUBSTACK_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`mt-5 inline-flex items-center gap-2 rounded border border-accent/60 bg-accent/10 ${padding} text-xs uppercase tracking-[0.15em] text-accent transition-colors hover:bg-accent hover:text-background`}
    >
      <span>訂閱電子報</span>
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}
