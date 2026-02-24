"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "@/app/components/navbar";

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

export default function ForumPage() {
  const router = useRouter();

  const [name, setUserName] = useState("");
  const [profileImage, setProfileImage] = useState("/profile/default.png");
  const [showLogin, setShowLogin] = useState(false);

  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<string | null>(null);
  const [comments, setComments] = useState<any[]>([]);
  const [newComment, setNewComment] = useState("");
  const [newReview, setNewReview] = useState(5);

  // ---------------- AUTH ----------------
  useEffect(() => {
    const loadUser = async () => {
      const userRes = await fetch("/api/auth", { cache: "no-store" });

      if (userRes.status === 200) {
        const user = await userRes.json();
        setUserName(user.name);
        setProfileImage(user.profile_image);
        setShowLogin(true);
      } else {
        setShowLogin(false);
      }
    };
    loadUser();
  }, []);

  // ---------------- MOVIES ----------------
  useEffect(() => {
    fetch("/api/movies", { cache: "no-store" })
      .then((res) => res.json())
      .then(setMovies);
  }, []);

  // ---------------- SELECT MOVIE ----------------
  const selectMovie = async (movieId: string) => {
    setSelectedMovie(movieId);

    const res = await fetch(`/api/forum?movie=${movieId}`);
    const data = await res.json();
    setComments(data);
  };

  // ---------------- SEND COMMENT ----------------
  const sendComment = async () => {
    if (!selectedMovie || !newComment.trim()) return;

    const tempId = "temp-" + Date.now();

    const tempComment = {
      id: tempId,
      user_name: name,
      profile_image: profileImage,
      comment: newComment,
      review: newReview,
    };

    setComments((prev) => [tempComment, ...prev]);
    setNewComment("");

    const res = await fetch("/api/forum", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        movie_id: selectedMovie,
        comment: tempComment.comment,
        review: tempComment.review,
      }),
    });

    const real = await res.json();

    // temp csere valódi rekordra
    setComments((prev) =>
      prev.map((c) => (c.id === tempId ? { ...real, user_name: name, profile_image: profileImage } : c))
    );
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-[#020617] via-[#060b14] to-black text-slate-100">
      <Navbar />

      {!showLogin && (
        <div className="flex min-h-screen items-center justify-center bg-[#060b14] text-white">
          A fórum megtekintéséhez kérjük jelentkezzen be.
        </div>
      )}

      {showLogin && (
        <div className="mx-auto max-w-6xl px-4 py-8 pb-40 text-center">
          <h1 className="mb-6 text-center text-2xl font-bold">Fórum</h1>
          <div className="flex justify-center">
            <div className="flex gap-4 overflow-x-auto pb-3">
                {movies.map((movie) => (
                <div
                  key={movie.id}
                  onClick={() => selectMovie(movie.id)}
                  className="min-w-[120px] max-w-[120px] flex-shrink-0 group cursor-pointer"
                >
                  {/* POSTER */}
                  <div className="rounded-lg overflow-hidden border border-white/10 bg-[#0b1320] hover:border-cyan-400 transition">
                    <Image
                      src={movie.poster}
                      alt={movie.title}
                      width={120}
                      height={180}
                      className="w-[120px] h-[180px] object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* TITLE + RATING */}
                  <div className="mt-2 text-center">
                    <p className="text-xs font-semibold text-slate-200 line-clamp-2 group-hover:text-cyan-300 transition">
                      {movie.title}
                    </p>

                    <p className="text-[11px] text-blue-300 mt-1">
                      ⭐ {movie.review}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {selectedMovie && (
            <div className="mt-10 text-left">
              <h2 className="text-xl font-semibold mb-4">Hozzászólások</h2>

             <div className="bg-[#0b1320] border border-white/10 rounded-xl p-4 mb-6 flex gap-4">

                <Image
                  src={profileImage}
                  alt="profil"
                  width={42}
                  height={42}
                  className="rounded-full h-10 w-10 object-cover"
                />

                <div className="flex-1">
                  <div className="text-sm text-cyan-300 mb-1">{name}</div>

                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Írd le a véleményed a filmről..."
                    className="w-full h-28 resize-none rounded-lg bg-[#060b14] border border-white/10 p-3 text-sm outline-none focus:border-cyan-400"
                  />

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-4">

                      <div className="flex flex-col gap-2">
                        <span className="text-sm text-slate-300">
                          Értékelés: {newReview.toFixed(1)}
                        </span>

                        <input
                          type="range"
                          min={0}
                          max={10}
                          step={0.1}
                          value={newReview}
                          onChange={(e) => setNewReview(parseFloat(e.target.value))}
                          className="w-40 accent-cyan-400"
                        />
                      </div>

                    </div>

                    <button
                      onClick={sendComment}
                      className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-4 py-2 rounded-lg"
                    >
                      Küldés
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {comments.length === 0 && (
                  <div className="text-slate-400">Még nincs hozzászólás ehhez a filmhez.</div>
                )}

                {comments.map((c) => (
                  <div
                    key={c.id}
                    className="bg-[#0b1320] border border-white/10 rounded-xl p-4 flex gap-4"
                  >
                    <Image
                      src={c.profile_image || "/profile/default.png"}
                      alt="profil"
                      width={40}
                      height={40}
                      className="rounded-full h-10 w-10 object-cover"
                    />

                    <div className="flex-1">
                      <div className="text-cyan-300 font-semibold">
                        {c.user_name}
                      </div>

                      <div className="text-sm text-slate-400">
                        ⭐ {c.review}
                      </div>

                      <div className="mt-2 text-slate-200">
                        {c.comment}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
