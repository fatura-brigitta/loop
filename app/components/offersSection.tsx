"use client";

import Reveal from "@/app/components/reveal";

export default function OffersSection() {
  return (
    <section className="py-14">
      <div className="mx-auto mb-16 max-w-6xl text-center">
        <Reveal>
          <>
            <h2 className="mb-4 text-4xl font-bold">
              Több mint <span className="text-[--accent]">egy mozi</span>
            </h2>

            <p className="text-[--text-soft]">A film mellé élmény is jár.</p>
          </>
        </Reveal>
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        <Reveal>
          <>
            <div className="rounded-xl border border-[--border-color] bg-[var(--card-bg)] p-6 text-center backdrop-blur transition hover:scale-[1.03] hover:cursor-pointer hover:bg-slate-100 dark:hover:bg-white/10">
              <div className="mb-3 text-3xl">🍿</div>
              <h3 className="mb-2 text-xl font-bold">Friss popcorn & snackek</h3>
              <p className="text-[--text-soft]">
                Frissen pattogtatott popcorn, nachos, snackek és rengeteg üdítő vár rád minden
                vetítés előtt.
              </p>
            </div>
          </>
        </Reveal>

        <Reveal>
          <>
            <div className="rounded-xl border border-[--border-color] bg-[var(--card-bg)] p-6 text-center backdrop-blur transition hover:scale-[1.03] hover:cursor-pointer hover:bg-slate-100 dark:hover:bg-white/10">
              <div className="mb-3 text-3xl">🎬</div>
              <h3 className="mb-2 text-xl font-bold">Különleges vetítések</h3>
              <p className="text-[--text-soft]">
                3D, 4DX, premier vetítések és limitált események - mindig van valami új élmény a
                moziban.
              </p>
            </div>
          </>
        </Reveal>

        <Reveal>
          <>
            <div className="rounded-xl border border-[--border-color]  bg-[var(--card-bg)] p-6 text-center backdrop-blur transition hover:scale-[1.03] hover:cursor-pointer hover:bg-slate-100 dark:hover:bg-white/10">
              <div className="mb-3 text-3xl">👑</div>
              <h3 className="mb-2 text-xl font-bold">VIP élmény</h3>
              <p className="text-[--text-soft]">
                Extra kényelmes ülések, prémium hangzás és exkluzív vetítések azoknak, akik a
                maximumot keresik.
              </p>
            </div>
          </>
        </Reveal>
      </div>
    </section>
  );
}
