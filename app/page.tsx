"use client";

import { useEffect, useState } from "react";
import HeroSlider from "@/app/components/heroSlider";
import Leaderboard from "@/app/components/leaderboard";
import OffersSection from "@/app/components/offersSection";
import PointsInfoSection from "@/app/components/pointsInfoSection";
import PricingSection from "@/app/components/pricingSection";
import WelcomeSection from "@/app/components/welcomeSection";

export const dynamic = "force-dynamic";

export default function HomePage() {
  const [name, setUserName] = useState("");
  const [showLogin, setShowLogin] = useState(true);
  const [ranks, setRanks] = useState([]);
  const [discounts, setDiscounts] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [pricing,setPricing] = useState<any>(null)

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

      const [ranksRes,discountsRes,leaderboardRes,pricingRes] = await Promise.all([
        fetch("/api/profile/ranks",{cache:"no-store"}),
        fetch("/api/profile/discounts",{cache:"no-store"}),
        fetch("/api/home/leaderboard",{cache:"no-store"}),
        fetch("/api/home/pricing",{cache:"no-store"})
      ])

      setRanks(await ranksRes.json())
      setDiscounts(await discountsRes.json())
      setLeaderboard(await leaderboardRes.json())
      setPricing(await pricingRes.json())
    };

    load();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] overflow-x-hidden">
      <div className="pt-16">
        <HeroSlider />
      </div>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <WelcomeSection />
        <OffersSection />
        <PricingSection pricing={pricing}/>

        <PointsInfoSection discounts={discounts} ranks={ranks} />
        <Leaderboard users={leaderboard} />
      </main>
    </div>
  );
}
