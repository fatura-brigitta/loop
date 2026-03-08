"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type PaymentData = {
  sessionId: string;
  movieTitle: string;
  hallName: string;
  start: string;
  screeningType: string;
  ticketType: string; 
  seats: { row: number; column: number }[];
  totalPrice: number;
};

const formatPrice = (cents?: number) => {
  if (!cents) return "0.00";
  return (cents / 100).toFixed(2);
};

export default function PaymentPage() {
  const router = useRouter();

  const [data, setData] = useState<PaymentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [paying, setPaying] = useState(false);
  const [error, setError] = useState("");
  const [price, setPrice] = useState<number | null>(null);
  const [ticketTypes, setTicketTypes] = useState<Record<number, string>>({});
  const [seatPrices, setSeatPrices] = useState<Record<number, number>>({});

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/payment?action=session", {
          credentials: "include",
          cache: "no-store",
        });

        if (!res.ok) {
          setError("Nincs fizetési adat");
          setLoading(false);
          return;
        }

        const json = await res.json();
        setData(json);
        setPrice(json.totalPrice)
        setLoading(false);
      } catch {
        setError("Fizetési adatok betöltése sikertelen");
        setLoading(false);
      }
    };

    load();
  }, []);

  useEffect(() => {
    if (!data) return;

    const initial: Record<number, string> = {};
    data.seats.forEach((_, i) => {
      initial[i] = data.ticketType || "Normál";
    });

    setTicketTypes(initial);

    const loadSeatPrices = async () => {
      const prices: Record<number, number> = {};

      for (let i = 0; i < data.seats.length; i++) {
        const res = await fetch("/api/payment?action=price", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ticketTypes: [initial[i]],
          }),
        });

        const json = await res.json();
        if (res.ok) prices[i] = json.totalPrice;
      }

      setSeatPrices(prices);
    };

    loadSeatPrices();
  }, [data]);

  const recalcPrice = async (types: Record<number, string>) => {
    const res = await fetch("/api/payment?action=price", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ticketTypes: Object.values(types),
      }),
    });

    const json = await res.json();

    if (res.ok) {
      setPrice(json.totalPrice);
    }
  };

  const getSeatPrice = async (type: string) => {
    const res = await fetch("/api/payment?action=price", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ticketTypes: [type],
      }),
    });

    const json = await res.json();
    if (res.ok) return json.totalPrice;
    return 0;
  };

  // const simulatePayment = async () => {
  //   if (!data) return;

  //   setPaying(true);

  //   await new Promise((resolve) => setTimeout(resolve, 2000));

  //   const res = await fetch("/api/payment?action=confirm", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       ticketTypes: Object.values(ticketTypes),
  //     }),
  //   });

  //   if (!res.ok) {
  //     setError("Fizetés sikertelen");
  //     setPaying(false);
  //     return;
  //   }

  //   router.push("/profile");
  // };

  const startPayment = async () => {

  const res = await fetch("/api/payment/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ticketTypes: Object.values(ticketTypes)
      })
    });

    const json = await res.json();

    window.location.href = json.url;
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#060b14] text-white">
        Fizetési adatok betöltése...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#060b14] text-red-400">
        {error}
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#060b14] text-white" data-cy="payment-page">
      <div className="w-full max-w-xl rounded-xl bg-[#0b1220] p-8 shadow-2xl" data-cy="payment-card">
        <h1 className="mb-6 text-center text-2xl font-bold text-cyan-300">Fizetés</h1>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span>Film</span>
            <span className="font-semibold" data-cy="payment-movie">{data.movieTitle}</span>
          </div>

          <div className="flex justify-between">
            <span>Terem</span>
            <span data-cy="payment-hall">{data.hallName}</span>
          </div>

          <div className="flex justify-between">
            <span>Vetítés típusa</span>
            <span className="text-white font-semibold" data-cy="payment-screening-type">
              {data.screeningType}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Kezdés</span>
            <span data-cy="payment-start">{new Date(data.start).toLocaleString()}</span>
          </div>

          <div>
            <span className="mb-1 block">Székek</span>
            <div className="text-cyan-300">
              <div className="space-y-3" data-cy="payment-tickets">
                {data.seats.map((s, i) => {
                  const type = ticketTypes[i] || "Normál";

                  return (
                    <div className="flex items-center justify-between rounded-lg bg-black/30 p-3"
                      data-cy="payment-ticket"
                      data-seat-index={i}
                      key={i}
                    >
                      <div className="flex flex-col">
                        <div className="text-cyan-300 font-semibold" data-cy="ticket-number">
                          {i + 1}. jegy
                        </div>

                        <div className="text-white/80 text-sm" data-cy="ticket-seat">
                          Sor {s.row} Szék {s.column}
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-green-400 font-semibold text-sm" data-cy="ticket-price">
                          {seatPrices[i] ? `${formatPrice(seatPrices[i])} €` : ""}
                        </span>
                        <select
                          className="w-[110px] rounded-lg bg-[#060b14] border border-white/20 p-2 cursor-pointer"
                          data-cy="ticket-type-select"
                          data-seat-index={i}
                          value={type}
                          onChange={async (e) => {
                            const newType = e.target.value;

                            const updated = {
                              ...ticketTypes,
                              [i]: newType,
                            };

                            setTicketTypes(updated);
                            recalcPrice(updated);

                            const seatPrice = await getSeatPrice(newType);

                            setSeatPrices((prev) => ({
                              ...prev,
                              [i]: seatPrice,
                            }));

                            setTicketTypes(updated);
                            recalcPrice(updated);
                          }}
                        >
                          <option value="Normál">Normál</option>
                          <option value="Diák">Diák</option>
                          <option value="Senior">Senior</option>
                          <option value="Gyerek">Gyerek</option>
                        </select>

                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-between border-t border-white/10 pt-4 text-lg">
            <span>Összesen</span>
            <span className="font-bold text-green-400" data-cy="payment-total">
              {formatPrice(price ?? data.totalPrice)} €
            </span>
          </div>
        </div>

        <button className="mt-6 w-full rounded-lg bg-green-500 py-3 font-bold transition hover:bg-green-600 disabled:opacity-50 cursor-pointer"
          data-cy="payment-button"
          disabled={paying}
          onClick={startPayment}
        >
          {paying ? "Fizetés feldolgozása..." : "Fizetés"}
        </button>
      </div>
    </div>
  );
}