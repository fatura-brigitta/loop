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

type Reply = {
  id: string;
  forum_id: string;
  user_name: string;
  profile_image: string;
  comment: string;
  createdAt: string;
};

type ForumComment = {
  id: string;
  user_name: string;
  profile_image: string;
  comment: string;
  review: number;
  likes: number;
  dislikes: number;
  myVote: "LIKE" | "DISLIKE" | null;
  replies?: Reply[];
};

export default function ForumPage() {
  const router = useRouter();

  const [name, setUserName] = useState("");
  const [profileImage, setProfileImage] = useState("/profile/default.png");
  const [showLogin, setShowLogin] = useState(false);

  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<string | null>(null);
  const [newComment, setNewComment] = useState("");
  const [newReview, setNewReview] = useState(5);
  const [comments, setComments] = useState<ForumComment[]>([]);
  const [replyOpenFor, setReplyOpenFor] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");

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
    setComments(
    (data ?? []).map((c: any) => ({
      ...c,
      replies: c.replies ?? [],
    }))
  );
  };

  // ---------------- SEND COMMENT ----------------
  const sendComment = async () => {
    if (!selectedMovie || !newComment.trim()) return;

    const tempId = "temp-" + Date.now();

    const tempComment: ForumComment = {
      id: tempId,
      user_name: name,
      profile_image: profileImage,
      comment: newComment,
      review: newReview,
      likes: 0,
      dislikes: 0,
      myVote: null
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

    if (!res.ok) {
      // ha nem ment, visszavesszük a temp kommentet
      setComments((prev) => prev.filter((c) => c.id !== tempId));
      return;
    }

    const real = await res.json();

    // temp csere valódi rekordra (biztos mezőkkel)
    setComments((prev) =>
      prev.map((c) =>
        c.id === tempId
          ? {
              id: real.id ?? c.id,
              user_name: name,
              profile_image: profileImage,
              comment: real.comment ?? c.comment,
              review: typeof real.review === "number" ? real.review : c.review,
              likes: typeof real.likes === "number" ? real.likes : 0,
              dislikes: typeof real.dislikes === "number" ? real.dislikes : 0,
              myVote: null,
            }
          : c
      )
    );
  };

  const sendReply = async (forumId: string) => {
      if (!replyText.trim()) return;

      const res = await fetch("/api/forum/reply", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ forum_id: forumId, comment: replyText }),
      });

      if (!res.ok) return;

      const created = await res.json();

      setComments((prev) =>
        prev.map((c) =>
          c.id === forumId
            ? { ...c, replies: [...(c.replies ?? []), created] }
            : c
        )
      );

      setReplyText("");
      setReplyOpenFor(null);
    };

  const vote = async (postId: string, type: "LIKE" | "DISLIKE") => {
    if (postId.startsWith("temp-")) return;

    // optimistic azonnali növelés
    setComments((prev) =>
      prev.map((c) => {
        if (c.id !== postId) return c;

        // ha váltasz, akkor egyik nő, másik csökkenhet
        const already = c.myVote;
        let likes = c.likes ?? 0;
        let dislikes = c.dislikes ?? 0;

        if (already === type) {
          // toggle off
          if (type === "LIKE") likes = Math.max(0, likes - 1);
          else dislikes = Math.max(0, dislikes - 1);
          return { ...c, likes, dislikes, myVote: null };
        }

        // switch / new
        if (type === "LIKE") {
          likes += 1;
          if (already === "DISLIKE") dislikes = Math.max(0, dislikes - 1);
        } else {
          dislikes += 1;
          if (already === "LIKE") likes = Math.max(0, likes - 1);
        }

        return { ...c, likes, dislikes, myVote: type };
      })
    );

    const res = await fetch("/api/forum/vote", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ post_id: postId, type }),
    });

    if (!res.ok) {
      // hiba esetén visszaszinkron a szerverről
      if (selectedMovie) {
        const r = await fetch(`/api/forum?movie=${selectedMovie}`, {
          cache: "no-store",
          credentials: "include",
        });
        setComments(await r.json());
      }
      return;
    }

    const updated = await res.json(); // { id, likes, dislikes, myVote }

    setComments((prev) =>
      prev.map((c) =>
        c.id === updated.id
          ? { ...c, likes: updated.likes, dislikes: updated.dislikes, myVote: updated.myVote }
          : c
      )
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
          <div className="mt-2">
            <div className="overflow-x-auto pb-3">
              <div className="flex w-fit mx-auto gap-4">
                {movies.map((movie) => (
                  <div
                    key={movie.id}
                    onClick={() => selectMovie(movie.id)}
                    className="min-w-[120px] max-w-[120px] flex-shrink-0 group cursor-pointer"
                  >
                    <div className="rounded-lg overflow-hidden border border-white/10 bg-[#0b1320] hover:border-cyan-400 transition">
                      <Image
                        src={movie.poster}
                        alt={movie.title}
                        width={120}
                        height={180}
                        className="w-[120px] h-[180px] object-cover transition duration-300 group-hover:scale-105"
                      />
                    </div>

                    <div className="mt-2 text-center">
                      <p className="text-xs font-semibold text-slate-200 line-clamp-2 group-hover:text-cyan-300 transition">
                        {movie.title}
                      </p>
                      <p className="text-[11px] text-blue-300 mt-1">⭐ {movie.review}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {selectedMovie && (
            <div className="mt-10 text-left">
              <h2 className="text-xl font-semibold mb-4">Hozzászólások</h2>

             <div className="bg-[#0b1320] border border-white/10 rounded-xl p-4 mb-6 flex gap-4">

                <Image
                  src={profileImage || "/profile/default.png"}
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
                      className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-4 py-2 rounded-lg cursor-pointer"
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

                      <div className="mt-3 flex items-center gap-3 text-sm">
                        <button
                          onClick={() => vote(c.id, "LIKE")}
                          className={`rounded-lg border px-3 py-1 transition cursor-pointer
                            ${c.myVote === "LIKE"
                              ? "border-green-400 text-green-300 bg-white/10"
                              : "border-white/10 bg-white/5 hover:border-green-400 hover:text-green-300"
                            }`}
                        >
                          👍 {c.likes ?? 0}
                        </button>

                        <button
                          onClick={() => vote(c.id, "DISLIKE")}
                          className={`rounded-lg border px-3 py-1 transition cursor-pointer
                            ${c.myVote === "DISLIKE"
                              ? "border-red-400 text-red-300 bg-white/10"
                              : "border-white/10 bg-white/5 hover:border-red-400 hover:text-red-300"
                            }`}
                        >
                          👎 {c.dislikes ?? 0}
                        </button>
                      </div>

                      <div className="mt-3 flex items-center gap-3 text-sm">
                        <button
                          onClick={() => setReplyOpenFor(replyOpenFor === c.id ? null : c.id)}
                          className="text-slate-300 hover:text-cyan-300 transition cursor-pointer"
                        >
                          Válasz
                        </button>

                        <span className="text-slate-500">
                          {c.replies?.length ? `${c.replies.length} válasz` : ""}
                        </span>
                      </div>

                      {/* Reply input */}
                      {replyOpenFor === c.id && (
                        <div className="mt-3 flex gap-3">
                          <Image
                            src={profileImage || "/profile/default.png"}
                            alt="profil"
                            width={32}
                            height={32}
                            className="rounded-full h-8 w-8 object-cover"
                          />

                          <div className="flex-1">
                            <input
                              value={replyText}
                              onChange={(e) => setReplyText(e.target.value)}
                              placeholder="Írj választ..."
                              className="w-full rounded-lg bg-[#060b14] border border-white/10 px-3 py-2 text-sm outline-none focus:border-cyan-400"
                            />

                            <div className="mt-2 flex justify-end">
                              <button
                                onClick={() => sendReply(c.id)}
                                className="rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-3 py-1 text-sm cursor-pointer"
                              >
                                Küldés
                              </button>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Replies list */}
                      {(c.replies?.length ?? 0) > 0 && (
                        <div className="mt-4 space-y-3 border-l border-white/10 pl-4">
                          {(c.replies ?? []).map((r) => (
                            <div key={r.id} className="flex gap-3">
                              <Image
                                src={r.profile_image || "/profile/default.png"}
                                alt="profil"
                                width={32}
                                height={32}
                                className="rounded-full h-8 w-8 object-cover"
                              />
                              <div className="flex-1">
                                <div className="text-sm text-cyan-300 font-semibold">{r.user_name}</div>
                                <div className="text-sm text-slate-200">{r.comment}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
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
