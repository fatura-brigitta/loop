"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LogOut } from "lucide-react";
import Image from "next/image";

type Movie = {
  title: string;
  director: string;
  actors: string;
  playtime: number;
  language: string;
  poster: string;
  genre: string;
  review: number;
  description: string;
};

type Screening = {
  start: string;
  movies: Movie;
  screening_types: {
    type: string;
  };
};

export default function ScreeningsPage() {
  const router = useRouter();

  const [name, setUserName] = useState("");
  const [showLogin, setShowLogin] = useState(true);
  const [screenings, setScreenings] = useState<Screening[]>([]);

  // Auth
  useEffect(() => {
    const load = async () => {
      const userRes = await fetch("/api/activeUser", { cache: "no-store" });

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

  // Logout
  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    setUserName("");
    setShowLogin(false);
    router.refresh();
  };

  // Fetch screenings (backend cookie szűr)
  useEffect(() => {
    fetch("/api/screenings", { cache: "no-store" })
      .then((res) => res.json())
      .then(setScreenings);
  }, []);

  return (
    <div className="min-h-screen bg-[#060b14] text-slate-100">
      {/* HEADER */}
      <header className="sticky top-0 z-50 h-14 border-b border-white/10 bg-[#060b14]/90 backdrop-blur">
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/favicon.ico" alt="Logo" width={28} height={28} />
            <span className="text-lg font-extrabold tracking-wide text-cyan-300">
              Loop
            </span>
          </Link>

          <nav className="flex items-center gap-5 text-sm">
            <Link className="text-slate-200/90 hover:text-white" href="/movies">
              Movies
            </Link>

            <Link className="text-slate-200/90 hover:text-white" href="/screenings">
              Screenings
            </Link>

            <Link className="text-slate-200/90 hover:text-white" href="/forum">
              Forum
            </Link>

            {showLogin ? (
              <div className="flex items-center gap-2">
                <Link href="/profile" className="text-slate-200/90">
                  Hello, {name} !
                </Link>

                <button onClick={handleLogout}>
                  <LogOut size={22} />
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="ml-2 rounded-full bg-blue-500 px-4 py-2 text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:brightness-110"
              >
                Login
              </Link>
            )}
          </nav>
        </div>
      </header>

      {/* CONTENT */}
      <div className="mx-auto max-w-6xl p-4">
        <h1 className="mb-6 text-2xl font-bold text-white">Now on screen</h1>

        <div className="flex flex-col gap-4">
          {/* NORMAL SCREENINGS */}
          {screenings.map((s, i) => (
            <div
              key={i}
              className="flex w-full rounded-lg border border-white/10 bg-white/5"
            >
              <Image
                src={s.movies.poster}
                alt={s.movies.title}
                width={200}
                height={300}
                className="shrink-0 object-cover"
              />

              <div className="flex flex-1 flex-col px-4 py-3">
                <div className="flex justify-between">
                  <h2 className="text-base font-semibold text-white">
                    {s.movies.title}
                  </h2>

                  <span className="text-blue-300">⭐ {s.movies.review}</span>
                </div>

                <p className="text-xs text-slate-400">
                  {s.movies.genre} • {s.movies.playtime} min •{" "}
                  {s.movies.language}
                </p>

                <p className="mt-1 text-sm text-slate-300">
                  Director: {s.movies.director}
                </p>

                <p className="text-sm text-slate-300">
                  Actors: {s.movies.actors}
                </p>

                <p className="mt-2 line-clamp-2 text-sm text-slate-300">
                  {s.movies.description}
                </p>

                <div className="mt-3 flex items-center gap-2">
                  <span className="rounded bg-white/10 px-2 py-1 text-xs">
                    {new Date(s.start).toLocaleString("hu-HU", {
                      month: "2-digit",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>

                  <span className="rounded bg-blue-500/30 px-2 py-1 text-xs">
                    {s.screening_types.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}