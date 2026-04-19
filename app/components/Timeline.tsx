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

type Props = {
  date: string;
  movie: Movie | null;
  screenings: Screening[];
  opening: {
    open: string;
    close: string;
  } | null;
  onPickStart: (iso: string) => void;
};

const PX_PER_MIN = 2;
const CLEANING_MIN = 15;

function parseTime(t: string) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

function toLocalInputValue(d: Date) {
  const pad = (n: number) => String(n).padStart(2, "0");

  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(
    d.getHours()
  )}:${pad(d.getMinutes())}`;
}

export default function Timeline({
  date,
  screenings,
  movie,
  opening,
  onPickStart,
}: Props) {
  console.log("Timeline opening:", opening)

  if (!opening) {
    return (
      <div className="border border-white/10 rounded-lg p-4 text-red-400 text-sm">
        A mozi ezen a napon zárva tart.
      </div>
    );
  }

  let openMin = parseTime(opening.open);
  let closeMin = parseTime(opening.close);

  if (closeMin <= openMin) {
    closeMin += 24 * 60;
  }

  const totalMinutes = closeMin - openMin;
  const width = totalMinutes * PX_PER_MIN;

  function minutesFromOpen(iso: string) {
    const t = new Date(iso);
    const mins = t.getHours() * 60 + t.getMinutes();
    return mins - openMin;
  }

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    if (!movie) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;

    let minutes = Math.floor(x / PX_PER_MIN);

    if (minutes < 0) minutes = 0;

    const lastStart = totalMinutes - (movie.playtime + CLEANING_MIN);

    if (minutes > lastStart) minutes = lastStart;

    const startMin = openMin + minutes;

    const start = new Date(date);
    start.setHours(Math.floor(startMin / 60), startMin % 60, 0, 0);

    onPickStart(toLocalInputValue(start));
  }

  return (
    <div className="overflow-x-auto border border-white/10 rounded-lg">
      <div
        className="relative h-24 bg-slate-950"
        style={{ width }}
        onClick={handleClick}
      >
        {Array.from({ length: Math.ceil(totalMinutes / 60) + 1 }).map((_, i) => {

          const min = openMin + i * 60;
          const h = Math.floor(min / 60) % 24;

          return (
            <div
              key={i}
              className="absolute top-1 text-xs text-slate-500"
              style={{ left: i * 60 * PX_PER_MIN }}
            >
              {h}:00
            </div>
          );
        })}

        {screenings.map((s) => {
          const leftMin = minutesFromOpen(s.start);

          const durMin =
            (new Date(s.end).getTime() - new Date(s.start).getTime()) / 60000;

          return (
            <div
              key={s.id}
              className="absolute top-8 h-12 rounded-md bg-emerald-500/70 border border-emerald-400 text-xs px-2 py-1 overflow-hidden"
              style={{
                left: leftMin * PX_PER_MIN,
                width: Math.max(6, durMin * PX_PER_MIN),
              }}
            >
              <div className="font-semibold truncate">
                {s.movies?.title}
              </div>

              <div className="text-[11px] opacity-80">
                film + takarítás
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}