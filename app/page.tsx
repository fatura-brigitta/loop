"use client"

export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import Navbar from "@/app/components/navbar";

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
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-8">

      </main>
    </div>
  );
}
