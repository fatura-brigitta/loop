"use client";

import Reveal from "@/app/components/reveal";

export default function WelcomeSection() {
  return (
    <section className="mx-auto max-w-5xl py-10 sm:py-14 md:py-18 px-4 text-center">
      <Reveal>
        <div className="mx-auto max-w-3xl">

          <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl font-bold text-[--text-soft]">
            Üdvözöl a LOOP Mozi!
          </h2>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-[--text-soft]">
            Nálunk a mozizás nem csak egy film megnézéséről szól. Modern vetítőtermek, kényelmes
                foglalás és exkluzív élmények várnak rád. Válaszd ki a filmed, foglald le a helyed pár
                kattintással, és élvezd a tökéletes moziélményt.
          </p>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base text-[--text-soft]">
            Legyen szó egy gyors esti filmről, baráti programról vagy egy különleges premier
                vetítésről - nálunk mindig találsz valami izgalmasat.
          </p>

          <img
            src="/loopmozi.png"
            alt="LOOP Mozi"
            className="mx-auto mt-8 sm:mt-10 md:mt-12 w-full max-w-md sm:max-w-lg md:max-w-2xl rounded-lg shadow-lg"
          />

        </div>
      </Reveal>
    </section>
  );
}
