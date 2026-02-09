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
  trailer: string;
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

const getYoutubeId = (url: string) => {
  const match = url.match(/(?:v=|youtu\.be\/)([^&]+)/);
  return match ? match[1] : null;
};

export default function ScreeningsPage() {
  const router = useRouter();

  const [name, setUserName] = useState("");
  const [showLogin, setShowLogin] = useState(true);
  const [screenings, setScreenings] = useState<Screening[]>([]);
  const [openTrailer, setOpenTrailer] = useState<string | null>(null);

  // Auth
  useEffect(() => {
    fetch("/api/activeUser", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((user) => {
        if (user) {
          setUserName(user.name);
          setShowLogin(true);
        } else {
          setShowLogin(false);
        }
      });
  }, []);

  // Logout
  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    setUserName("");
    setShowLogin(false);
    router.refresh();
  };

  // Screenings
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
            <Link href="/movies" className="text-slate-200/90 hover:text-white">
              Movies
            </Link>

            <button
              onClick={() => (window.location.href = "/screenings")}
              className="text-slate-200/90 hover:text-white"
            >
              Screenings
            </button>

            <Link href="/forum" className="text-slate-200/90 hover:text-white">
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
                className="rounded-full bg-blue-500 px-4 py-2 text-white"
              >
                Login
              </Link>
            )}
          </nav>
        </div>
      </header>

      {/* CONTENT */}
      <div className="mx-auto max-w-6xl p-4">
        <h1 className="mb-6 text-2xl font-bold">Now on screen</h1>

        <div className="flex flex-col gap-6">
          {screenings.map((s, i) => (
            <div
              key={i}
              className="flex w-full flex-col gap-6 rounded-lg border border-white/10 bg-white/5 p-4 lg:flex-row"
            >
              {/* POSTER */}
              <div className="flex justify-center lg:items-center">
                <Image
                  src={s.movies.poster}
                  alt={s.movies.title}
                  width={200}
                  height={300}
                  className="object-cover"
                />
              </div>

              {/* DETAILS */}
              <div className="flex flex-1 flex-col">
                <h2 className="text-lg font-semibold">{s.movies.title}</h2>

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

                <p className="mt-2 line-clamp-3 text-sm text-slate-300">
                  {s.movies.description}
                </p>

                <div className="mt-3 flex gap-2">
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

              {/* ⭐ + TRAILER */}
              {s.movies.trailer && (
                <div className="flex w-full flex-col gap-2 lg:w-[340px]">
                  {/* RATING */}
                  <div className="flex gap-1 text-blue-300 self-center lg:self-end">
                    <span className="text-yellow-400">⭐</span>
                    <span className="font-medium">{s.movies.review}</span>
                  </div>

                  {/* TRAILER */}
                  {openTrailer === s.movies.trailer ? (
                    <div className="aspect-video w-full">
                      <iframe
                        src={`https://www.youtube.com/embed/${getYoutubeId(
                          s.movies.trailer
                        )}?autoplay=1`}
                        className="h-full w-full rounded-lg"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <button
                      onClick={() => setOpenTrailer(s.movies.trailer)}
                      className="relative w-full max-w-sm self-center lg:max-w-none"
                    >
                      <Image
                        src={`https://img.youtube.com/vi/${getYoutubeId(
                          s.movies.trailer
                        )}/hqdefault.jpg`}
                        alt="Trailer"
                        width={340}
                        height={190}
                        className="rounded-lg brightness-75 hover:brightness-90"
                      />

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="rounded-full bg-black/60 px-4 py-2 text-white">
                          ▶ Trailer
                        </div>
                      </div>
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}