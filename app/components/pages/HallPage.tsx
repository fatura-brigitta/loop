"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

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
            const chair = chairs.find((ch) => ch.row === r + 1 && ch.column === c + 1);

            let color = "bg-slate-700/40";

            if (chair) {
              if (chair.state) color = "bg-gray-400";
              else if (selectedSeats.includes(chair.id)) color = "bg-cyan-300";
              else color = "bg-green-500 hover:bg-green-400";
            }

            return (
              <div className={`h-8 w-8 rounded transition-all duration-150 ${color} ${chair && !chair.state ? "cursor-pointer hover:scale-110" : ""} `}
                data-cy="hall-seat"
                data-seat-col={c + 1}
                data-seat-id={chair?.id}
                data-seat-row={r + 1}
                data-seat-state={chair?.state ? "reserved" : "free"}
                key={c}
                title={`Sor ${r + 1}, Szék ${c + 1}`}
                onClick={() => onSeatClick(chair)}
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
  const MAX_SEATS = 10;

  const [hall, setHall] = useState<Hall | null>(null);
  const [loadingHall, setLoadingHall] = useState(false);

  const [error, setError] = useState<string>("");
  const [seatError, setSeatError] = useState("");

  const errorTimerRef = useRef<number | null>(null);

  const [successMessage, setSuccessMsg] = useState("");

  useEffect(() => {
    const loadUser = async () => {
      const userRes = await fetch("/api/auth", { cache: "no-store" });

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

  useEffect(() => {
    if (!showLogin) return;

    const loadHall = async () => {
      setLoadingHall(true);
      setError("");

      try {
        const res = await fetch("/api/screenings", {
          method: "PUT",
          cache: "no-store",
          credentials: "include",
        });

        if (!res.ok) {
          let msg = "Hiba a terem betöltésekor!";
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
          setError("Érvénytelen terem adatok!");
          setLoadingHall(false);
          return;
        }

        setHall(data.hall);
        setSeats(data.chairs ?? []);
      } catch {
        setError("Hálózati hiba a terem betöltése során!");
      }

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
        showSeatError("Maximum 10 széket foglalhatsz egyszerre.");
        return prev;
      }

      return [...prev, chair.id];
    });
  };

  const selectedChairs = seats.filter((c) => selectedSeats.includes(c.id));

  const groupedSeats: Record<number, number[]> = {};

  selectedChairs.forEach((chair) => {
    if (!groupedSeats[chair.row]) {
      groupedSeats[chair.row] = [];
    }
    groupedSeats[chair.row].push(chair.column);
  });

  Object.keys(groupedSeats).forEach((row) => {
    groupedSeats[Number(row)].sort((a, b) => a - b);
  });

  const reserveSeats = async () => {
    if (selectedSeats.length === 0) return;

    const res = await fetch("/api/payment?action=create", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        seatIds: selectedSeats,
      }),
    });

    if (!res.ok) {
      showSeatError("Could not start payment");
      return;
    }

    router.push("/payment");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020617] via-[#060b14] to-black text-slate-100" data-cy="hall-page">
      {!showLogin && (
        <div className="flex min-h-screen items-center justify-center bg-[#060b14] text-white" data-cy="hall-login-required">
          A terem megtekintéséhez kérjük jelentkezzen be.
        </div>
      )}

      {showLogin && !loadingHall && error && (
        <div className="flex min-h-screen items-center justify-center bg-[#060b14] text-white" data-cy="hall-error">
          {error}
        </div>
      )}

      {showLogin && !loadingHall && !error && hall && (
        <div className="mx-auto max-w-6xl px-4 py-8 pb-40 text-center" data-cy="hall-container">
          <h1 className="mb-6 text-center text-2xl font-bold" data-cy="hall-name">{hall.name}</h1>

          <CinemaScreen />

          <div data-cy="hall-seat-grid">
            <SeatGrid
              chairs={seats}
              columns={hall.column}
              rows={hall.row}
              selectedSeats={selectedSeats}
              onSeatClick={toggleSeat}
            />
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 text-sm text-white/80" data-cy="hall-seat-legend">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded bg-green-500" />
                <span>Szabad hely</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded bg-cyan-300" />
                <span>Kiválasztott</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded bg-gray-400" />
                <span>Foglalt</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {seatError && (
        <div className="fixed bottom-28 left-1/2 z-50 -translate-x-1/2 animate-pulse rounded-lg bg-red-600 px-6 py-3 text-white shadow-2xl" data-cy="hall-seat-error">
          {seatError}
        </div>
      )}

      {successMessage && (
        <div className="fixed bottom-44 left-1/2 z-50 -translate-x-1/2 rounded-lg bg-green-600 px-6 py-3 text-white shadow-2xl" data-cy="hall-success">
          {successMessage}
        </div>
      )}

      {selectedChairs.length > 0 && (
        <div className="fixed right-0 bottom-0 left-0 z-40 border-t border-white/10 bg-[#020617]/95 backdrop-blur" data-cy="hall-selected-panel">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-white">
            <div className="flex flex-col text-left">
              <span className="text-sm text-white/60" data-cy="hall-selected-title">Kiválasztott székek</span>

              <div className="mt-1 text-sm font-medium" data-cy="hall-selected-seats">
                {Object.entries(groupedSeats)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([row, cols]) => {
                    const seatWord = cols.length === 1 ? "SZÉK" : "SZÉKEK";

                    return (
                      <div className="text-cyan-300" key={row}>
                        SOR: {row} {seatWord}:{" "}
                        <span className="text-cyan-300">{cols.join(", ")}</span>
                      </div>
                    );
                  })}
              </div>
            </div>

            <div className="flex flex-col items-end gap-2 text-right">
              <div className="text-2xl font-bold text-orange-400" data-cy="hall-seat-count">🎟 {selectedChairs.length}</div>

              <button className="cursor-pointer rounded-lg bg-blue-500 px-5 py-2 font-semibold text-white transition hover:bg-blue-600"
                data-cy="hall-reserve-button"
                onClick={reserveSeats}
              >
                Székek foglalása
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}