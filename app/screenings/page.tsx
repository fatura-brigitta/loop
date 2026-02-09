"use client";

import { LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
  id: string;
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

  // Screenings
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const movieId = params.get("movieId");

    const url = movieId ? `/api/screenings?movieId=${movieId}` : "/api/screenings";

    fetch(url, { cache: "no-store" })
      .then((res) => res.json())
      .then(setScreenings);
  }, []);

  //Hall selection
  const openScreening = async (id?: string) => {
    if (!id) {
      console.error("Missing screening id");
      return;
    }

    await fetch("/api/screenings/selectHall", {
      method: "POST",
      body: JSON.stringify({ id }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    router.push("/screenings/hall");
  };


  return (
    <div className="min-h-screen bg-[#060b14] text-slate-100">
      {/* header sáv */}
      <header className="sticky top-0 z-50 h-14 border-b border-white/10 bg-[#060b14]/90 backdrop-blur">
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4">
          <Link className="flex items-center gap-2" href="/">
            <Image alt="Logo" height={28} src="/favicon.ico" width={28} />
            <span className="text-lg font-extrabold tracking-wide text-cyan-300">Loop</span>
          </Link>

          <nav className="flex items-center gap-5 text-sm">
            <Link className="text-slate-200/90 hover:text-white" href="/movies">
              Movies
            </Link>

            <button
              className="cursor-pointer text-slate-200/90 transition hover:text-white"
              onClick={async () => {
                await fetch("/api/clearSelectedMovie", { method: "POST" });
                window.location.href = "/screenings";
              }}
            >
              Screenings
            </button>

            <Link className="text-slate-200/90 hover:text-white" href="/forum">
              Forum
            </Link>

            {showLogin ? (
              <div className="flex items-center gap-2">
                <Link className="text-slate-200/90" href="/profile">
                  Hello, {name} !
                </Link>
                <button className="cursor-pointer" onClick={handleLogout}>
                  <LogOut size={22} />
                </button>
              </div>
            ) : (
              <Link
                className="ml-2 rounded-full bg-blue-500 px-4 py-2 text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:brightness-110"
                href="/login"
              >
                Login
              </Link>
            )}
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-6xl p-4">
        <h1 className="mb-6 text-2xl font-bold text-white">Now on screen</h1>

        <div className="flex flex-col gap-6">
          {screenings.map((s, i) => (
            <div
              className="flex w-full gap-6 rounded-lg border border-white/10 bg-white/5 p-4"
              key={i}
            >
              {/* poster */}
              <div className="flex shrink-0 items-center">
                <Image
                  alt={s.movies.title}
                  className="object-cover"
                  height={300}
                  src={s.movies.poster}
                  width={200}
                />
              </div>

              {/* details */}
              <div className="flex flex-1 flex-col">
                <h2 className="text-lg font-semibold text-white">{s.movies.title}</h2>

                <p className="text-xs text-slate-400">
                  {s.movies.genre} • {s.movies.playtime} min • {s.movies.language}
                </p>

                <p className="mt-1 text-sm text-slate-300">Director: {s.movies.director}</p>

                <p className="text-sm text-slate-300">Actors: {s.movies.actors}</p>

                <p className="mt-2 line-clamp-3 text-sm text-slate-300">{s.movies.description}</p>

                <div className="mt-3 flex gap-2">
                  <button
                    className="rounded bg-white/10 px-2 py-1 text-xs transition hover:bg-blue-500/30 cursor-pointer"
                    onClick={() => openScreening((s).id)}
                  >
                    {new Date(s.start).toLocaleString("hu-HU", {
                      month: "2-digit",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </button>
                    
                  <span className="rounded bg-blue-500/30 px-2 py-1 text-xs">
                    {s.screening_types.type}
                  </span>
                </div>
              </div>

              {s.movies.trailer && (
                <div className="flex w-340px flex-col gap-2">
                  <div className="flex gap-1 self-end text-blue-300">
                    <span className="text-yellow-400">⭐</span>
                    <span className="font-medium">{s.movies.review}</span>
                  </div>

                  {openTrailer === s.movies.trailer ? (
                    <div className="aspect-video w-full">
                      <iframe
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        className="h-full w-full rounded-lg"
                        src={`https://www.youtube.com/embed/${getYoutubeId(
                          s.movies.trailer,
                        )}?autoplay=1`}
                      />
                    </div>
                  ) : (
                    <button
                      className="relative w-full"
                      onClick={() => setOpenTrailer(s.movies.trailer)}
                    >
                      <Image
                        alt="Trailer"
                        className="rounded-lg brightness-75 hover:brightness-90"
                        height={100}
                        src={`https://img.youtube.com/vi/${getYoutubeId(
                          s.movies.trailer,
                        )}/hqdefault.jpg`}
                        width={320}
                      />

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="rounded-full bg-black/60 px-4 py-2 text-white cursor-pointer">
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
