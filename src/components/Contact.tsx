export function Contact() {
  return (
    <section id="contact" className="border-t border-border px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-accent-dim uppercase">
              Contact
            </p>
            <h2 className="mt-2 text-3xl font-light tracking-tight">聯絡方式</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              無論是影像製作、藝術顧問或數位建置需求，歡迎來信或透過 IG 聯繫。
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <p className="font-mono text-xs text-accent-dim uppercase">Email</p>
              <a
                href="mailto:ciaohuamiaumichiao@gmail.com"
                className="mt-2 block text-lg text-foreground transition-colors hover:text-accent"
              >
                ciaohuamiaumichiao@gmail.com
              </a>
            </div>

            <div>
              <p className="font-mono text-xs text-accent-dim uppercase">LINE@</p>
              <a
                href="https://line.me/R/ti/p/@097eutou"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-lg text-foreground transition-colors hover:text-accent"
              >
                @097eutou 小花貓咪叫
              </a>
            </div>

            <div>
              <p className="font-mono text-xs text-accent-dim uppercase">Instagram</p>
              <a
                href="https://www.instagram.com/ciaohuamiaumichiao"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-lg text-foreground transition-colors hover:text-accent"
              >
                @ciaohuamiaumichiao
              </a>
            </div>

            <div>
              <p className="font-mono text-xs text-accent-dim uppercase">YouTube</p>
              <a
                href="https://www.youtube.com/channel/UCfxcum7XC4qB-jFbH1qjE-Q"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-lg text-foreground transition-colors hover:text-accent"
              >
                小花貓咪叫 ciaohuamiaumichiao
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
