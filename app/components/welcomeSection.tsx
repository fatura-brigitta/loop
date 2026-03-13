"use client";

import Reveal from "@/app/components/reveal";

export default function WelcomeSection() {
  return (
    <section className="mx-auto max-w-5xl py-18 text-center">
      <Reveal>
        <>
          <h2 className="mb-6 text-4xl font-bold text-[--text-soft]"> Üdvözöl a LOOP Mozi! </h2>

          <p className="text-lg leading-relaxed text-[--text-soft]">
            Nálunk a mozizás nem csak egy film megnézéséről szól. Modern vetítőtermek, kényelmes
            foglalás és exkluzív élmények várnak rád. Válaszd ki a filmed, foglald le a helyed pár
            kattintással, és élvezd a tökéletes moziélményt.
          </p>

          <p className="mt-6 text-[--text-soft]">
            Legyen szó egy gyors esti filmről, baráti programról vagy egy különleges premier
            vetítésről - nálunk mindig találsz valami izgalmasat.
          </p>

          <img
            alt="LOOP Mozi"
            className="mx-auto mt-15 rounded-lg shadow-lg"
            src="/loopmozi.png"
            width={800}
          />
        </>
      </Reveal>
    </section>
  );
}
