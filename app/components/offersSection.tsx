"use client";

import Reveal from "@/app/components/reveal";

export default function OffersSection() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-6xl text-center mb-16">
        <Reveal>
          <>
            <h2 className="text-4xl font-bold mb-4">
              Több mint <span className="text-[--accent]">egy mozi</span>
            </h2>

            <p className="text-[--text-soft]">
              A film mellé élmény is jár.
            </p>
          </>
        </Reveal>
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        <Reveal>
            <>
          <div className="rounded-xl border border-[--border-color] bg-[--card-bg] p-6 text-center backdrop-blur transition hover:scale-[1.03] hover:bg-white/10 hover:cursor-pointer">
            <div className="text-3xl mb-3">🍿</div>
            <h3 className="text-xl font-bold mb-2">Friss popcorn & snackek</h3>
            <p className="text-[--text-soft]">
              Frissen pattogtatott popcorn, nachos, snackek és rengeteg üdítő
              vár rád minden vetítés előtt.
            </p>
          </div>
          </>
        </Reveal>

        <Reveal>
            <>
          <div className="rounded-xl border border-[--border-color] bg-[--card-bg] p-6 text-center backdrop-blur transition hover:scale-[1.03] hover:bg-white/10 hover:cursor-pointer">
            <div className="text-3xl mb-3">🎬</div>
            <h3 className="text-xl font-bold mb-2">Különleges vetítések</h3>
            <p className="text-[--text-soft]">
              3D, 4DX, premier vetítések és limitált események - mindig van
              valami új élmény a moziban.
            </p>
          </div>
          </>
        </Reveal>

        <Reveal>
            <>
          <div className="rounded-xl border border-[--border-color] bg-[--card-bg] p-6 text-center backdrop-blur transition hover:scale-[1.03] hover:bg-white/10 hover:cursor-pointer">
            <div className="text-3xl mb-3">👑</div>
            <h3 className="text-xl font-bold mb-2">VIP élmény</h3>
            <p className="text-[--text-soft]">
              Extra kényelmes ülések, prémium hangzás és exkluzív vetítések
              azoknak, akik a maximumot keresik.
            </p>
          </div>
            </>
        </Reveal>
      </div>
    </section>
  );
}