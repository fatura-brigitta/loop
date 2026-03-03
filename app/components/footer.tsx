export default function Footer() {
  return (
    <footer className="mt-32 border-t border-[--border-color)] py-4 text-center text-sm text-[--text-soft)]">
      <div className="max-w-6xl mx-auto space-y-3">
        <div className="text-lg font-semibold text-[--text-main)]">
          Loop Mozi
        </div>

        <div>
          loopcinema8@gmail.com • +36 30 123 4567 • 9021 Győr, Szent István út 15.
        </div>

        <div className="opacity-70">
          © {new Date().getFullYear()} Loop Mozi. Minden jog fenntartva.
        </div>
      </div>
    </footer>
  );
}