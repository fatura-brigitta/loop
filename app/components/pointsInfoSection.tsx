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
    <section className="bg-[--bg-soft2] py-10 sm:py-14 md:py-18 px-4">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <>
            <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl font-bold">
              Gyűjts pontokat, érj el <span className="text-[--accent]">rangokat</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-[--text-soft]">
              Minden jegyvásárlás után pontokat kapsz. Minél többet mozizol, annál magasabb rangot
              érhetsz el.
            </p>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-[--text-soft]">
              A rangok különböző kedvezményeket biztosítanak a moziban.
            </p>
          </>
        </Reveal>
      </div>

      <div className="mx-auto mt-10 mb-10 max-w-6xl">
        <Reveal>
          <>
            <div className="grid gap-4 sm:gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {ranks.map((r, i) => {
              const isLast = i === ranks.length - 1;

              const discount = discounts.find(
                (d) => d.id?.toString() === r.discount_id?.toString()
              );

              return (
                <div
                  key={r.id}
                  className={
                    isLast
                      ? "col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5 flex justify-center"
                      : ""
                  }
                >
                  <div className="w-full max-w-[220px]">
                    <div className="rounded-xl border border-[--border-color] bg-[var(--card-bg)] p-4 sm:p-5 md:p-6 text-center transition hover:scale-[1.02] sm:hover:scale-[1.04] hover:bg-[var(--text-slate-hover)] cursor-pointer">
                      
                      <div className="relative mx-auto mb-4 h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16">
                        <Image
                          alt={r.name}
                          className="object-contain"
                          fill
                          src={r.image}
                          unoptimized
                        />
                      </div>

                      <div className="text-sm sm:text-base md:text-lg font-bold">
                        {r.name}
                      </div>

                      <div className="mt-2 text-xs sm:text-sm text-[--text-soft]">
                        {r.point_limit} pont szükséges
                      </div>

                      {discount ? (
                        <div className="mt-3 text-sm sm:text-base font-semibold text-cyan-400">
                          {discount.name}
                        </div>
                      ) : (
                        <div className="mt-3 text-xs sm:text-sm text-cyan-400 font-semibold">
                          Nincs kedvezmény
                        </div>
                      )}

                    </div>
                  </div>
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
