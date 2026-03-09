"use client";

type Movie = {
  id: string;
  title: string;
  playtime: number;
};

type Screening = {
  id: string;
  start: string;
  end: string;
  movies?: { title: string; playtime: number };
};

const OPEN = 10;
const CLOSE = 22;
const CLEANING_MIN = 15;
const PX_PER_MIN = 2;

function openDate(date: string) {
  const d = new Date(date);
  d.setHours(OPEN, 0, 0, 0);
  return d;
}

function minutesFromOpen(dateISO: string, date: string) {
  const o = openDate(date).getTime();
  return Math.floor((new Date(dateISO).getTime() - o) / 60000);
}

function toLocalInputValue(d: Date) {
  const pad = (n: number) => String(n).padStart(2, "0");
  const yyyy = d.getFullYear();
  const mm = pad(d.getMonth() + 1);
  const dd = pad(d.getDate());
  const hh = pad(d.getHours());
  const mi = pad(d.getMinutes());
  return `${yyyy}-${mm}-${dd}T${hh}:${mi}`;
}

export default function Timeline({
  date,
  screenings,
  onPickStart,
  movie,
}: {
  date: string;
  screenings: Screening[];
  onPickStart: (localISO: string) => void;
  movie: Movie | null;
}) {
  const totalMinutes = (CLOSE - OPEN) * 60;
  const width = totalMinutes * PX_PER_MIN;

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;

    let minutes = Math.floor(x / PX_PER_MIN);

    if (minutes < 0) minutes = 0;

    const LAST_START = (22 - 10) * 60 - 15;
    if (minutes > LAST_START) minutes = LAST_START;


    const start = openDate(date);
    start.setMinutes(start.getMinutes() + minutes);

    onPickStart(toLocalInputValue(start));
  }

  const preview = (() => {
    if (!movie) return null;
    return null;
  })();

  return (
    <div className="overflow-x-auto border border-white/10 rounded-lg">
      <div
        className="relative h-24 bg-slate-950"
        style={{ width }}
        onClick={handleClick}
      >
        {Array.from({ length: CLOSE - OPEN + 1 }).map((_, i) => (
          <div
            className="absolute top-1 text-xs text-slate-500"
            key={i}
            style={{ left: i * 60 * PX_PER_MIN }}
          >
            {OPEN + i}:00
          </div>
        ))}

        {screenings.map((s) => {
          const leftMin = minutesFromOpen(s.start, date);
          const durMin =
            (new Date(s.end).getTime() - new Date(s.start).getTime()) / 60000;

          return (
            <div
              className="absolute top-8 h-12 rounded-md bg-emerald-500/70 border border-emerald-400 text-xs px-2 py-1 overflow-hidden"
              key={s.id}
              style={{
                left: leftMin * PX_PER_MIN,
                width: Math.max(6, durMin * PX_PER_MIN),
              }}
              title={`${s.movies?.title || "Film"} (foglalás: film+takarítás)`}
            >
              <div className="font-semibold truncate">{s.movies?.title}</div>
              <div className="text-[11px] text-[var(--text-main)]/80">film + takarítás</div>
            </div>
          );
        })}

        {preview}
      </div>
    </div>
  );
}