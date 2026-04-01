export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative text-center">
        <p className="font-mono text-xs tracking-[0.3em] text-accent-dim uppercase">
          Director &middot; Curator &middot; Digital Creator
        </p>

        <h1 className="mt-6 text-5xl font-light tracking-tight sm:text-7xl lg:text-8xl">
          小花貓咪叫
        </h1>

        <p className="mt-4 font-mono text-lg tracking-widest text-muted sm:text-xl">
          ciaohuamiaumichiao
        </p>

        <p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-muted">
          以影像說故事，以策展連結人，以數位創造可能。
        </p>

        <div className="mt-12 flex justify-center gap-4">
          <a
            href="#services"
            className="rounded-full border border-accent/30 px-6 py-2.5 text-sm text-accent transition-all hover:border-accent hover:bg-accent/10"
          >
            了解服務
          </a>
          <a
            href="#contact"
            className="rounded-full bg-accent px-6 py-2.5 text-sm text-background transition-colors hover:bg-accent-dim"
          >
            聯絡我
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="h-8 w-[1px] animate-pulse bg-gradient-to-b from-transparent to-muted" />
      </div>
    </section>
  );
}
