export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-muted">
          &copy; {new Date().getFullYear()} 小花貓咪叫 ciaohuamiaumichiao
        </p>
        <p className="font-mono text-xs text-muted">
          甚好創意有限公司
        </p>
      </div>
    </footer>
  );
}
