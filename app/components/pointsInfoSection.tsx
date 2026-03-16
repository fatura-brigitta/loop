"use client";

import Image from "next/image";
import Reveal from "@/app/components/reveal";

type RankType = {
  id: string;
  name: string;
  point_limit: number;
  image: string;
  discount_id?: string | null;
};

type DiscountType = {
  id: string;
  name: string;
  percent: number;
};

export default function PointsInfoSection({ ranks, discounts,}: { ranks: RankType[]; discounts: DiscountType[];}) {
  if (!ranks?.length) return null;
  return (
    <section className="bg-[--bg-soft2] py-18">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <>
            <h2 className="mb-6 text-4xl font-bold">
              Gyűjts pontokat, érj el <span className="text-[--accent]">rangokat</span>
            </h2>

            <p className="text-lg leading-relaxed text-[--text-soft]">
              Minden jegyvásárlás után pontokat kapsz. Minél többet mozizol, annál magasabb rangot
              érhetsz el.
            </p>

            <p className="mt-6 text-[--text-soft]">
              A rangok különböző kedvezményeket biztosítanak a moziban.
            </p>
          </>
        </Reveal>
      </div>

      <div className="mx-auto mt-10 mb-20 max-w-6xl">
        <Reveal>
          <>
            <div className="grid gap-6 md:grid-cols-5">
              {ranks.map((r) => {
                const discount = discounts.find(
                  (d) => d.id?.toString() === r.discount_id?.toString(),
                );
                return (
                  <div
                    className="rounded-xl border border-[--border-color] bg-[var(--card-bg)] p-6 text-center backdrop-blur transition hover:scale-[1.05] hover:cursor-pointer hover:bg-[var(--text-slate-hover)]"
                    key={r.id}
                  >
                    <div className="relative mx-auto mb-4 h-16 w-16">
                      <Image
                        alt={r.name}
                        className="object-contain"
                        fill
                        src={r.image}
                        unoptimized
                      />
                    </div>

                    <div className="text-xl font-bold">{r.name}</div>

                    <div className="mt-2 text-sm text-[--text-soft]">
                      {r.point_limit} pont szükséges
                    </div>

                    {discount ? (
                      <div className="mt-3 font-semibold text-cyan-400">{discount.name}</div>
                    ) : (
                      <div className="mt-3 text-sm text-[--text-soft]">Nincs kedvezmény</div>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        </Reveal>
      </div>
    </section>
  );
}
