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
  const router = useRouter();

  const [movies, setMovies] = useState<Movie[]>([]);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);
  const mouseStartX = useRef<number | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/home/movies", { cache: "no-store" });
        if (!res.ok) return;

        const data = await res.json();
        setMovies(data);

        data.forEach((m: Movie) => {
          const img = new Image();
          img.src = m.backdrop || m.poster;
        });
      } catch (e) {
        console.error("HeroSlider load error:", e);
      }
    };

    load();
  }, []);

  const startTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % movies.length);
    }, 8000);
  };

  useEffect(() => {
    if (!movies.length || paused) return;

    startTimer();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [movies.length, paused]);

  const resetTimer = () => {
    if (!paused) startTimer();
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % movies.length);
    resetTimer();
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + movies.length) % movies.length);
    resetTimer();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const diff = e.changedTouches[0].clientX - touchStartX.current;

    if (Math.abs(diff) > 80) {
      if (diff > 0) prev();
      else next();
    }

    touchStartX.current = null;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    mouseStartX.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (mouseStartX.current === null) return;

    const diff = e.clientX - mouseStartX.current;

    if (Math.abs(diff) > 80) {
      if (diff > 0) prev();
      else next();
    }

    mouseStartX.current = null;
  };

  if (!movies.length) return null;

  const movie = movies[index];

  return (
    <div
      className="relative h-[80vh] min-h-[520px] w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >

      <div className="absolute inset-0">
        {movies.map((m, i) => (
          <div
            key={m.id}
            className={`absolute inset-0 bg-cover bg-top bg-no-repeat transition-[opacity,transform] duration-[1200ms] ease-out ${
              i === index
                ? "opacity-100 scale-105 animate-heroZoom"
                : "opacity-0 scale-100"
            }`}
            style={{
              backgroundImage: `url(${m.backdrop || m.poster})`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.5)_35%,transparent_70%)]" />

      <button
        className="absolute top-1/2 left-6 z-20 -translate-y-1/2 text-5xl text-white/60 hover:text-white cursor-pointer"
        onClick={prev}
      >
        ‹
      </button>

      <button
        className="absolute top-1/2 right-6 z-20 -translate-y-1/2 text-5xl text-white/60 hover:text-white cursor-pointer"
        onClick={next}
      >
        ›
      </button>

      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <div className="max-w-4xl px-6">

          <h1
            key={movie.id}
            className="text-5xl font-extrabold text-white drop-shadow-[0_0_30px_rgba(0,0,0,0.8)] md:text-6xl animate-heroText"
          >
            {movie.title}
          </h1>

          <div className="mt-4 text-lg text-white/80">
            {movie.genre} • {movie.playtime} perc
          </div>

          <div className="mt-2 text-xl font-semibold text-yellow-400">
            ⭐ {movie.review}
          </div>

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
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 cursor-pointer rounded-full transition-all duration-300 ${
              i === index ? "scale-125 bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}