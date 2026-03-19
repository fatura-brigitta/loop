"use client";

import Reveal from "@/app/components/reveal";

export default function OffersSection() {
  return (
    <section className="py-10 sm:py-14 md:py-18 px-4">
      <div className="mx-auto mb-8 sm:mb-12 md:mb-16 max-w-6xl text-center">
        <Reveal>
          <>
            <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-bold">
              Több mint <span className="text-[--accent]">egy mozi</span>
            </h2>
            <p className="text-sm sm:text-base text-[--text-soft]">
              A film mellé élmény is jár.
            </p>
          </>
        </Reveal>
      </div>

      <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-6 lg:grid lg:grid-cols-3">
        <div className="w-full sm:w-[calc(50%-12px)] lg:w-auto">
          <Reveal>
            <div className="rounded-xl border border-[--border-color] bg-[var(--card-bg)] p-4 text-center transition hover:cursor-pointer hover:scale-[1.02] hover:bg-[var(--text-slate-hover)] sm:p-5 md:p-6 sm:hover:scale-[1.03]">
              <div className="mb-3 text-2xl sm:text-3xl">🍿</div>
              <h3 className="mb-2 text-base font-bold sm:text-lg md:text-xl">
                Friss popcorn & snackek
              </h3>
              <p className="text-sm text-[--text-soft] sm:text-base">
                Frissen pattogtatott popcorn, nachos, snackek és rengeteg üdítő vár rád minden
                vetítés előtt.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="w-full sm:w-[calc(50%-12px)] lg:w-auto">
          <Reveal>
            <div className="rounded-xl border border-[--border-color] bg-[var(--card-bg)] p-4 text-center transition hover:cursor-pointer hover:scale-[1.02] hover:bg-[var(--text-slate-hover)] sm:p-5 md:p-6 sm:hover:scale-[1.03]">
              <div className="mb-3 text-2xl sm:text-3xl">🎬</div>
              <h3 className="mb-2 text-base font-bold sm:text-lg md:text-xl">
                Különleges vetítések
              </h3>
              <p className="text-sm text-[--text-soft] sm:text-base">
                3D, 4DX, premier vetítések és limitált események - mindig van valami új élmény a
                moziban.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="w-full sm:w-[calc(50%-12px)] lg:w-auto">
          <Reveal>
            <div className="rounded-xl border border-[--border-color] bg-[var(--card-bg)] p-4 text-center transition hover:cursor-pointer hover:scale-[1.02] hover:bg-[var(--text-slate-hover)] sm:p-5 md:p-6 sm:hover:scale-[1.03]">
              <div className="mb-3 text-2xl sm:text-3xl">👑</div>
              <h3 className="mb-2 text-base font-bold sm:text-lg md:text-xl">VIP élmény</h3>
              <p className="text-sm text-[--text-soft] sm:text-base">
                Extra kényelmes ülések, prémium hangzás és exkluzív vetítések azoknak, akik a
                maximumot keresik.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}