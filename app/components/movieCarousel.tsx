"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Movie = {
  id: string;
  title: string;
  poster: string;
  genre: string;
  review: number;
  playtime: number;
};

export default function MovieCarousel() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [index, setIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const load = async () => {
      const res = await fetch("/api/home/movies", { cache: "no-store" });
      if (!res.ok) return;
      const data = await res.json();
      setMovies(data);
    };
    load();
  }, []);

  const next = () => {
    setIndex((prev) => (prev + 1) % movies.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + movies.length) % movies.length);
  };

  if (movies.length === 0) return null;

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">

      {/* arrows */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-white hover:bg-black/80"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-white hover:bg-black/80"
      >
        ›
      </button>

      <div className="flex transition-transform duration-500"
           style={{ transform: `translateX(-${index * 20}%)` }}>

        {movies.map((movie) => (
          <div
            key={movie.id}
            className="w-1/5 shrink-0 px-3"
          >
            <div
              onClick={() => router.push(`/screenings?movie=${movie.id}`)}
              className="cursor-pointer group"
            >
              <div className="relative aspect-[2/3] overflow-hidden rounded-xl">
                <Image
                  src={movie.poster}
                  alt={movie.title}
                  fill
                  className="object-cover transition group-hover:scale-110"
                />
              </div>

              <div className="mt-3">
                <div className="font-bold text-cyan-300 group-hover:text-cyan-200">
                  {movie.title}
                </div>

                <div className="text-xs text-white/60">
                  {movie.genre} • {movie.playtime} perc
                </div>

                <div className="text-sm text-yellow-400">
                  ⭐ {movie.review}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}