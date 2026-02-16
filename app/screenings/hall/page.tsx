"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
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
              if (chair.state) color = "bg-gray-400";
              else if (selectedSeats.includes(chair.id))
                color = "bg-cyan-300";
              else color = "bg-green-500 hover:bg-green-400";
            }

            return (
              <div
                key={c}
                onClick={() => onSeatClick(chair)}
                title={`Row ${r + 1}, Seat ${c + 1}`}
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

  const [seats, setSeats] = useState<Chair[]>([]);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const MAX_SEATS = 5;
  
  const [hall, setHall] = useState<Hall | null>(null);
  const [loadingHall, setLoadingHall] = useState(false);

  const [error, setError] = useState<string>("");
  const [seatError, setSeatError] = useState("");

  const errorTimerRef = useRef<number | null>(null);
  const successTimerRef = useRef<number | null>(null);

  const [successMessage, setSuccessMsg] = useState("");

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
    setSeats([]);
    setError("");
    router.refresh();
  };

  useEffect(() => {
    // ha nincs login, reseteljük a terem állapotot
    if (!showLogin) {
      setHall(null);
      setSeats([]);
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
        let msg = "Failed to load the hall";
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
        setError("Invalid hall data (missing hall id)");
        setLoadingHall(false);
        return;
      }

      setHall(data.hall);
      setSeats(Array.isArray(data.chairs) ? data.chairs : []);
      setLoadingHall(false);
    };

    loadHall();
  }, [showLogin]);

  useEffect(() => {
  return () => {
    if (errorTimerRef.current) {
      window.clearTimeout(errorTimerRef.current);
    }
  };
}, []);

  //több szék foglalva mint a maximum
  const showSeatError = (msg: string) => {
    setSeatError(msg);

    if (errorTimerRef.current) {
      window.clearTimeout(errorTimerRef.current);
    }

    errorTimerRef.current = window.setTimeout(() => {
      setSeatError("");
      errorTimerRef.current = null;
    }, 5000);
  };

  //sikeres foglalás
  const showSuccess = (msg: string) => {
    setSuccessMsg(msg);

    if (successTimerRef.current) {
      window.clearTimeout(successTimerRef.current);
    }

    successTimerRef.current = window.setTimeout(() => {
      setSuccessMsg("");
      successTimerRef.current = null;
    }, 4000);
  };

  // székre való kattintás(állapot jelzése)
  const toggleSeat = (chair: Chair | undefined) => {
    if (!chair) return;
    if (chair.state) return;

    if (errorTimerRef.current) {
      window.clearTimeout(errorTimerRef.current);
      errorTimerRef.current = null;
    }
    setSeatError("");

    setSelectedSeats((prev) => {
      if (prev.includes(chair.id)) {
        return prev.filter((id) => id !== chair.id);
      }

      if (prev.length >= MAX_SEATS) {
        showSeatError("You can reserve a maximum of 5 seats at a time.");
        return prev;
      }

      return [...prev, chair.id];
    });
  };

  const selectedChairs = seats.filter((c) => selectedSeats.includes(c.id));

  const groupedSeats: Record<number, number[]> = {};

  // székek csoportosítva összegezve
  selectedChairs.forEach((chair) => {
    if (!groupedSeats[chair.row]) {
      groupedSeats[chair.row] = [];
    }
    groupedSeats[chair.row].push(chair.column);
  });

  Object.keys(groupedSeats).forEach((row) => {
    groupedSeats[Number(row)].sort((a, b) => a - b);
  });

  // szék foglalása
  const reserveSeats = async () => {
    if (selectedSeats.length === 0) return;

    const res = await fetch("/api/chairs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        seatIds: selectedSeats,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      showSeatError(data.message || "Reservation failed");
      return;
    }

    setSelectedSeats([]);
    showSuccess("The seat reservation was successful!");
    
    const hallRes = await fetch("/api/screenings/hall", {
      cache: "no-store",
      credentials: "include",
    });

    const hallData: HallResponse = await hallRes.json();
    setSeats(hallData.chairs);
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
          To view the hall, please log in.
        </div>
      )}

      {showLogin && loadingHall && (
        <div className="flex min-h-screen items-center justify-center bg-[#060b14] text-white">
          Loading...
        </div>
      )}

      {showLogin && !loadingHall && error && (
        <div className="flex min-h-screen items-center justify-center bg-[#060b14] text-white">
          {error}
        </div>
      )}

      {showLogin && !loadingHall && !error && hall && (
        <div className="mx-auto max-w-6xl px-4 py-8 pb-40 text-center">
          <h1 className="mb-6 text-center text-2xl font-bold">
            {hallNumberFromId(hall.id)}. hall – {hall.name}
          </h1>

          <CinemaScreen />

          <SeatGrid chairs={seats} rows={hall.row} columns={hall.column} selectedSeats={selectedSeats} onSeatClick={toggleSeat}/>

          <div className="mt-10 flex flex-col items-center gap-4 text-sm text-white/80">

            <div className="flex items-center gap-8">

              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded bg-green-500" />
                <span>Szabad hely</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded bg-cyan-300" />
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

      {seatError && (
        <div className="fixed bottom-28 left-1/2 z-50 -translate-x-1/2 rounded-lg bg-red-600 px-6 py-3 text-white shadow-2xl animate-pulse">
          {seatError}
        </div>
      )}

      {successMessage && (
        <div className="fixed bottom-44 left-1/2 z-50 -translate-x-1/2 rounded-lg bg-green-600 px-6 py-3 text-white shadow-2xl">
          {successMessage}
        </div>
      )}

      {selectedChairs.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-[#020617]/95 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-white">

            <div className="flex flex-col text-left">
              <span className="text-sm text-white/60">Selected seats</span>

              <div className="mt-1 text-sm font-medium">
                {Object.entries(groupedSeats)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([row, cols]) => {
                    const seatWord = cols.length === 1 ? "SEAT" : "SEATS";

                    return (
                      <div key={row}>
                        ROW: {row} {seatWord}:{" "}
                        <span className="text-cyan-300">{cols.join(", ")}</span>
                      </div>
                    );
                  })}
              </div>
            </div>

            <div className="text-right flex flex-col items-end gap-2">

              <div className="text-orange-400 text-2xl font-bold">
                🎟 {selectedChairs.length}
              </div>

              <button
                onClick={reserveSeats}
                className="rounded-lg bg-blue-500 px-5 py-2 font-semibold text-white transition hover:bg-blue-600"
              >
                Reserve seats
              </button>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}