"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Movie = {
  id: string;
  title: string;
  backdrop?: string;
  poster: string;
  genre: string;
  review: number;
  playtime: number;
};

export default function HeroSlider() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const router = useRouter();

  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/home/movies", { cache: "no-store" });
        if (!res.ok) return;

        const data = await res.json();
        console.log("HERO MOVIES:", data);

        setMovies(data);
      } catch (e) {
        console.error("HeroSlider load error:", e);
      }
    };

    load();
  }, []);

  useEffect(() => {
    if (!movies.length || paused) return;

    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % movies.length);
    }, 8000);

    return () => window.clearInterval(id);
  }, [movies.length, paused]);

  const next = () => {
    setIndex((prev) => (prev + 1) % movies.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + movies.length) % movies.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const diff = e.changedTouches[0].clientX - touchStartX.current;

    if (diff > 50) prev();
    if (diff < -50) next();

    touchStartX.current = null;
  };

  if (!movies.length) return null;

  const movie = movies[index];

  return (
    <div
      className="relative h-[80vh] min-h-[520px] w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchEnd={handleTouchEnd}
      onTouchStart={handleTouchStart}
    >
      <div className="absolute inset-0">
        {movies.map((m, i) => (
          <div
            className={`absolute inset-0 bg-cover bg-top bg-no-repeat transition-opacity duration-[1400ms] ${
              i === index ? "animate-heroZoom opacity-100" : "z-0 opacity-0"
            }`}
            key={m.id}
            style={{
              backgroundImage: `url(${m.backdrop || m.poster})`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.7))]" />

      <button
        className="absolute top-1/2 left-6 z-20 -translate-y-1/2 cursor-pointer text-5xl text-white/60 select-none hover:text-white"
        onClick={prev}
      >
        ‹
      </button>

      <button
        className="absolute top-1/2 right-6 z-20 -translate-y-1/2 cursor-pointer text-5xl text-white/60 select-none hover:text-white"
        onClick={next}
      >
        ›
      </button>

      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <div className="max-w-4xl px-6">
          <h1
            className="animate-heroText text-5xl font-extrabold text-white drop-shadow-2xl md:text-6xl"
            key={movie.id}
          >
            {movie.title}
          </h1>

          <div className="mt-4 text-lg text-white/80">
            {movie.genre} • {movie.playtime} perc
          </div>

          <div className="mt-2 text-xl font-semibold text-yellow-400">⭐ {movie.review}</div>

          <button
            className="mt-8 rounded-xl bg-white/90 px-10 py-4 text-lg font-bold text-black backdrop-blur transition hover:bg-white hover:scale-105 active:scale-95 cursor-pointer"
            onClick={() => router.push("/screenings")}
          >
            Jegyvásárlás
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {movies.map((_, i) => (
          <div
            className={`h-3 w-3 cursor-pointer rounded-full transition-all duration-300 ${
              i === index ? "scale-125 bg-white" : "bg-white/40"
            }`}
            key={i}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
