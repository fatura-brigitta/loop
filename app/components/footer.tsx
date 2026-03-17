export default function Footer() {
  return (
    <footer className="border-t border-[--border-color] py-6 sm:py-8 text-center text-sm text-[--text-soft] bg-[var(--card-bg)]" data-cy="footer">
      <div className="max-w-6xl mx-auto px-4 space-y-3 sm:space-y-4">
        <div className="text-base sm:text-lg font-semibold text-[--text-main]">
          Loop Mozi
        </div>

        <div className="flex flex-col items-center gap-1 sm:flex-row sm:justify-center sm:gap-2">
          <span>loopcinema8@gmail.com</span>
          <span className="hidden sm:inline">•</span>
          <span>+36 30 123 4567</span>
          <span className="hidden sm:inline">•</span>
          <span>9021 Győr, Szent István út 15.</span>
        </div>

        <div className="text-xs sm:text-sm opacity-70">
          © {new Date().getFullYear()} Loop Mozi. Minden jog fenntartva.
        </div>
      </div>
    </footer>
  );
}