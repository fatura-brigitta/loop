"use client";

import Image from "next/image";

export default function RankSection({ rankData, warning, pointsNeeded }: any) {

  if (!rankData?.rank) return null;

  return (
    <>
      <div className="mx-auto max-w-5xl px-4 pt-12">
        <div className="mb-10 w-full rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-5 sm:p-6 md:p-8 shadow-2xl backdrop-blur">
          <div className="relative flex flex-col gap-6 sm:flex-row md:items-center">
            <div className="flex items-center gap-5">
              <div className="relative h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 shrink-0">
                <Image
                  alt="rank"
                  className="h-full w-full object-contain drop-shadow-[0_0_35px_rgba(0,255,255,0.35)]"
                  height={128}
                  src={rankData.rank.image}
                  width={128}
                />
              </div>

              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--text-main2)]">
                  {rankData.rank.name} rang
                </h2>
                <div className="mt-1 text-sm text-[var(--text-main)]/70">
                  Összes pont:{" "}
                  <span className="font-bold text-[var(--text-main)]">
                    {rankData.points}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="mt-3 sm:mt-0 h-4 w-full overflow-hidden rounded-full border border-[var(--border-color)] bg-white/10">
                <div
                  className="h-full rounded-full bg-cyan-400 transition-all duration-1000 ease-out"
                  style={{ width: `${rankData.progress ?? 0}%` }}
                />
              </div>

              {rankData.nextRank && rankData.rank.name !== "BRONZE" ? (
                <div className="mt-3 text-sm text-[var(--text-main)]/70">
                  Következő rang:{" "}
                  <span className="font-semibold text-[var(--text-main2)]">
                    {rankData.nextRank.name}
                  </span>{" "}
                  • még <span className="font-bold">{pointsNeeded}</span> pont
                </div>
              ) : (
                <div className="mt-3 text-sm font-semibold text-green-400">
                  Elérted a maximális rangot 🎉
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {warning && (
        <div className="mx-auto max-w-5xl px-4 py-2">
          <div className="mb-6 rounded-lg border border-yellow-400/40 bg-yellow-500/20 p-3 sm:p-4 text-sm sm:text-base text-yellow-300">
            ⚠️ Ha 24 órán belül nem vásárolsz jegyet, visszaesel egy rangot.
          </div>
        </div>
      )}
    </>
  );
}