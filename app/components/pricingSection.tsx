"use client";
import Reveal from "@/app/components/reveal";

type ScreeningType = {
  type: string;
  percent: number;
};

type TicketType = {
  type: string;
  percent: number;
};

type Pricing = {
  screeningTypes: ScreeningType[];
  ticketTypes: TicketType[];
  basePrice: number;
};

export default function PricingSection({ pricing }: { pricing: Pricing }){

  if(!pricing) return null

  const screenings = pricing.screeningTypes
  const tickets = pricing.ticketTypes
  const basePrice = pricing.basePrice

  return (
    <section className="bg-[--bg-soft2] py-10 sm:py-14 md:py-18 px-4">
      <div className="mx-auto mb-8 sm:mb-12 md:mb-16 max-w-6xl text-center">
        <Reveal>
          <>
            <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-bold">Jegyárak</h2>
            <p className="text-sm sm:text-base text-[--text-soft]">
              A végső jegyár a vetítés típusa és a kedvezmény összesítése.
            </p>
          </>
        </Reveal>
      </div>

      <div className="mx-auto mb-10 max-w-6xl">
        <Reveal>
          <>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {screenings.map((s, i) => (
                <div
                  key={s.type}
                  className={`w-[calc(50%-8px)] sm:w-[calc(33.333%-16px)] md:w-[calc(25%-18px)] lg:w-[calc(20%-20px)] rounded-xl border border-[--border-color] bg-[var(--card-bg)] p-4 sm:p-5 md:p-6 text-center transition hover:scale-[1.02] sm:hover:scale-[1.03] hover:bg-[var(--text-slate-hover)] cursor-pointer
                    ${i === screenings.length - 1 ? "col-span-2 sm:col-span-3 md:col-span-1 lg:col-span-1 justify-self-center" : ""}
                  `}
                >
                  <div className="text-sm sm:text-base md:text-lg font-bold font-bold">{s.type}</div>

                  {s.percent === 100 ? (
                    <div className="mt-2 text-xl sm:text-2xl md:text-3xl font-extrabold text-cyan-400">Alapár</div>
                  ) : (
                    <div className="mt-2 text-xl sm:text-2xl md:text-3xl font-extrabold text-cyan-400">
                      +{s.percent - 100}%
                    </div>
                  )}

                  <div className="mt-2 text-xs sm:text-sm text-[--text-soft]">
                    {((basePrice * (s.percent / 100)) / 100).toFixed(2)} € alapáron
                  </div>
                </div>
              ))}
            </div>
          </>
        </Reveal>
      </div>

      <div className="mx-auto mb-20 max-w-6xl">
        <Reveal>
          <>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {tickets.map((t) => (
                <div
                  className="w-[calc(50%-8px)] sm:w-[calc(33.333%-16px)] md:w-[calc(25%-18px)] rounded-xl border border-[--border-color] bg-[var(--card-bg)] p-4 sm:p-5 md:p-6 text-center transition hover:scale-[1.02] sm:hover:scale-[1.03] hover:cursor-pointer hover:bg-[var(--text-slate-hover)]"
                  key={t.type}
                >
                  <div className="text-sm sm:text-base md:text-lg font-bold font-bold">{t.type}</div>

                  {t.percent === 0 ? (
                    <div className="text-base sm:text-lg font-extrabold text-cyan-400">
                      Nincs kedvezmény
                    </div>
                  ) : (
                    <div className="mt-2 mt-2 text-xl sm:text-2xl md:text-3xl font-extrabold text-cyan-400">-{t.percent}%</div>
                  )}
                </div>
              ))}
            </div>
          </>
        </Reveal>
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <div className="rounded-2xl border border-[--border-color] bg-[var(--card-bg)] p-4 sm:p-6 md:p-8 text-sm sm:text-base">
            A kedvezmények és a vetítési felárak <b>egyszerre</b> érvényesek.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
