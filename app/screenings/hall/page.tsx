"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LogOut } from "lucide-react";
import Image from "next/image";

type Chair = {
  id: string;
  row: number;
  column: number;
  state: boolean;
};

type Hall = {
  id: string;
  name: string;
  row: number;
  column: number;
};

type HallResponse = {
  hall: Hall;
  chairs: Chair[];
};

function hallNumberFromId(id: string): number {
  const match = id.match(/\d+$/);
  return match ? Number(match[0]) : 0;
}

function SeatGrid({
  chairs,
  rows,
  columns,
  selectedSeats,
  onSeatClick,
}: {
  chairs: Chair[];
  rows: number;
  columns: number;
  selectedSeats: string[];
  onSeatClick: (chair: Chair | undefined) => void;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      {Array.from({ length: rows }).map((_, r) => (
        <div className="flex gap-2" key={r}>
          {Array.from({ length: columns }).map((_, c) => {
            const chair = chairs.find(
              (ch) => ch.row === r + 1 && ch.column === c + 1
            );

            let color = "bg-slate-700/40"; // nincs szék

            if (chair) {
              if (chair.state) color = "bg-gray-400 cursor-not-allowed";
              else if (selectedSeats.includes(chair.id))
                color = "bg-orange-500";
              else color = "bg-green-500 hover:bg-green-400";
            }

            return (
              <div
                key={c}
                onClick={() => onSeatClick(chair)}
                title={`Sor ${r + 1}, Szék ${c + 1}`}
                className={`h-8 w-8 rounded transition-all duration-150
                ${color}
                ${chair && !chair.state ? "cursor-pointer hover:scale-110" : ""}
              `}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

function CinemaScreen() {
  return (
    <div className="mb-10 flex w-full flex-col items-center">
      <div className="h-9 w-[70%] rounded-t-[100%] bg-gradient-to-b from-white/80 via-white/40 to-transparent blur-[2px]" />
    </div>
  );
}

export default function HallPage() {
  const router = useRouter();

  const [name, setUserName] = useState("");
  const [showLogin, setShowLogin] = useState(false);

  const [hall, setHall] = useState<Hall | null>(null);
  const [chairs, setChairs] = useState<Chair[]>([]);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [loadingHall, setLoadingHall] = useState(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const loadUser = async () => {
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

    loadUser();
  }, []);

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    setUserName("");
    setShowLogin(false);
    setHall(null);
    setChairs([]);
    setError("");
    router.refresh();
  };

  useEffect(() => {
    // ha nincs login, reseteljük a terem állapotot
    if (!showLogin) {
      setHall(null);
      setChairs([]);
      setError("");
      setLoadingHall(false);
      return;
    }

    const loadHall = async () => {
      setLoadingHall(true);
      setError("");

      const res = await fetch("/api/screenings/hall", {
        cache: "no-store",
        credentials: "include",
      });

      if (!res.ok) {
        let msg = "Nem sikerült betölteni a termet";
        try {
          const body = await res.json();
          if (body?.message) msg = body.message;
        } catch {}
        setError(msg);
        setLoadingHall(false);
        return;
      }

      const data: HallResponse = await res.json();

      if (!data?.hall?.id) {
        setError("Hibás terem adat (hiányzik a hall)");
        setLoadingHall(false);
        return;
      }

      setHall(data.hall);
      setChairs(Array.isArray(data.chairs) ? data.chairs : []);
      setLoadingHall(false);
    };

    loadHall();
  }, [showLogin]);

  const toggleSeat = (chair: Chair | undefined) => {
    if (!chair) return;
    if (chair.state) return; // foglalt széket nem lehet

    setSelectedSeats((prev) =>
      prev.includes(chair.id)
        ? prev.filter((id) => id !== chair.id)
        : [...prev, chair.id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020617] via-[#060b14] to-black text-slate-100">
      <header className="sticky top-0 z-50 h-14 border-b border-white/10 bg-[#060b14]/90 backdrop-blur">
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4">
          <Link className="tracking-wide items-center justify-center flex gap-2" href="/">
            <Image alt="Logo" className="object-contain" height={28} src="/favicon.ico" width={28} />
            <span className="text-lg font-extrabold tracking-wide text-cyan-300 flex gap-2">
              Loop
            </span>
          </Link>

          <nav className="flex items-center gap-5 text-sm">
            <a className="text-slate-200/90 hover:text-white transition" href="/movies">
              Movies
            </a>
            <a className="text-slate-200/90 hover:text-white transition" href="/screenings">
              Screenings
            </a>
            <a className="text-slate-200/90 hover:text-white transition" href="/forum">
              Forum
            </a>

            {showLogin ? (
              <div className="flex items-center gap-2">
                <a className="text-slate-200/90" href="/profile">
                  Hello, {name} !
                </a>
                <a
                  className="text-slate-200/90 hover:text-white transition cursor-pointer"
                  onClick={handleLogout}
                >
                  <LogOut size={25} />
                </a>
              </div>
            ) : (
              <a
                className="ml-2 rounded-full bg-blue-500 px-4 py-2 text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:brightness-110"
                href="/login"
              >
                Login
              </a>
            )}
          </nav>
        </div>
      </header>

      {!showLogin && (
        <div className="flex min-h-screen items-center justify-center bg-[#060b14] text-white">
          A jegyvásárláshoz kérjük jelentkezzen be
        </div>
      )}

      {showLogin && loadingHall && (
        <div className="flex min-h-screen items-center justify-center bg-[#060b14] text-white">
          Betöltés...
        </div>
      )}

      {showLogin && !loadingHall && error && (
        <div className="flex min-h-screen items-center justify-center bg-[#060b14] text-white">
          {error}
        </div>
      )}

      {showLogin && !loadingHall && !error && hall && (
        <div className="mx-auto max-w-6xl px-4 py-8 text-center">
          <h1 className="mb-6 text-center text-2xl font-bold">
            {hallNumberFromId(hall.id)}. terem – {hall.name}
          </h1>

          <CinemaScreen />

          <SeatGrid chairs={chairs} rows={hall.row} columns={hall.column} selectedSeats={selectedSeats} onSeatClick={toggleSeat}/>

          <div className="mt-10 flex flex-col items-center gap-4 text-sm text-white/80">

            <div className="flex items-center gap-8">

              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded bg-green-500" />
                <span>Szabad hely</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded bg-orange-500" />
                <span>Selected</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded bg-gray-400" />
                <span>Occupied</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}