"use client";

import { Chair, Hall } from "@prisma/client";
import { ChevronDown, Play } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

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

type ScreeningInfo = {
  start: string;
  type: string;
  movie: {
    title: string;
  };
};

type HallResponse = {
  hall: Hall;
  chairs: Chair[];
  screening: ScreeningInfo;
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
      iso: getLocalDate(d),
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

const getDateLabel = (dateStr: string) => {
  const today = new Date();
  const date = new Date(dateStr);

  const todayStr = getLocalDate(today);

  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const tomorrowStr = getLocalDate(tomorrow);

  if (dateStr === todayStr) return "Ma";
  if (dateStr === tomorrowStr) return "Holnap";

  return date.toLocaleDateString("hu-HU", {
    month: "numeric",
    day: "numeric",
  });
};

const groupByDateAndType = (screenings: Screening[]) => {
  const map: Record<string, Record<string, Screening[]>> = {};

  screenings.forEach((s) => {
    const date = getLocalDate(new Date(s.start));
    const type = s.screening_types?.type || "Egyéb";

    if (!map[date]) map[date] = {};
    if (!map[date][type]) map[date][type] = [];

    map[date][type].push(s);
  });

  Object.values(map).forEach((types) => {
    Object.values(types).forEach((list) => {
      list.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());
    });
  });
  return map;
};

const getLocalDate = (date: Date) => {
  return new Intl.DateTimeFormat("sv-SE", {
    timeZone: "Europe/Budapest",
  }).format(date);
};

export default function ScreeningsPage() {
  const router = useRouter();

  const [name, setUserName] = useState("");
  const [showLogin, setShowLogin] = useState(true);

  const [grouped, setGrouped] = useState<GroupedMovie[]>([]);
  const [openTrailer, setOpenTrailer] = useState<string | null>(null);

  const [selectedDate, setSelectedDate] = useState<string>(getLocalDate(new Date()));
  const [closedDay, setClosedDay] = useState(false);
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
    fetch(`/api/screenings?date=${selectedDate}`, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        setClosedDay(data.closedDay);

        const screenings: Screening[] = data.screenings || [];

        const types = Array.from(
          new Set(screenings.map((s) => s.screening_types?.type).filter(Boolean)),
        ) as string[];

        setAvailableTypes(types);

        const map = new Map<string, GroupedMovie>();

        screenings.forEach((screening) => {
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
  }, [selectedDate]);

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

      screenings = screenings.filter((s) => getLocalDate(new Date(s.start)) === selectedDate);

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
    setSelectedDate(getLocalDate(new Date()));
    setSelectedType("all");
    setDropdownOpen(false);

    window.location.href = "/screenings";
  };

  return (
    <div
      className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)]"
      data-cy="screenings-page"
    >
      <div className="mx-auto max-w-6xl px-3 md:px-4 py-4" data-cy="screenings-container">
        <h1 className="mb-6 text-2xl font-bold px-3">Műsoron</h1>

        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-2 px-3 md:px-4">
          <div
            className="flex w-full md:w-auto gap-1 sm:gap-2 md:gap-2 md:overflow-x-auto md:pb-2"
            data-cy="screenings-date-filter"
          >
            {nextDays.map((d) => (
              <button
                key={d.iso}
                onClick={() => setSelectedDate(d.iso)}
                data-cy={`screenings-date-${d.iso}`}
                className={`
                flex flex-col items-center justify-center rounded-lg border transition active:scale-95 cursor-pointer

                flex-1 px-1 py-1.5 text-[9px]

                sm:px-2 sm:py-2 sm:text-xs

                md:flex-none md:min-w-[70px] md:px-3 md:py-2 md:text-sm md:snap-start

                ${selectedDate === d.iso
                    ? "border-cyan-500 bg-cyan-500 text-white"
                    : "border-[var(--border-color)] bg-[var(--card-bg)] hover:bg-[var(--text-slate-hover)]"
                  }
              `}
              >
                <span className="opacity-80">
                  {d.label}
                </span>
                <span className="font-semibold text-sm md:text-lg">
                  {d.date.getDate()}
                </span>
              </button>
            ))}
          </div>

          <div className="flex w-full md:w-auto items-center gap-2">
            <div className="relative flex-1 md:flex-none" ref={dropdownRef}>
              <button
                className="flex w-full md:w-44 cursor-pointer items-center justify-between rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] px-3 py-2 text-sm hover:bg-[var(--text-slate-hover)]"
                onClick={() => setDropdownOpen((p) => !p)}
              >
                {selectedType === "all" ? "Előadás-típus" : selectedType}
                <ChevronDown size={16} />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 z-50 mt-2 w-full overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)]/95 shadow-xl backdrop-blur-md">
                  <div
                    className="cursor-pointer px-4 py-2 hover:bg-[var(--text-slate-hover)]"
                    onClick={() => {
                      setSelectedType("all");
                      setDropdownOpen(false);
                    }}
                  >
                    Mind
                  </div>

                  {availableTypes.map((type) => (
                    <div
                      key={type}
                      className="cursor-pointer px-4 py-2 hover:bg-[var(--text-slate-hover)]"
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
              className="flex shrink-0 items-center justify-center rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] px-3 py-2 hover:bg-[var(--text-slate-hover)] cursor-pointer"
              onClick={resetFilters}
            >
              ↻
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6 px-3" data-cy="screenings-movie-list">
          {filteredGrouped.map((g, index) => (
            <div
              key={index}
              data-cy="screenings-movie-card"
              data-movie-title={g.movie.title}
              className="flex flex-col md:flex-row md:items-stretch gap-4 md:gap-6 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] p-3 md:p-4 transition-all duration-300 ease-out hover:-translate-y-[2.5px] hover:shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-500/40"
            >
              <div className="flex gap-4 w-full md:w-auto">
                <div className="w-[110px] sm:w-[130px] md:w-[180px] shrink-0 flex items-center justify-center">
                  <Image
                    alt={g.movie.title}
                    src={g.movie.poster}
                    width={200}
                    height={300}
                    className="rounded-lg object-cover w-full h-auto"
                    data-cy="screenings-movie-poster"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-center">
                  <h2 className="text-base md:text-xl font-semibold">
                    {g.movie.title}
                  </h2>

                  <p className="text-xs text-slate-400">
                    {g.movie.genre} • {g.movie.playtime} perc • {g.movie.language}
                  </p>

                  <p className="mt-2 md:mt-3 line-clamp-3 text-xs md:text-sm text-[var(--text-soft)]">
                    {g.movie.description}
                  </p>

                  <div className="mt-3 md:mt-4 flex flex-col gap-3 md:gap-4">
                    {selectedDate === "all"
                      ? Object.entries(groupByDateAndType(g.screenings)).map(([date, types]) => (
                        <div key={date}>
                          <div className="mb-1 text-xs md:text-sm font-bold text-[var(--text-main2)]">
                            {getDateLabel(date)}
                          </div>

                          {Object.entries(types).map(([type, screenings]) => (
                            <div key={type} className="mb-2">
                              <div className="text-[10px] md:text-xs font-semibold opacity-70 mb-1">
                                {type}
                              </div>

                              <div className="flex flex-wrap gap-2">
                                {screenings.map((s) => (
                                  <button
                                    key={s.id}
                                    onClick={() => openScreening(s.id)}
                                    className="px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm rounded-lg bg-[var(--button-bg)] text-[var(--text-light)] font-semibold transition hover:bg-cyan-500"
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
                      ))
                      : Object.entries(groupByType(g.screenings)).map(([type, screenings]) => (
                        <div
                          key={type}
                          className="flex items-center gap-3 flex-wrap"
                        >
                          <div className="min-w-[40px] text-xs md:text-sm font-semibold text-[var(--text-main2)]">
                            {type}
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {screenings.map((s) => (
                              <button
                                key={s.id}
                                onClick={() => openScreening(s.id)}
                                className="px-3 py-1.5 text-xs md:text-sm rounded-lg bg-[var(--button-bg)] text-[var(--text-light)] font-semibold transition hover:bg-cyan-500 cursor-pointer"
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
              </div>

              {g.movie.trailer && (
                <div className="w-full md:w-[360px] lg:w-[360px] shrink-0 flex items-center justify-center md:justify-end">
                  <div
                    className="relative aspect-video w-[85%] sm:w-[70%] md:w-full max-w-[360px] overflow-hidden rounded-lg bg-black shadow-md"
                    data-cy="screenings-trailer"
                    onMouseEnter={() => {
                      if (hoverTimer.current) window.clearTimeout(hoverTimer.current);
                      hoverTimer.current = window.setTimeout(() => {
                        setOpenTrailer(g.movie.trailer);
                      }, 1200);
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
                        className="absolute inset-0 w-full h-full cursor-pointer"
                        src={`https://www.youtube.com/embed/${getYoutubeId(
                          g.movie.trailer
                        )}?autoplay=1&mute=1&rel=0&modestbranding=1`}
                      />
                    ) : (
                      <button
                        className="absolute inset-0 cursor-pointer"
                        onClick={() => setOpenTrailer(g.movie.trailer)}
                      >
                        <Image
                          alt="Trailer"
                          fill
                          sizes="340px"
                          className="object-cover brightness-75 hover:brightness-100 transition cursor-pointer"
                          src={`https://img.youtube.com/vi/${getYoutubeId(
                            g.movie.trailer
                          )}/hqdefault.jpg`}
                        />

                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="flex items-center gap-2 rounded-full bg-[var(--bg-main)]/70 px-4 py-2 md:px-5 md:py-3 text-[var(--text-main)]">
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

        {filteredGrouped.length === 0 &&
          (closedDay ? (
            <div className="mx-auto mt-10 max-w-lg rounded-xl border border-red-500/40 bg-red-500/10 p-6 text-center text-red-300 shadow-xl backdrop-blur">
              Mozink ünnepnap miatt ma zárva tart.
            </div>
          ) : (
            <div className="mt-12 text-center text-[var(--text-main)]/60">
              Nincs találat a kiválasztott szűrőkre.
            </div>
          ))}
      </div>
    </div>
  );
}