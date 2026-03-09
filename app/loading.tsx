export default function GlobalLoading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[var(--bg-main)] text-[var(--text-main)]">
      <div className="absolute h-[600px] w-[600px] animate-pulse rounded-full bg-blue-500/20 blur-[160px]" />

      <div className="relative flex flex-col items-center gap-8">
        <div className="h-14 w-14 animate-spin rounded-full border-4 border-white/20 border-t-white" />

        <div className="text-2xl font-bold tracking-widest">LOOP MOZI</div>

        <div className="text-[var(--text-main)]/70">Betöltés...</div>
      </div>
    </div>



  );
}
