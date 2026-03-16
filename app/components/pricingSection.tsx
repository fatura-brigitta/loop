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
    <section className="bg-[--bg-soft2] py-18">
      <div className="mx-auto mb-16 max-w-6xl text-center">
        <Reveal>
          <>
            <h2 className="mb-4 text-4xl font-bold">Jegyárak</h2>
            <p className="text-[--text-soft]">
              A végső jegyár a vetítés típusa és a kedvezmény összesítése.
            </p>
          </>
        </Reveal>
      </div>

      <div className="mx-auto mb-10 max-w-6xl">
        <Reveal>
          <>
            <div className="grid gap-6 md:grid-cols-5">
              {screenings.map((s) => (
                <div
                  className="rounded-xl border border-[--border-color]  bg-[var(--card-bg)] p-6 text-center backdrop-blur transition hover:scale-[1.03] hover:cursor-pointer hover:bg-[var(--text-slate-hover)]"
                  key={s.type}
                >
                  <div className="text-xl font-bold">{s.type}</div>

                  {s.percent === 100 ? (
                    <div className="mt-2 text-3xl font-extrabold text-cyan-400">Alapár</div>
                  ) : (
                    <div className="mt-2 text-3xl font-extrabold text-cyan-400">
                      +{s.percent - 100}%
                    </div>
                  )}

                  <div className="mt-2 text-sm text-[--text-soft]">
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
            <div className="grid gap-6 md:grid-cols-4">
              {tickets.map((t) => (
                <div
                  className="rounded-xl border border-[--border-color]  bg-[var(--card-bg)] p-6 text-center backdrop-blur transition hover:scale-[1.03] hover:cursor-pointer hover:bg-[var(--text-slate-hover)]"
                  key={t.type}
                >
                  <div className="text-xl font-bold">{t.type}</div>

                  {t.percent === 0 ? (
                    <div className="mt-2 text-2xl font-extrabold text-cyan-400">
                      Nincs kedvezmény
                    </div>
                  ) : (
                    <div className="mt-2 text-3xl font-extrabold text-cyan-400">-{t.percent}%</div>
                  )}
                </div>
              ))}
            </div>
          </>
        </Reveal>
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <div className="rounded-2xl border border-[--border-color] bg-[var(--card-bg)] p-8 backdrop-blur">
            A kedvezmények és a vetítési felárak <b>egyszerre</b> érvényesek.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
