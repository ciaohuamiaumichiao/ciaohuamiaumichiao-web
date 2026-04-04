export function Footer() {
  return (
    <footer className="border-t border-border/30 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-[11px] tracking-wider text-muted">
          &copy; {new Date().getFullYear()} 小花貓咪叫 ciaohuamiaumichiao
        </p>
        <a
          href="https://www.instagram.com/ciaohuamiaumichiao"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] tracking-wider text-muted transition-colors hover:text-accent-dim"
        >
          @ciaohuamiaumichiao
        </a>
      </div>
    </footer>
  );
}
