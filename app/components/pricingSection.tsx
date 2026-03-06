"use client";

import { useEffect, useState } from "react";
import Reveal from "@/app/components/reveal";

type ScreeningType = {
  type: string;
  percent: number;
};

type TicketType = {
  type: string;
  percent: number;
};

export default function PricingSection() {
  const [screenings, setScreenings] = useState<ScreeningType[]>([]);
  const [tickets, setTickets] = useState<TicketType[]>([]);
  const [basePrice, setBasePrice] = useState(2500);

  useEffect(() => {
    fetch("/api/pricing")
      .then((r) => r.json())
      .then((data) => {
        setScreenings(data.screeningTypes);
        setTickets(data.ticketTypes);
        setBasePrice(data.basePrice);
      });
  }, []);

  return (
    <section className="bg-[--bg-soft2] py-14">
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
                  className="rounded-xl border border-[--border-color] bg-[--card-bg] p-6 text-center backdrop-blur transition hover:scale-[1.03] hover:bg-white/10 hover:cursor-pointer"
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
                    {Math.round(basePrice * (s.percent / 100))} Ft alapáron
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
                  className="rounded-xl border border-[--border-color] bg-[--card-bg] p-6 text-center backdrop-blur transition hover:scale-[1.03] hover:bg-white/10 hover:cursor-pointer"
                  key={t.type}
                >
                  <div className="text-xl font-bold">{t.type}</div>

                  {t.percent === 0 ? (
                    <div className="mt-2 text-2xl font-extrabold text-cyan-400">
                      Nincs kedvezmény
                    </div>
                  ) : (
                    <div className="mt-2 text-3xl font-extrabold text-cyan-400">
                      -{t.percent}%
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        </Reveal>
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <div className="rounded-2xl border border-[--border-color] bg-[--card-bg] p-8 backdrop-blur">
            A kedvezmények és a vetítési felárak <b>egyszerre</b> érvényesek.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
