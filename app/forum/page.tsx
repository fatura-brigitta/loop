"use client"

import { Star } from "lucide-react";
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
        setProfileImage(user.profile_image || "/profile/default.png");
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
      })),
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
      myVote: null,
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
      setComments((prev) => prev.filter((c) => c.id !== tempId));
      return;
    }

    const real = await res.json();

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
          : c,
      ),
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
          ? {
              ...c,
              replies: [
                ...(c.replies ?? []),
                {
                  ...created,
                  profile_image: created.profile_image || "/profile/default.png"
                }
              ],
            }
          : c
      ),
    );

    setReplyText("");
    setReplyOpenFor(null);
  };

  const vote = async (postId: string, type: "LIKE" | "DISLIKE") => {
    if (postId.startsWith("temp-")) return;

    setComments((prev) =>
      prev.map((c) => {
        if (c.id !== postId) return c;

        const already = c.myVote;
        let likes = c.likes ?? 0;
        let dislikes = c.dislikes ?? 0;

        if (already === type) {
          if (type === "LIKE") likes = Math.max(0, likes - 1);
          else dislikes = Math.max(0, dislikes - 1);
          return { ...c, likes, dislikes, myVote: null };
        }

        if (type === "LIKE") {
          likes += 1;
          if (already === "DISLIKE") dislikes = Math.max(0, dislikes - 1);
        } else {
          dislikes += 1;
          if (already === "LIKE") likes = Math.max(0, likes - 1);
        }

        return { ...c, likes, dislikes, myVote: type };
      }),
    );

    const res = await fetch("/api/forum/vote", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ post_id: postId, type }),
    });

    if (!res.ok) {
      if (selectedMovie) {
        const r = await fetch(`/api/forum?movie=${selectedMovie}`, {
          cache: "no-store",
          credentials: "include",
        });
        setComments(await r.json());
      }
      return;
    }

    const updated = await res.json();

    setComments((prev) =>
      prev.map((c) =>
        c.id === updated.id
          ? { ...c, likes: updated.likes, dislikes: updated.dislikes, myVote: updated.myVote }
          : c,
      ),
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

  const safeImage = (src?: string | null) => {

    if (!src || src === "null" || src === "undefined") {
      return "/profile/default.png";
    }

    if (src.startsWith("http://") || src.startsWith("https://")) {
      return src;
    }

    if (src.startsWith("/profile")) {
      return src;
    }

    const cloud = process.env.NEXT_PUBLIC_CLOUD_NAME;

    if (!cloud) return "/profile/default.png";

    return `https://res.cloudinary.com/${cloud}/image/upload/c_fill,w_80,h_80,q_auto,f_auto/${src}`;
  };

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)]" data-cy="forum-page">
      {!showLogin && (
        <div className="flex min-h-screen items-center justify-center bg-[var(--bg-main)] text-[var(--text-main)]">
          A fórum megtekintéséhez kérjük jelentkezzen be.
        </div>
      )}

      {showLogin && (
        <div className="mx-auto max-w-6xl px-4 py-8 pb-40 text-center">
          <h1 className="mb-6 text-center text-2xl font-bold">Fórum</h1>
          <p className="mb-6 text-center">
            Válassz egy filmet és értékeld, adj hangot véleményednek!
          </p>
          <div className="mt-2">
            <div className="relative">
              <div className="film-scroll flex gap-6 overflow-x-auto scroll-smooth px-6 py-4" data-cy="forum-movie-list">
                {movies.map((movie) => (
                  <div className={`min-w-[150px] cursor-pointer transition duration-300 ${
                      selectedMovie === movie.id
                        ? "scale-105"
                        : "opacity-70 hover:scale-105 hover:opacity-100"
                    } `}
                    data-cy="forum-movie-card"
                    data-movie-id={movie.id}
                    key={movie.id}
                    onClick={() => selectMovie(movie.id)}
                  >
                    <div className="overflow-hidden rounded-xl border border-[var(--border-color)] bg-[#0b1320]">
                      <Image
                        alt={movie.title}
                        className="h-[220px] w-[150px] object-cover"
                        height={220}
                        src={movie.poster}
                        width={150}
                      />
                    </div>

                    <div className="mt-2 text-center">
                      <p className="line-clamp-2 text-sm font-semibold text-[var(--text-soft)]" data-cy="forum-movie-title">
                        {movie.title}
                      </p>
                      <p className="mt-1 text-xs text-[var(--text-main2)]">⭐ {movie.review}</p>
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
                  <span className="font-semibold text-[var(--text-main2)]">{currentMovie.title}</span>
                )}
              </h2>

              <div className="mb-6 flex gap-4 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] p-4" data-cy="forum-comment-form">
                <Image
                  alt="profil"
                  className="h-10 w-10 rounded-full object-cover"
                  height={42}
                  src={safeImage(profileImage)}
                  width={42}
                />

                <div className="flex-1">
                  <div className="mb-3 text-sm text-[var(--text-main2)]">{name}</div>

                  <textarea className="h-28 w-full resize-none rounded-lg border border-[var(--border-color)] bg-[var(--bg-main)] p-3 text-sm outline-none focus:border-cyan-400"
                    data-cy="forum-comment-input"
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

                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-2"      data-cy="forum-rating">
                          <StarRating10 value={newReview} onChange={(v) => setNewReview(v)} />
                        </div>
                      </div>
                    </div>

                    <button className="cursor-pointer rounded-lg bg-[var(--text-main2)] px-4 py-2 font-semibold text-[var(--text-light)] hover:bg-cyan-400"
                      data-cy="forum-comment-submit"
                      onClick={sendComment}
                    >
                      Küldés
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-4" data-cy="forum-comments">
                {comments.length === 0 && (
                  <div className="text-slate-400">Még nincs hozzászólás ehhez a filmhez.</div>
                )}

                {shownComments.map((c) => (
                  <div className="flex gap-4 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-4 md:p-5"
                    data-comment-id={c.id}
                    data-cy="forum-comment"
                    key={c.id}
                  >
                    <Image
                      alt="profil"
                      className="h-10 w-10 rounded-full border border-[var(--border-color)] object-cover"
                      height={40}
                      src={safeImage(c.profile_image)}
                      width={40}
                    />

                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="truncate font-semibold text-[var(--text-main2)]">
                              {c.user_name}
                            </span>

                            <span className="text-[var(--text-soft)]">•</span>

                            <span className="text-sm text-[var(--text-soft)]">
                              ⭐ {Number(c.review).toFixed(1)}
                            </span>
                          </div>
                        </div>

                        <div className="flex shrink-0 items-center gap-2">
                          <button className={`inline-flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-1.5 text-sm transition ${
                              c.myVote === "LIKE"
                                ? "border-green-800/70 bg-green-800/10 text-green-800"
                                : "border-[var(--border-color)] bg-[var(--bg-main)]/40 text-[var(--text-soft)] hover:border-green-800/60 hover:text-green-800"
                            }`}
                            data-cy="forum-like"
                            title="Like"
                            onClick={() => vote(c.id, "LIKE")}
                          >
                            <span className="text-base leading-none">👍</span>
                            <span className="tabular-nums">{c.likes ?? 0}</span>
                          </button>

                          <button className={`inline-flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-1.5 text-sm transition ${
                              c.myVote === "DISLIKE"
                                ? "border-red-800/70 bg-red-800/10 text-red-800"
                                : "border-[var(--border-color)] bg-[var(--bg-main)]/40 text-[var(--text-soft)] hover:border-red-800/60 hover:text-red-800"
                            }`}
                            data-cy="forum-dislike"
                            title="Dislike"
                            onClick={() => vote(c.id, "DISLIKE")}
                          >
                            <span className="text-base leading-none">👎</span>
                            <span className="tabular-nums">{c.dislikes ?? 0}</span>
                          </button>
                        </div>
                      </div>

                      <div className="mt-2 leading-relaxed break-words text-[var(--text-main)]" data-cy="forum-comment-text">
                        {c.comment}
                      </div>

                      <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
                        <button className="cursor-pointer text-slate-300 transition hover:text-cyan-300"
                          data-cy="forum-reply-toggle"
                          onClick={() => setReplyOpenFor(replyOpenFor === c.id ? null : c.id)}
                        >
                          Válasz
                        </button>

                        {(c.replies?.length ?? 0) > 0 && (
                          <button className="cursor-pointer text-slate-400 transition hover:text-cyan-300"
                            data-cy="forum-replies-toggle"
                            onClick={() => toggleReplies(c.id)}
                          >
                            {repliesOpen[c.id]
                              ? "Válaszok elrejtése"
                              : `${c.replies?.length} válasz`}
                          </button>
                        )}
                      </div>

                      {replyOpenFor === c.id && (
                        <div className="mt-4 flex gap-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)]/40 p-3">
                          <Image
                              alt="profil"
                              className="h-8 w-8 rounded-full border border-[var(--border-color)] object-cover"
                              height={40}
                              src={safeImage(profileImage)}
                              width={40}
                            />

                          <div className="flex-1">
                            <input className="w-full rounded-lg border border-[var(--border-color)] bg-[var(--bg-main)] px-3 py-2 text-sm text-[var(--text-main)] outline-none focus:border-cyan-400"
                              data-cy="forum-reply-input"
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
                              <button className="cursor-pointer rounded-lg bg-cyan-500 px-3 py-1 text-sm font-semibold text-black hover:bg-cyan-400"
                                data-cy="forum-reply-submit"
                                onClick={() => sendReply(c.id)}
                              >
                                Küldés
                              </button>
                            </div>
                          </div>
                        </div>
                      )}

                      {repliesOpen[c.id] && (c.replies?.length ?? 0) > 0 && (
                        <div className="mt-4 space-y-3 border-l border-[var(--border-color)] pl-4" data-cy="forum-replies">
                          {(c.replies ?? []).map((r) => (
                            <div
                              className="flex gap-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)]/35 p-3"
                              key={r.id}
                            >
                              <Image
                                alt="profil"
                                className="h-8 w-8 rounded-full border border-[var(--border-color)] object-cover"
                                height={32}
                                src={safeImage(r.profile_image)}
                                width={32}
                              />
                              <div className="min-w-0 flex-1">
                                <div className="truncate text-sm font-semibold text-cyan-300">
                                  {r.user_name}
                                </div>
                                <div className="text-sm break-words text-[var(--text-main)]" data-cy="forum-reply-text">
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
                    <button className="cursor-pointer rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] px-4 py-2 text-sm text-[var(--text-soft)] transition hover:border-cyan-400 hover:text-cyan-300"
                      data-cy="forum-load-more"
                      onClick={() => setVisibleCount((v) => Math.min(v + 5, comments.length))}
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
    value: number;
    onChange: (v: number) => void;
    disabled?: boolean;
  };

  function StarRating10({ value, onChange, disabled }: StarRatingProps) {
    const [hover, setHover] = useState<number | null>(null);
    const display = hover ?? value;

    const fillForStar = (i: number) => {
      const d = display - (i - 1);
      if (d >= 1) return 1;
      if (d >= 0.5) return 0.5;
      return 0;
    };

    const pickValueFromClick = (e: React.MouseEvent<HTMLButtonElement>, i: number) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const half = x < rect.width / 2 ? 0.5 : 1;
      const next = i - 1 + half;
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
                  setHover(i - 1 + (x < rect.width / 2 ? 0.5 : 1));
                }}
              >
                <Star className="h-5 w-5 text-slate-600" />

                {fill === 1 && (
                  <Star className="absolute top-0 left-0 h-5 w-5 fill-yellow-400 text-yellow-400" />
                )}

                {fill === 0.5 && (
                  <span className="absolute top-0 left-0 h-5 w-2.5 overflow-hidden">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <span className="w-12 text-right text-sm text-slate-300 tabular-nums">
          {display.toFixed(1)}
        </span>
      </div>
    );
  }

  function valueForHover(i: number, full: number) {
    return i - 1 + full;
  }
} 