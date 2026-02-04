"use client"

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#060b14] text-slate-100">
      <header className="sticky top-0 z-50 h-14 border-b border-white/10 bg-[#060b14]/90 backdrop-blur">
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4">
          <Link className="text-lg font-extrabold tracking-wide text-cyan-300" href="/">
            LOOP
          </Link>

          <nav className="flex items-center gap-5 text-sm">
            <a className="text-slate-200/90 hover:text-white transition" href="/movies">
              Movies
            </a>
            <a className="text-slate-200/90 hover:text-white transition" href="/screenings">
              Screenings
            </a>
            <a className="text-slate-200/90 hover:text-white transition" href="/forum">
              Forum
            </a>

            <a
              className="ml-2 rounded-full bg-blue-500 px-4 py-2 text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:brightness-110"
              href="/login"
            >
              Login
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">

      </main>
    </div>
  );
}
