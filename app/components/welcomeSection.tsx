"use client";

import Reveal from "@/app/components/reveal";

export default function WelcomeSection() {
  return (
    <section className="py-10 text-center max-w-5xl mx-auto">
      <Reveal>
        <>
          <h2 className="text-4xl font-bold mb-6 text-[--text-soft]"> Üdvözöl a LOOP Mozi! </h2>

          <p className="text-lg text-[--text-soft] leading-relaxed">
            Nálunk a mozizás nem csak egy film megnézéséről szól. Modern vetítőtermek,
            kényelmes foglalás és exkluzív élmények várnak rád. Válaszd ki a filmed,
            foglald le a helyed pár kattintással, és élvezd a tökéletes moziélményt.
          </p>

          <p className="mt-6 text-[--text-soft]">
            Legyen szó egy gyors esti filmről, baráti programról vagy egy különleges
            premier vetítésről - nálunk mindig találsz valami izgalmasat.
          </p>

          <img src="/loopmozi.png" alt="LOOP Mozi" className="mx-auto mt-15 rounded-lg shadow-lg" width={800}/>
        </>
      </Reveal>
    </section>
  );
}