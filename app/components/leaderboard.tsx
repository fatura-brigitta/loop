"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Reveal from "@/app/components/reveal";

type User = {
  name: string;
  points: number;
  profile_image: string;
};

export default function Leaderboard() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("/api/leaderboard")
      .then((r) => r.json())
      .then(setUsers);
  }, []);

  if (users.length < 3) return null;

  const first = users[0];
  const second = users[1];
  const third = users[2];

  const safeImg = (s?: string | null) => {
  const v = (s ?? "").trim();
    if (!v || v === "null" || v === "undefined") return "/profile/default.png";
    return v;
  };

  return (
    <section>
      <Reveal>
        <h2 className="mb-20 text-center text-4xl font-bold">Top mozirajongók</h2>
      </Reveal>

      <Reveal className="reveal-parent">
        <div className="relative mx-auto flex max-w-5xl items-end justify-center gap-10">

          <div className="podium-card podium-left text-center">
            <div className="mb-3 text-4xl">🥈</div>

            <div className="relative mx-auto mb-4 h-[90px] w-[90px] overflow-hidden rounded-full border-4 border-slate-400 transition hover:scale-105 hover:border-cyan-400 cursor-pointer">
              <Image
                alt="profil"
                className="object-cover"
                fill
                src={second.profile_image || "/profile/default.png"}
                unoptimized
              />
            </div>

            <div className="text-xl font-bold">{second.name}</div>
            <div className="text-[--text-soft]">{second.points} pont</div>

            <div className="mt-6 h-32 w-40 rounded-t-2xl border border-[--border-color] bg-slate-400/20" />
          </div>

          <div className="podium-card podium-center z-10 scale-110 text-center">
            <div className="mb-3 text-5xl">🥇</div>

            <div className="relative mx-auto mb-4 h-[100px] w-[100px] overflow-hidden rounded-full border-4 border-yellow-400 shadow-[0_0_30px_rgba(255,215,0,0.45)] transition hover:scale-105 hover:border-cyan-400 cursor-pointer">
              <Image
                alt="profil"
                className="object-cover"
                fill
                src={first.profile_image || "/profile/default.png"}
                unoptimized
              />
            </div>

            <div className="text-2xl font-extrabold">{first.name}</div>
            <div className="text-lg font-semibold text-yellow-300">{first.points} pont</div>

            <div className="mt-6 h-44 w-44 rounded-t-2xl border border-yellow-400/40 bg-yellow-400/20" />
          </div>

          <div className="podium-card podium-right text-center">
            <div className="mb-3 text-4xl">🥉</div>

            <div className="relative mx-auto mb-4 h-[90px] w-[90px] overflow-hidden rounded-full border-4 border-amber-700 transition hover:scale-105 hover:border-cyan-400 cursor-pointer">
              <Image
                alt="profil"
                className="object-cover"
                fill
                src={third.profile_image || "/profile/default.png"}
                unoptimized
              />
            </div>

            <div className="text-xl font-bold">{third.name}</div>
            <div className="text-[--text-soft]">{third.points} pont</div>

            <div className="mt-6 h-24 w-40 rounded-t-2xl border border-[--border-color] bg-amber-700/20" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}