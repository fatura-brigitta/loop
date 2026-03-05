"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { Star } from "lucide-react";

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
  created_at: string;
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
  const currentMovie = movies.find((m) => m.id === selectedMovie);
  const [visibleCount, setVisibleCount] = useState(5);
  const [repliesOpen, setRepliesOpen] = useState<Record<string, boolean>>({});

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

  useEffect(() => {
    fetch("/api/movies", { cache: "no-store" })
      .then((res) => res.json())
      .then(setMovies);
  }, []);

  const selectMovie = async (movieId: string) => {
    setSelectedMovie(movieId);

    const res = await fetch(`/api/forum?movie=${movieId}`);

    let data = [];

    try {
      data = await res.json();
    } catch {
      data = [];
    }
    setComments(
    (data ?? []).map((c: any) => ({
      ...c,
      replies: c.replies ?? [],
    }))
  );
  };

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

    setVisibleCount(5);
    setRepliesOpen({});
    setReplyOpenFor(null);
    setReplyText("");
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

  const toggleReplies = (commentId: string) => {
    setRepliesOpen((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }));
  };

  const shownComments = comments.slice(0, visibleCount);
  const hasMore = visibleCount < comments.length;

  return (
    <div className="min-h-screen bg-linear-to-b from-[#020617] via-[#060b14] to-black text-slate-100">
      {!showLogin && (
        <div className="flex min-h-screen items-center justify-center bg-[#060b14] text-white">
          A fórum megtekintéséhez kérjük jelentkezzen be.
        </div>
      )}

      {showLogin && (
        <div className="mx-auto max-w-6xl px-4 py-8 pb-40 text-center">
          <h1 className="mb-6 text-center text-2xl font-bold">Fórum</h1>
          <p className="mb-6 text-center">Válassz egy filmet és értékeld, adj hangot véleményednek!</p>
          <div className="mt-2">
            <div className="relative">
              <div className="film-scroll flex gap-6 overflow-x-auto px-6 py-4 scroll-smooth">
                {movies.map((movie) => (
                  <div
                    className={`min-w-[150px] transition duration-300 cursor-pointer
                      ${
                        selectedMovie === movie.id
                          ? "scale-105"
                          : "opacity-70 hover:opacity-100 hover:scale-105"
                      }
                    `}
                    key={movie.id}
                    onClick={() => selectMovie(movie.id)}
                  >
                    <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0b1320]">
                      <Image
                        alt={movie.title}
                        className="w-[150px] h-[220px] object-cover"
                        height={220}
                        src={movie.poster}
                        width={150}
                      />
                    </div>

                    <div className="mt-2 text-center">
                      <p className="text-sm font-semibold text-slate-200 line-clamp-2">
                        {movie.title}
                      </p>
                      <p className="text-xs text-cyan-300 mt-1">
                        ⭐ {movie.review}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {selectedMovie && (
            <div className="mt-10 text-left">
              <h2 className="mb-4 flex flex-wrap items-end gap-2 text-xl font-semibold">
                <span>Hozzászólások -</span>
                {currentMovie && (
                  <span className="text-cyan-300 font-semibold">{currentMovie.title}</span>
                )}
              </h2>

             <div className="bg-[#0b1320] border border-white/10 rounded-xl p-4 mb-6 flex gap-4">

                <Image
                  alt="profil"
                  className="rounded-full h-10 w-10 object-cover"
                  height={42}
                  src={profileImage || "/profile/default.png"}
                  width={42}
                />

                <div className="flex-1">
                  <div className="text-sm text-cyan-300 mb-1">{name}</div>

                  <textarea
                    className="w-full h-28 resize-none rounded-lg bg-[#060b14] border border-white/10 p-3 text-sm outline-none focus:border-cyan-400"
                    placeholder="Írd le a véleményed a filmről..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        sendComment();
                      }
                    }}
                  />

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-4">

                      <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-2">
                          <StarRating10
                            value={newReview}
                            onChange={(v) => setNewReview(v)}
                          />
                        </div>
                      </div>

                    </div>

                    <button
                      className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-4 py-2 rounded-lg cursor-pointer"
                      onClick={sendComment}
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

                {shownComments.map((c) => (
                  <div
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 flex gap-4"
                    key={c.id}
                  >
                    <Image
                      alt="profil"
                      className="rounded-full h-10 w-10 object-cover border border-white/10"
                      height={40}
                      src={c.profile_image || "/profile/default.png"}
                      width={40}
                    />

                    <div className="flex-1">
                      {/* HEADER: name+rating left, votes right */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-cyan-300 font-semibold truncate">
                              {c.user_name}
                            </span>

                            <span className="text-slate-500">•</span>

                            <span className="text-sm text-slate-200">
                              ⭐ {Number(c.review).toFixed(1)}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            className={`inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm transition cursor-pointer
                              ${
                                c.myVote === "LIKE"
                                  ? "border-green-400/70 bg-green-400/10 text-green-200"
                                  : "border-white/10 bg-[#060b14]/40 text-slate-200 hover:border-green-400/60 hover:text-green-200"
                              }`}
                            title="Like"
                            onClick={() => vote(c.id, "LIKE")}
                          >
                            <span className="text-base leading-none">👍</span>
                            <span className="tabular-nums">{c.likes ?? 0}</span>
                          </button>

                          <button
                            className={`inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm transition cursor-pointer
                              ${
                                c.myVote === "DISLIKE"
                                  ? "border-red-400/70 bg-red-400/10 text-red-200"
                                  : "border-white/10 bg-[#060b14]/40 text-slate-200 hover:border-red-400/60 hover:text-red-200"
                              }`}
                            title="Dislike"
                            onClick={() => vote(c.id, "DISLIKE")}
                          >
                            <span className="text-base leading-none">👎</span>
                            <span className="tabular-nums">{c.dislikes ?? 0}</span>
                          </button>
                        </div>
                      </div>

                      {/* BODY */}
                      <div className="mt-2 text-slate-100 leading-relaxed break-words">
                        {c.comment}
                      </div>

                      {/* ACTIONS */}
                      <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
                        <button
                          className="text-slate-300 hover:text-cyan-300 transition cursor-pointer"
                          onClick={() => setReplyOpenFor(replyOpenFor === c.id ? null : c.id)}
                        >
                          Válasz
                        </button>

                        {(c.replies?.length ?? 0) > 0 && (
                          <button
                            className="text-slate-400 hover:text-cyan-300 transition cursor-pointer"
                            onClick={() => toggleReplies(c.id)}
                          >
                            {repliesOpen[c.id]
                              ? "Válaszok elrejtése"
                              : `${c.replies?.length} válasz`}
                          </button>
                        )}
                      </div>

                      {/* Reply input */}
                      {replyOpenFor === c.id && (
                        <div className="mt-4 flex gap-3 rounded-xl border border-white/10 bg-[#060b14]/40 p-3">
                          <Image
                            alt="profil"
                            className="rounded-full h-8 w-8 object-cover border border-white/10"
                            height={32}
                            src={profileImage || "/profile/default.png"}
                            width={32}
                          />

                          <div className="flex-1">
                            <input
                              className="w-full rounded-lg bg-[#060b14] border border-white/10 px-3 py-2 text-sm outline-none focus:border-cyan-400 text-slate-100"
                              placeholder="Írj választ..."
                              value={replyText}
                              onChange={(e) => setReplyText(e.target.value)}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  e.preventDefault();
                                  sendReply(c.id);
                                }
                              }}
                            />

                            <div className="mt-2 flex justify-end">
                              <button
                                className="rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-3 py-1 text-sm cursor-pointer"
                                onClick={() => sendReply(c.id)}
                              >
                                Küldés
                              </button>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Replies list */}
                      {repliesOpen[c.id] && (c.replies?.length ?? 0) > 0 && (
                        <div className="mt-4 space-y-3 border-l border-white/10 pl-4">
                          {(c.replies ?? []).map((r) => (
                            <div
                              className="flex gap-3 rounded-xl border border-white/10 bg-[#060b14]/35 p-3"
                              key={r.id}
                            >
                              <Image
                                alt="profil"
                                className="rounded-full h-8 w-8 object-cover border border-white/10"
                                height={32}
                                src={r.profile_image || "/profile/default.png"}
                                width={32}
                              />
                              <div className="flex-1 min-w-0">
                                <div className="text-sm text-cyan-300 font-semibold truncate">
                                  {r.user_name}
                                </div>
                                <div className="text-sm text-slate-100 break-words">
                                  {r.comment}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {hasMore && (
                  <div className="mt-6 flex justify-center">
                    <button
                      className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 hover:border-cyan-400 hover:text-cyan-300 transition cursor-pointer"
                      onClick={() =>
                        setVisibleCount((v) => Math.min(v + 5, comments.length))
                      }
                    >
                      További kommentek megjelenítése
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );

  type StarRatingProps = {
    value: number; // 0..10 (0.5 step)
    onChange: (v: number) => void;
    disabled?: boolean;
  };

  function StarRating10({ value, onChange, disabled }: StarRatingProps) {
    const [hover, setHover] = useState<number | null>(null);
    const display = hover ?? value;

    // display: 0..10 -> csillag index 1..10
    const fillForStar = (i: number) => {
      // i: 1..10
      const d = display - (i - 1); // 0..?
      if (d >= 1) return 1; // full
      if (d >= 0.5) return 0.5; // half
      return 0; // empty
    };

    const pickValueFromClick = (e: React.MouseEvent<HTMLButtonElement>, i: number) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const half = x < rect.width / 2 ? 0.5 : 1;
      const next = (i - 1) + half; // 0.5..10
      return Math.max(0, Math.min(10, next));
    };

    return (
      <div className="flex items-center gap-2">
        <div className="flex items-center">
          {Array.from({ length: 10 }).map((_, idx) => {
            const i = idx + 1;
            const fill = fillForStar(i);

            return (
              <button
                aria-label={`Értékelés: ${i} csillag`}
                className={`relative p-0.5 transition ${
                  disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"
                }`}
                disabled={disabled}
                key={i}
                type="button"
                onClick={(e) => {
                  if (disabled) return;
                  onChange(pickValueFromClick(e, i));
                }}
                onMouseEnter={() => setHover(valueForHover(i, 1))}
                onMouseLeave={() => setHover(null)}
                onMouseMove={(e) => {
                  if (disabled) return;
                  const rect = (e.currentTarget as HTMLButtonElement).getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  setHover((i - 1) + (x < rect.width / 2 ? 0.5 : 1));
                }}
              >
                {/* base (empty) */}
                <Star className="h-5 w-5 text-slate-600" />

                {/* full overlay */}
                {fill === 1 && (
                  <Star className="absolute left-0 top-0 h-5 w-5 text-yellow-400 fill-yellow-400" />
                )}

                {/* half overlay */}
                {fill === 0.5 && (
                  <span className="absolute left-0 top-0 h-5 w-2.5 overflow-hidden">
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <span className="text-sm text-slate-300 tabular-nums w-12 text-right">
          {display.toFixed(1)}
        </span>
      </div>
    );
  }

  // kis helper (nem kötelező, csak hogy TS ne kötözködjön)
  function valueForHover(i: number, full: number) {
    return (i - 1) + full;
  }
}
