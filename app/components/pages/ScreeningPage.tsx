"use client";

import { ChevronDown, Play } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Footer from "@/app/components/footer";

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
    <div className="min-h-screen bg-[#060b14] text-slate-100" data-cy="screenings-page">
      <div className="mx-auto max-w-6xl p-4" data-cy="screenings-container">
        <h1 className="mb-6 text-2xl font-bold">Műsoron</h1>

        <div className="mb-8 flex flex-wrap items-center gap-4">
          <div className="flex gap-2 overflow-x-auto pb-1" data-cy="screenings-date-filter">
            <button className={`cursor-pointer rounded-lg border px-4 py-2 ${
                selectedDate === "all"
                  ? "border-cyan-500 bg-cyan-500 text-white"
                  : "border-white/10 bg-white/5 hover:bg-white/10"
              }`}
              data-cy="screenings-date-all"
              onClick={() => setSelectedDate("all")}
            >
              Összes
            </button>

            {nextDays.map((d) => (
              <button className={`flex min-w-[70px] cursor-pointer flex-col items-center rounded-lg border px-4 py-2 ${
                  selectedDate === d.iso
                    ? "border-cyan-500 bg-cyan-500 text-white"
                    : "border-white/10 bg-white/5 hover:bg-white/10"
                }`}
                data-cy={`screenings-date-${d.iso}`}
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
              <button className="flex cursor-pointer items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10"
                data-cy="screenings-type-dropdown"
                onClick={() => setDropdownOpen((p) => !p)}
              >
                {selectedType === "all" ? "Előadás-típus" : selectedType}
                <ChevronDown size={16} />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-xl border border-white/10 bg-[#0b1220] shadow-xl" data-cy="screenings-type-dropdown-menu">
                  <div className="cursor-pointer px-4 py-2 hover:bg-white/10"
                    data-cy="screenings-type-all"
                    onClick={() => {
                      setSelectedType("all");
                      setDropdownOpen(false);
                    }}
                  >
                    Mind
                  </div>

                  {availableTypes.map((type) => (
                    <div className="cursor-pointer px-4 py-2 hover:bg-white/10"
                      data-cy={`screenings-type-${type}`}
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
            <button className="flex cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10"
              data-cy="screenings-reset-filters"
              title="Szűrők törlése"
              onClick={resetFilters}
            >
              ↻
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6" data-cy="screenings-movie-list">
          {filteredGrouped.map((g, index) => (
            <div className="flex items-stretch gap-6 rounded-xl border border-white/10 bg-white/5 p-4"
              data-cy="screenings-movie-card"
              data-movie-title={g.movie.title}
              key={index}
            >
              <div className="shrink-0 self-start">
                <Image alt={g.movie.title}
                  className="rounded-lg object-cover"
                  data-cy="screenings-movie-poster"
                  height={300}
                  src={g.movie.poster}
                  width={200}
                />
              </div>

              <div className="flex flex-1 flex-col">
                <h2 className="text-xl font-semibold" data-cy="screenings-movie-title">{g.movie.title}</h2>

                <p className="text-xs text-slate-400">
                  {g.movie.genre} • {g.movie.playtime} perc • {g.movie.language}
                </p>

                <p className="mt-3 line-clamp-3 text-sm text-slate-300">{g.movie.description}</p>

                <div className="mt-4 flex flex-col gap-4">
                  {Object.entries(groupByType(g.screenings)).map(([type, screenings]) => (
                    <div data-cy="screenings-type-group"
                      data-screening-type={type} key={type}>
                      <div className="mb-2 text-sm font-semibold text-cyan-300">{type}</div>

                      <div className="flex flex-wrap gap-2">
                        {screenings.map((s) => (
                          <button className="cursor-pointer rounded-lg bg-gray-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-500"
                            data-cy="screening-time-button"
                            data-screening-id={s.id}
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
                <div className="flex w-[340px] shrink-0 items-center">
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black"
                    data-cy="screenings-trailer"
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
                      <button className="absolute inset-0"
                        data-cy="screenings-trailer-play"
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
                          <div className="flex cursor-pointer items-center gap-2 rounded-full bg-black/70 px-5 py-3 text-white">
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
          <div className="mt-10 text-center text-white/60" data-cy="screenings-empty">
            Nincs találat a kiválasztott szűrőkre.
          </div>
        )}
      </div>
    </div>
  );
}
