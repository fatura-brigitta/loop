"use client";
import { useEffect, useState } from "react";
import Navbar from "@/app/components/navbar";

export default function ForumPage() {
  const [name, setUserName] = useState("");
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const loadUser = async () => {
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
    loadUser();
  }, []);

  useEffect(() => {
    if (!showLogin) return;
  }, [showLogin]);

  return (
    <div className="min-h-screen bg-linear-to-b from-[#020617] via-[#060b14] to-black text-slate-100">
      <Navbar />

      {!showLogin && (
        <div className="flex min-h-screen items-center justify-center bg-[#060b14] text-white">
          A fórum megtekintéséhez kérjük jelentkezzen be.
        </div>
      )}

      {showLogin && (
        <div className="mx-auto max-w-6xl px-4 py-8 pb-40 text-center">
          <h1 className="mb-6 text-center text-2xl font-bold">
            Fórum
          </h1>
        </div>
      )}
    </div>
  );
}
