"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Play, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/app/components/navbar";

type Movie = {
  title: string;
  director: string;
  actors: string;
  playtime: number;
  language: string;
  poster: string;
  trailer: string;
  genre: string;
  review: number;
  description: string;
};

type Screening = {
  id: string;
  start: string;
  movies: Movie;
  screening_types: {
    type: string;
  };
};

type GroupedMovie = {
  movie: Movie;
  screenings: Screening[];
};

const getYoutubeId = (url: string) => {
  const match = url.match(/(?:v=|youtu\.be\/)([^&]+)/);
  return match ? match[1] : null;
};

const getNext7Days = () => {
  const days: { label: string; date: Date; iso: string }[] = [];
  const names = ["Va", "Hé", "Ke", "Sze", "Cs", "Pé", "Szo"];

  for (let i = 0; i < 7; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);

    days.push({
      label: i === 0 ? "Ma" : names[d.getDay()],
      date: new Date(d),
      iso: d.toISOString().split("T")[0],
    });
  }
  return days;
};

const groupByType = (screenings: Screening[]) => {
  const map: Record<string, Screening[]> = {};

  screenings.forEach((s) => {
    const type = s.screening_types?.type || "Egyéb";
    if (!map[type]) map[type] = [];
    map[type].push(s);
  });

  Object.keys(map).forEach((type) => {
    map[type].sort((a, b) => {

      const aDate = new Date(a.start);
      const bDate = new Date(b.start);

      const aMinutes = aDate.getHours() * 60 + aDate.getMinutes();
      const bMinutes = bDate.getHours() * 60 + bDate.getMinutes();

      return aMinutes - bMinutes;
    });
  });

  return map;
};

export default function ScreeningsPage() {
  const router = useRouter();

  const [name, setUserName] = useState("");
  const [showLogin, setShowLogin] = useState(true);

  const [grouped, setGrouped] = useState<GroupedMovie[]>([]);
  const [openTrailer, setOpenTrailer] = useState<string | null>(null);

  const [selectedDate, setSelectedDate] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [availableTypes, setAvailableTypes] = useState<string[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const nextDays = getNext7Days();

  const hoverTimer = useRef<number | null>(null);

  useEffect(() => {
    fetch("/api/auth", { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : null))
      .then((user) => {
        if (user) {
          setUserName(user.name);
          setShowLogin(true);
        } else {
          setShowLogin(false);
        }
      });
  }, []);

  useEffect(() => {
    fetch("/api/screenings", { cache: "no-store" })
      .then((res) => res.json())
      .then((data: Screening[]) => {
        const types = Array.from(
          new Set(data.map((s) => s.screening_types?.type).filter(Boolean)),
        ) as string[];
        setAvailableTypes(types);

        const map = new Map<string, GroupedMovie>();

        data.forEach((screening) => {
          const key = screening.movies.title;

          if (!map.has(key)) {
            map.set(key, {
              movie: screening.movies,
              screenings: [],
            });
          }

          map.get(key)!.screenings.push(screening);
        });

        const groupedMovies = Array.from(map.values()).map((g) => ({
          ...g,
          screenings: g.screenings.sort(
            (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime(),
          ),
        }));

        setGrouped(groupedMovies);
      });
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!dropdownRef.current) return;

      if (!dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredGrouped = grouped
    .map((g) => {
      let screenings = g.screenings;

      screenings = screenings.filter((s) => new Date(s.start).getTime() > Date.now());

      if (selectedDate !== "all") {
        screenings = screenings.filter(
          (s) => new Date(s.start).toISOString().split("T")[0] === selectedDate,
        );
      }

      if (selectedType !== "all") {
        screenings = screenings.filter((s) => s.screening_types?.type === selectedType);
      }

      return { ...g, screenings };
    })
    .filter((g) => g.screenings.length > 0);

  const openScreening = async (id: string) => {
    await fetch("/api/screenings/", {
      method: "POST",
      body: JSON.stringify({ id }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    router.push("/screenings/hall");
  };

  const resetFilters = () => {
    setSelectedDate("all");
    setSelectedType("all");
    setDropdownOpen(false);

    window.location.href = "/screenings";
  };

  return (
    <div className="min-h-screen bg-[#060b14] text-slate-100">
      <div className="mx-auto max-w-6xl p-4">
        <h1 className="mb-6 text-2xl font-bold">Műsoron</h1>

        <div className="mb-8 flex flex-wrap items-center gap-4">

          <div className="flex gap-2 overflow-x-auto pb-1">
            <button
              className={`rounded-lg px-4 py-2 border cursor-pointer ${
                selectedDate === "all"
                  ? "bg-cyan-500 border-cyan-500 text-white"
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              }`}
              onClick={() => setSelectedDate("all")}
            >
              Összes
            </button>

            {nextDays.map((d) => (
              <button
                className={`flex min-w-[70px] flex-col items-center rounded-lg border px-4 py-2 cursor-pointer ${
                  selectedDate === d.iso
                    ? "bg-cyan-500 border-cyan-500 text-white"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
                key={d.iso}
                onClick={() => setSelectedDate(d.iso)}
              >
                <span className="text-xs opacity-80">{d.label}</span>
                <span className="text-lg font-semibold">{d.date.getDate()}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">

            <div className="relative" ref={dropdownRef}>
              <button
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10 cursor-pointer"
                onClick={() => setDropdownOpen((p) => !p)}
              >
                {selectedType === "all" ? "Előadás-típus" : selectedType}
                <ChevronDown size={16} />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-xl border border-white/10 bg-[#0b1220] shadow-xl">

                  <div
                    className="cursor-pointer px-4 py-2 hover:bg-white/10"
                    onClick={() => {
                      setSelectedType("all");
                      setDropdownOpen(false);
                    }}
                  >
                    Mind
                  </div>

                  {availableTypes.map((type) => (
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-white/10"
                      key={type}
                      onClick={() => {
                        setSelectedType(type);
                        setDropdownOpen(false);
                      }}
                    >
                      {type}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button
              className="flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10 cursor-pointer"
              title="Szűrők törlése"
              onClick={resetFilters}
            >
              ↻
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {filteredGrouped.map((g, index) => (
            <div
              className="flex items-stretch gap-6 rounded-xl border border-white/10 bg-white/5 p-4"
              key={index}
            >
              <div className="shrink-0 self-start">
                <Image
                  alt={g.movie.title}
                  className="rounded-lg object-cover"
                  height={300}
                  src={g.movie.poster}
                  width={200}
                />
              </div>

              <div className="flex flex-1 flex-col">
                <h2 className="text-xl font-semibold">{g.movie.title}</h2>

                <p className="text-xs text-slate-400">
                  {g.movie.genre} • {g.movie.playtime} perc • {g.movie.language}
                </p>

                <p className="mt-3 text-sm text-slate-300 line-clamp-3">{g.movie.description}</p>

                <div className="mt-4 flex flex-col gap-4">
                  {Object.entries(groupByType(g.screenings)).map(([type, screenings]) => (
                    <div key={type}>
                      <div className="mb-2 text-sm font-semibold text-cyan-300">{type}</div>

                      <div className="flex flex-wrap gap-2">
                        {screenings.map((s) => (
                          <button
                            className="rounded-lg bg-gray-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-500 cursor-pointer"
                            key={s.id}
                            onClick={() => openScreening(s.id)}
                          >
                            {new Date(s.start).toLocaleTimeString("hu-HU", {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {g.movie.trailer && (
                <div className="w-[340px] shrink-0 flex items-center">
                  <div
                    className="relative aspect-video w-full overflow-hidden rounded-lg bg-black"
                    onMouseEnter={() => {
                      if (hoverTimer.current) window.clearTimeout(hoverTimer.current);
                      hoverTimer.current = window.setTimeout(() => {
                        setOpenTrailer(g.movie.trailer);
                      }, 2000);
                    }}
                    onMouseLeave={() => {
                      if (hoverTimer.current) {
                        window.clearTimeout(hoverTimer.current);
                        hoverTimer.current = null;
                      }
                    }}
                  >
                    {openTrailer === g.movie.trailer ? (
                      <iframe
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        className="absolute inset-0 h-full w-full"
                        src={`https://www.youtube.com/embed/${getYoutubeId(
                          g.movie.trailer,
                        )}?autoplay=1&mute=1&rel=0&modestbranding=1`}
                      />
                    ) : (
                      <button
                        className="absolute inset-0"
                        onClick={() => setOpenTrailer(g.movie.trailer)}
                      >
                        <Image
                          alt="Trailer"
                          className="object-cover brightness-75 transition hover:brightness-100"
                          fill
                          sizes="340px"
                          src={`https://img.youtube.com/vi/${getYoutubeId(
                            g.movie.trailer,
                          )}/hqdefault.jpg`}
                        />

                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="rounded-full bg-black/70 px-5 py-3 flex items-center gap-2 text-white cursor-pointer">
                            <Play size={18} />
                            Trailer
                          </div>
                        </div>
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredGrouped.length === 0 && (
          <div className="mt-10 text-center text-white/60">
            Nincs találat a kiválasztott szűrőkre.
          </div>
        )}
      </div>
    </div>
  );
}