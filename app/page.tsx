"use client"

export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import HeroSlider from "@/app/components/HeroSlider";
import PricingSection from "@/app/components/PricingSection";
import Leaderboard from "@/app/components/Leaderboard";
import WelcomeSection from "@/app/components/WelcomeSection";
import OffersSection from "@/app/components/OffersSection";
import PointsInfoSection from "@/app/components/PointsInfoSection";

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
        <WelcomeSection />
        <OffersSection/>
        <PricingSection/>
        <PointsInfoSection/>
        <Leaderboard/>
      </main>
    </div>
  );
}
