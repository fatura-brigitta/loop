"use client"

export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import HeroSlider from "@/app/components/heroSlider";
import Reveal from "@/app/components/reveal";
import Footer from "@/app/components/footer";
import PricingSection from "@/app/components/pricingSection";
import Leaderboard from "@/app/components/leaderboard";

export default function HomePage() {

  const [name, setUserName] = useState("");
  const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {
  const load = async () => {
    const userRes = await fetch("/api/auth", { cache: "no-store" });

    if (userRes.status === 200) {
      const user = await userRes.json();
      setUserName(user.name);
      setShowLogin(true);
    } else {
      setUserName("");
      setShowLogin(false);
    }
  };

  load();
}, []);


  return (
    <div className="min-h-screen bg-[#060b14] text-slate-100">
      <HeroSlider/>
      <main className="mx-auto max-w-6xl px-4 py-8">
        <section className="py-24 text-center max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-4xl font-bold mb-6">
              Jegyvásárlás <span className="text-[--accent]">30 másodperc alatt</span>
            </h2>
            <p className="text-lg text-[--text-soft] leading-relaxed">
              Válassz filmet, kattints az időpontra, válaszd ki a helyed és már kész is.
              Nincs sorban állás. Nincs nyomtatás. A jegyed a telefonodon lesz.
            </p>
          </Reveal>
        </section>
        <PricingSection/>
        <Leaderboard/>
      </main>
    </div>
  );
}
