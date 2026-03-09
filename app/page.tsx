"use client"

export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import HeroSlider from "@/app/components/heroSlider";
import PricingSection from "@/app/components/pricingSection";
import Leaderboard from "@/app/components/leaderboard";
import WelcomeSection from "@/app/components/welcomeSection";
import OffersSection from "@/app/components/offersSection";
import PointsInfoSection from "@/app/components/pointsInfoSection";

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
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)]">
      <HeroSlider/>
      <main className="mx-auto max-w-6xl px-4 py-8">
        <WelcomeSection />
        <OffersSection/>
        <PricingSection/>
        <PointsInfoSection/>
        <Leaderboard/>
      </main>
    </div>
  );
}
