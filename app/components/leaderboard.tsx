"use client";

import Image from "next/image";
import Reveal from "@/app/components/reveal";
import { profileImageUrl } from "@/lib/profileImage";

type User = {
  name: string;
  points: number;
  profile_image: string;
};

export default function Leaderboard({ users }: { users: User[] }) {
  if (users.length < 3) return null;

  const first = users[0];
  const second = users[1];
  const third = users[2];

  return (
    <section>
      <Reveal>
        <h2 className="mb-10 sm:mb-14 md:mb-20 text-2xl sm:text-3xl md:text-4xl font-bold text-center">
          Top mozirajongók
        </h2>
      </Reveal>

      <Reveal className="reveal-parent">
        <div className="relative mx-auto max-w-5xl flex items-end justify-center gap-3 sm:gap-6 md:gap-10">
          <div className="podium-card podium-left text-center">
            <div className="order-2 sm:order-1 mb-3 text-xl sm:text-3xl md:text-4xl">🥈</div>

            <div className="relative mx-auto mb-4 h-12 w-12 sm:h-16 sm:w-16 md:h-[90px] md:w-[90px] cursor-pointer overflow-hidden rounded-full border-4 border-slate-400 transition hover:scale-105 hover:border-cyan-400">
              <Image
                alt="profil"
                className="object-cover"
                fill
                key={second.profile_image}
                src={profileImageUrl(second.profile_image, 128) + "?v=" + second.profile_image}
                unoptimized
              />
            </div>

            <div className="text-sm sm:text-base md:text-xl font-bold">{second.name}</div>
            <div className="text-xs sm:text-sm md:text-lgtext-[--text-soft]">{second.points} pont</div>

            <div className="mt-6 h-16 w-16 sm:h-24 sm:w-28 md:h-32 md:w-40 rounded-t-2xl border border-[--border-color] bg-slate-400/20" />
          </div>

          <div className="podium-card podium-center z-10 scale-100 sm:scale-105 md:scale-110 text-center">
            <div className="order-1 sm:order-2 mb-3 text-xl sm:text-3xl md:text-4xl">🥇</div>

            <div className="relative mx-auto mb-4 h-14 w-14 sm:h-20 sm:w-20 md:h-[100px] md:w-[100px] cursor-pointer overflow-hidden rounded-full border-4 border-yellow-400 shadow-[0_0_30px_rgba(255,215,0,0.45)] transition hover:scale-105 hover:border-cyan-400">
              <Image
                alt="profil"
                className="object-cover"
                fill
                key={first.profile_image}
                src={profileImageUrl(first.profile_image, 128) + "?v=" + first.profile_image}
                unoptimized
              />
            </div>

            <div className="text-base sm:text-lg md:text-2xl font-extrabold">{first.name}</div>
            <div className="text-xs sm:text-sm md:text-lg font-semibold text-yellow-700">{first.points} pont</div>

            <div className="mt-6 h-20 w-20 sm:h-32 sm:w-32 md:h-44 md:w-44 rounded-t-2xl border border-yellow-800/40 bg-yellow-500/20" />
          </div>

          <div className="podium-card podium-right text-center">
            <div className="order-3 mb-3 text-xl sm:text-3xl md:text-4xl">🥉</div>

            <div className="relative mx-auto mb-4 h-12 w-12 sm:h-16 sm:w-16 md:h-[90px] md:w-[90px] cursor-pointer overflow-hidden rounded-full border-4 border-amber-700 transition hover:scale-105 hover:border-cyan-400">
              <Image
                alt="profil"
                className="object-cover"
                fill
                key={third.profile_image}
                src={profileImageUrl(third.profile_image, 128) + "?v=" + third.profile_image}
                unoptimized
              />
            </div>

            <div className="text-sm sm:text-base md:text-xl font-bold">{third.name}</div>
            <div className="text-xs sm:text-sm md:text-lg text-[--text-soft]">{third.points} pont</div>

            <div className="mt-6 h-14 w-16 sm:h-20 sm:w-28 md:h-24 md:w-40 rounded-t-2xl border border-[--border-color] bg-amber-700/20" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}