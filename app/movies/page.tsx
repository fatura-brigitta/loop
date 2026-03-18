"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Movie = {
  id: string;
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

export default function MoviesPage() {
  const router = useRouter();

  const [name, setUserName] = useState("");
  const [showLogin, setShowLogin] = useState(true);

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

  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetch("/api/movies", { cache: "no-store" })
      .then((res) => res.json())
      .then(setMovies);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)]" data-cy="movies-page">
      <div className="mx-auto h-full max-w-6xl items-center p-4" data-cy="movies-container">
        <h1 className="mb-6 text-2xl font-bold text-[var(--text-main)]">Műsoron</h1>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2" data-cy="movies-grid">
          {movies.map((movie) => (
            <div
              className="group flex flex-row w-full overflow-hidden rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] transition-all duration-300 ease-out hover:-translate-y-[3px] hover:shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-500/40"
              data-cy="movie-card"
              data-movie-id={movie.id}
              key={movie.id}
            >
              {/* POSTER */}
              <div className="shrink-0">
                <div className="relative w-[160px] md:w-[160px] aspect-[2/3]">
                  <Image
                    src={movie.poster}
                    alt={movie.title}
                    fill
                    className="object-contain rounded-l-lg"
                    data-cy="movie-poster"
                  />
                </div>
              </div>

              {/* INFO */}
              <div
                className="flex flex-1 flex-col justify-between px-3 py-2 sm:px-4 sm:py-3"
                data-cy="movie-info"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h2
                      className="text-sm sm:text-base font-semibold leading-tight text-[var(--text-main)]"
                      data-cy="movie-title"
                    >
                      {movie.title}
                    </h2>

                    <span
                      className="text-xs sm:text-sm text-[var(--text-main2)] shrink-0"
                      data-cy="movie-rating"
                    >
                      ⭐ {movie.review}
                    </span>
                  </div>

                  <p className="mt-1 text-[11px] sm:text-xs text-slate-400">
                    {movie.genre} • {movie.playtime} perc • {movie.language}
                  </p>

                  <p
                    className="mt-2 line-clamp-2 text-xs sm:text-sm text-[var(--text-soft)]"
                    data-cy="movie-director"
                  >
                    Rendező: {movie.director}
                  </p>

                  <p
                    className="mt-1 line-clamp-2 text-xs sm:text-sm text-[var(--text-soft)]"
                    data-cy="movie-actors"
                  >
                    Szereplők: {movie.actors}
                  </p>

                  <p
                    className="mt-2 line-clamp-3 text-xs sm:text-sm text-[var(--text-soft)]"
                    data-cy="movie-description"
                  >
                    {movie.description}
                  </p>
                </div>

                <div className="flex justify-end gap-2">
                  <button
                    className="mt-2 sm:mt-3 cursor-pointer rounded bg-[var(--button-bg)] px-3 py-1 text-xs font-semibold text-[var(--text-light)] transition hover:bg-cyan-500"
                    data-cy="movie-screenings-button"
                    data-movie-id={movie.id}
                    onClick={async () => {
                      await fetch("/api/movies/selected-movie", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ movieId: movie.id }),
                      });

                      router.push("/screenings");
                    }}
                  >
                    Vetítés dátuma
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
