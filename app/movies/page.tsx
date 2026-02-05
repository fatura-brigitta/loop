"use client";


import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LogOut } from "lucide-react";
import Image from "next/image";


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
    
    
      const handleLogout = async () => {
      await fetch("/api/logout", { method: "POST" });
    
      setUserName("");
      setShowLogin(false);
    
      router.refresh();
    };
    
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        fetch("/api/movies", { cache: "no-store" })
        .then((res) => res.json())
        .then(setMovies);
    }, []);

  return (
    <div className="min-h-screen bg-[#060b14] text-slate-100">
        <header className="sticky top-0 z-50 h-14 border-b border-white/10 bg-[#060b14]/90 backdrop-blur">
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4">
          <div>
            <Link
              className="tracking-wide items-center justify-center flex gap-2"
              href="/"
            >
              <Image
                alt="Logo"
                className="object-contain"
                height={28}
                src="/favicon.ico"
                width={28}
              />

              <span className="text-lg font-extrabold tracking-wide text-cyan-300 flex gap-2">
                Loop
              </span>
            </Link>
          </div>
          <nav className="flex items-center gap-5 text-sm">
            <a className="text-slate-200/90 hover:text-white transition" href="/movies">
              Movies
            </a>
            <a className="text-slate-200/90 hover:text-white transition" href="/screenings" onClick={async () => {
                await fetch("/api/clearSelectedMovie", { method: "POST" });
              }}>
              Screenings
            </a>
            <a className="text-slate-200/90 hover:text-white transition" href="/forum">
              Forum
            </a>
            {showLogin ? (
              <div>
                <a className="text-slate-200/90" href="/profile">
                  Hello, {name} !
                </a>
                <span> </span>
                <a className="text-slate-200/90 hover:text-white transition" onClick={handleLogout}>
                <LogOut size={25}/>
                </a>
              </div>
            ) : (
              <a
              className="ml-2 rounded-full bg-blue-500 px-4 py-2 text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:brightness-110"
              href="/login"
            >Login</a>)}
          </nav>
        </div>
      </header>
      <div className="mx-auto h-full max-w-6xl items-center p-4">
        <h1 className="mb-6 text-2xl font-bold text-white">Now on screen</h1>
        <div className="grid gap-5 sm:grid-cols-1 lg:grid-cols-2">
            {movies.map((movie) => (
            <div
                className="flex w-full rounded-lg border border-white/10 bg-white/5"
                key={movie.id}
                >
                {/* POSTER */}
                <div className="relative h-auto w-auto max  shrink-0">
                    <Image
                    alt={movie.title}
                    className="object-cover"
                    height={300}    // csak fallback
                    src={movie.poster}
                    width={200}     // csak fallback
                    />
                </div>

                {/* INFO */}
                <div className="flex flex-1 flex-col justify-between px-4 py-3">
                    <div>
                    <div className="flex items-center justify-between">
                        <h2 className="text-base font-semibold text-white">
                        {movie.title}
                        </h2>

                        <span className=" text-blue-300 text-sm">
                        ⭐ {movie.review}
                        </span>
                    </div>

                    <p className="mt-1 text-xs text-slate-400">
                        {movie.genre} • {movie.playtime} min • {movie.language}
                    </p>

                    <p className="mt-2 line-clamp-2 text-sm text-slate-300">
                        Director: {movie.director}
                    </p>

                    <p className="mt-2 line-clamp-2 text-sm text-slate-300">
                        Actors: {movie.actors}
                    </p>

                    <p className="mt-2 line-clamp-2 text-sm text-slate-300">
                        {movie.description}
                    </p>
                    </div>

                    {/* ACTIONS */}
                    <div className="flex justify-end gap-2">
                    <button className="rounded border border-white/10 px-3 py-1 text-xs text-slate-300 hover:bg-white/5 w-20 h-8 cursor-pointer">
                        Trailer
                    </button>

                    <button className="rounded bg-blue-500 px-3 py-1 text-xs text-white hover:bg-blue-600  w-30 h-8 cursor-pointer" onClick={async () => {
                      await fetch("/api/setSelectedMovie", {
                        method: "POST",
                        body: JSON.stringify({ movieId: movie.id }),
                      });

                      sessionStorage.setItem("selectedMovie", JSON.stringify(movie));

                      router.push("/screenings");
                    }}>
                        Screening date
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
