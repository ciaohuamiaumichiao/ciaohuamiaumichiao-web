/**
 * Buttondown 訂閱表單。
 * 設定步驟：
 * 1. 註冊 https://buttondown.email （免費 100 訂閱以內）
 * 2. 把下方 BUTTONDOWN_USERNAME 改成你的帳號
 * 3. 在 buttondown 設定頁開啟 "Allow embedding"
 * 完整指南：docs/email-setup.md
 */
const BUTTONDOWN_USERNAME = "ciaohuamiaumichiao"; // ← 改成你的 Buttondown 帳號

export function EmailSubscribe({
  variant = "inline",
}: {
  variant?: "inline" | "section";
}) {
  const action = `https://buttondown.com/api/emails/embed-subscribe/${BUTTONDOWN_USERNAME}`;

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
          <SubscribeForm action={action} />
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
      <SubscribeForm action={action} />
    </div>
  );
}

function SubscribeForm({ action }: { action: string }) {
  return (
    <form
      action={action}
      method="post"
      target="popupwindow"
      className="mt-5 flex flex-col gap-3 sm:flex-row"
    >
      <input
        type="email"
        name="email"
        placeholder="your@email.com"
        required
        className="flex-1 rounded border border-border/60 bg-transparent px-4 py-2.5 text-sm placeholder:text-muted/60 focus:border-accent focus:outline-none"
      />
      <button
        type="submit"
        className="rounded border border-accent/60 bg-accent/10 px-5 py-2.5 text-xs uppercase tracking-[0.15em] text-accent transition-colors hover:bg-accent hover:text-background"
      >
        訂閱
      </button>
    </form>
  );
}
