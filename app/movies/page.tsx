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
              className="group flex flex-col sm:flex-row w-full overflow-hidden rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] transition-all duration-300 ease-out hover:-translate-y-[3.2px] hover:shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-500/40"
              data-cy="movie-card"
              data-movie-id={movie.id}
              key={movie.id}
            >
              <div className="relative w-full sm:w-auto shrink-0 overflow-hidden">
                <Image
                  alt={movie.title}
                  className="object-cover w-full sm:w-[160px] md:w-[200px] h-[220px] sm:h-auto"
                  data-cy="movie-poster"
                  src={movie.poster}
                />
              </div>

              <div className="flex flex-1 flex-col justify-between px-4 py-3" data-cy="movie-info">
                <div>
                  <div className="flex items-center justify-between">
                    <h2
                      className="text-base font-semibold text-[var(--text-main)]"
                      data-cy="movie-title"
                    >
                      {movie.title}
                    </h2>

                    <span className="text-sm text-[var(--text-main2)]" data-cy="movie-rating">
                      ⭐ {movie.review}
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-slate-400">
                    {movie.genre} • {movie.playtime} perc • {movie.language}
                  </p>

                  <p
                    className="mt-2 line-clamp-3 text-sm text-[var(--text-soft)]"
                    data-cy="movie-director"
                  >
                    Rendező: {movie.director}
                  </p>

                  <p
                    className="mt-2 line-clamp-3 text-sm text-[var(--text-soft)]"
                    data-cy="movie-actors"
                  >
                    Szereplők: {movie.actors}
                  </p>

                  <p
                    className="mt-2 line-clamp-3 text-sm text-[var(--text-soft)]"
                    data-cy="movie-description"
                  >
                    {movie.description}
                  </p>
                </div>

                <div className="flex justify-end gap-2">
                  <button
                    className="h-8 cursor-pointer rounded bg-[var(--button-bg)] px-4 py-1 text-xs font-semibold text-[var(--text-light)] transition-all duration-200 hover:-translate-y-[0.8px] hover:bg-cyan-500 hover:shadow-lg"
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
