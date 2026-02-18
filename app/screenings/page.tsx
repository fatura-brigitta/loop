"use client";

import { LogOut, Play } from "lucide-react";
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

type GroupedMovie = {
  movie: Movie;
  screenings: Screening[];
};

const getYoutubeId = (url: string) => {
  const match = url.match(/(?:v=|youtu\.be\/)([^&]+)/);
  return match ? match[1] : null;
};

export default function ScreeningsPage() {
  const router = useRouter();

  const [name, setUserName] = useState("");
  const [showLogin, setShowLogin] = useState(true);
  const [openTrailer, setOpenTrailer] = useState<string | null>(null);
  const [grouped, setGrouped] = useState<GroupedMovie[]>([]);

  /* ================= USER LOAD ================= */

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

  const handleLogout = async () => {
    await fetch("/api/auth", { method: "DELETE" });
    setUserName("");
    setShowLogin(false);
    router.refresh();
  };

  /* ================= SCREENINGS LOAD ================= */

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const movieId = params.get("movieId");

    const url = movieId
      ? `/api/screenings?movieId=${movieId}`
      : "/api/screenings";

    fetch(url, { cache: "no-store" })
      .then((res) => res.json())
      .then((data: Screening[]) => {
        const map = new Map<string, GroupedMovie>();

        data.forEach((screening) => {
          const key = screening.movies.title;

          if (!map.has(key)) {
            map.set(key, {
              movie: screening.movies,
              screenings: [],
            });
          }

          map.get(key)!.screenings.push(screening);
        });

        const groupedMovies = Array.from(map.values()).map((g) => ({
          ...g,
          screenings: g.screenings.sort(
            (a, b) =>
              new Date(a.start).getTime() -
              new Date(b.start).getTime()
          ),
        }));

        setGrouped(groupedMovies);
      });
  }, []);

  /* ================= OPEN SCREENING ================= */

  const openScreening = async (id: string) => {
    await fetch("/api/screenings/", {
      method: "POST",
      body: JSON.stringify({ id }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    router.push("/screenings/hall");
  };

  /* ================= RENDER ================= */

  return (
    <div className="min-h-screen bg-[#060b14] text-slate-100">
      <header className="sticky top-0 z-50 h-14 border-b border-white/10 bg-[#060b14]/90 backdrop-blur">
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4">
          <Link className="flex items-center gap-2" href="/">
            <Image alt="Logo" height={28} src="/favicon.ico" width={28} />
            <span className="text-lg font-extrabold tracking-wide text-cyan-300">
              Loop
            </span>
          </Link>

          <nav className="flex items-center gap-5 text-sm">
            <Link className="text-slate-200/90 hover:text-white" href="/movies">
              Filmek
            </Link>

            <Link
              className="text-slate-200/90 hover:text-white"
              href="/screenings"
            >
              Vetítések
            </Link>

            <Link className="text-slate-200/90 hover:text-white" href="/forum">
              Fórum
            </Link>

            {showLogin ? (
              <div className="flex items-center gap-2">
                <Link className="text-slate-200/90" href="/profile">
                  Szia, {name}!
                </Link>
                <button onClick={handleLogout}>
                  <LogOut size={22} />
                </button>
              </div>
            ) : (
              <Link
                className="ml-2 rounded-full bg-blue-500 px-4 py-2 text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:brightness-110"
                href="/login"
              >
                Bejelentkezés
              </Link>
            )}
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-6xl p-4">
        <h1 className="mb-6 text-2xl font-bold text-white">Műsoron</h1>

        <div className="flex flex-col gap-6">
          {grouped.map((g, index) => (
            <div
              key={index}
              className="flex w-full gap-6 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur"
            >
              {/* POSTER */}
              <div className="shrink-0">
                <Image
                  alt={g.movie.title}
                  className="rounded-lg object-cover"
                  height={300}
                  width={200}
                  src={g.movie.poster}
                />
              </div>

              {/* MOVIE INFO */}
              <div className="flex flex-1 flex-col">
                <h2 className="text-xl font-semibold text-white">
                  {g.movie.title}
                </h2>

                <p className="text-xs text-slate-400">
                  {g.movie.genre} • {g.movie.playtime} perc •{" "}
                  {g.movie.language}
                </p>

                <p className="mt-1 text-sm text-slate-300">
                  Rendező: {g.movie.director}
                </p>

                <p className="text-sm text-slate-300">
                  Szereplők: {g.movie.actors}
                </p>

                <p className="mt-2 line-clamp-3 text-sm text-slate-300">
                  {g.movie.description}
                </p>

                {/* IDŐPONTOK */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.screenings.map((s) => (
                    <button
                      key={s.id}
                      className="rounded bg-white/10 px-3 py-1 text-xs transition hover:bg-blue-500/30 cursor-pointer"
                      onClick={() => openScreening(s.id)}
                    >
                      {new Date(s.start).toLocaleString("hu-HU", {
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </button>
                  ))}

                  <span className="rounded bg-blue-500/30 px-2 py-1 text-xs">
                    {g.screenings[0]?.screening_types.type}
                  </span>
                </div>
              </div>

              {/* TRAILER */}
              {g.movie.trailer && (
                <div className="w-[340px] shrink-0">
                  <div className="mb-2 flex justify-end text-blue-300">
                    <span className="mr-1 text-yellow-400">⭐</span>
                    <span className="font-medium">{g.movie.review}</span>
                  </div>

                  <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
                    {openTrailer === g.movie.trailer ? (
                      <iframe
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        className="absolute inset-0 h-full w-full"
                        loading="lazy"
                        src={`https://www.youtube.com/embed/${getYoutubeId(
                          g.movie.trailer
                        )}?autoplay=1&rel=0&modestbranding=1`}
                      />
                    ) : (
                      <button
                        className="absolute inset-0"
                        onClick={() => setOpenTrailer(g.movie.trailer)}
                      >
                        <Image
                          alt="Trailer"
                          fill
                          sizes="340px"
                          className="object-cover brightness-75 transition hover:brightness-90"
                          src={`https://img.youtube.com/vi/${getYoutubeId(
                            g.movie.trailer
                          )}/hqdefault.jpg`}
                        />

                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="flex items-center gap-2 rounded-full bg-black/70 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:scale-105">
                            <Play size={18} />
                            Trailer megtekintése
                          </div>
                        </div>
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}