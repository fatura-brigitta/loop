"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

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
      className="relative w-full h-[600px] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
        style={{
          backgroundImage: `url(${movie.backdrop || movie.poster})`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#060b14] via-[#060b14]/80 to-transparent" />

      <button
        onClick={prev}
        className="absolute left-6 top-1/2 z-20 -translate-y-1/2 text-5xl text-white/60 hover:text-white cursor-pointer select-none"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="absolute right-6 top-1/2 z-20 -translate-y-1/2 text-5xl text-white/60 hover:text-white cursor-pointer select-none"
      >
        ›
      </button>

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-6xl px-6 items-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-2xl">
            {movie.title}
          </h1>

          <div className="mt-4 text-white/80 text-lg">
            {movie.genre} • {movie.playtime} perc
          </div>

          <div className="mt-2 text-yellow-400 text-xl font-semibold">
            ⭐ {movie.review}
          </div>

          <button
            onClick={() => router.push("/screenings")}
            className="mt-8 rounded-xl bg-cyan-500 px-8 py-3 text-lg font-bold text-black transition hover:bg-cyan-400 cursor-pointer"
          >
            Jegyvásárlás
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {movies.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-300 ${
              i === index ? "bg-white scale-125" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}