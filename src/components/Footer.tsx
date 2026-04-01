export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-muted">
          &copy; {new Date().getFullYear()} 小花貓咪叫 ciaohuamiaumichiao
        </p>
        <a
          href="https://www.instagram.com/ciaohuamiaumichiao"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-muted transition-colors hover:text-accent"
        >
          @ciaohuamiaumichiao
        </a>
      </div>
    </footer>
  );
}
