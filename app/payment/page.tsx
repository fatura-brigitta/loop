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

export default function PaymentPage() {
  const router = useRouter();

  const [data, setData] = useState<PaymentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [paying, setPaying] = useState(false);
  const [error, setError] = useState("");
  const [ticketType, setTicketType] = useState("Normál");
  const [price, setPrice] = useState<number | null>(null);

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
        setLoading(false);
      } catch {
        setError("Fizetési adatok betöltése sikertelen");
        setLoading(false);
      }
    };

    load();
  }, []);

  const simulatePayment = async () => {
    if (!data) return;

    setPaying(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const res = await fetch("/api/payment?action=confirm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        paymentId: data.sessionId,
        ticketType,
      }),
    });

    if (!res.ok) {
      setError("Fizetés sikertelen");
      setPaying(false);
      return;
    }

    // sikeres fizetés → profil oldal
    router.push("/profile");
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
    <div className="flex min-h-screen items-center justify-center bg-[#060b14] text-white">
      <div className="w-full max-w-xl rounded-xl bg-[#0b1220] p-8 shadow-2xl">
        <h1 className="mb-6 text-center text-2xl font-bold text-cyan-300">Fizetés</h1>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span>Film</span>
            <span className="font-semibold">{data.movieTitle}</span>
          </div>

          <div className="flex justify-between">
            <span>Terem</span>
            <span>{data.hallName}</span>
          </div>

          <div className="flex justify-between">
            <span>Vetítés típusa</span>
            <span className="text-white font-semibold">
              {data.screeningType}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Kezdés</span>
            <span>{new Date(data.start).toLocaleString()}</span>
          </div>

          <div>
            <span className="mb-1 block">Székek</span>
            <div className="text-cyan-300">
              {data.seats.map((s, i) => (
                <div key={i}>
                  Sor {s.row} Szék {s.column}
                </div>
              ))}
            </div>

            <div className="mt-4">
              <span className="block mb-2">Jegytípus</span>

              <select
                className="w-full rounded-lg bg-[#060b14] border border-white/20 p-2"
                value={ticketType}
                onChange={async (e) => {
                  const newType = e.target.value;
                  setTicketType(newType);

                  const res = await fetch("/api/payment?action=price", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ ticketType: newType }),
                  });

                  const json = await res.json();
                  if (res.ok) setPrice(json.totalPrice);
                }}
              >
                <option value="Normál">Normál</option>
                <option value="Diák">Diák</option>
                <option value="Senior">Senior</option>
                <option value="Gyerek">Gyerek</option>
              </select>
            </div>
          </div>

          <div className="mt-4 flex justify-between border-t border-white/10 pt-4 text-lg">
            <span>Összesen</span>
            <span className="font-bold text-green-400">{(price ?? data.totalPrice)} Ft</span>
          </div>
        </div>

        <button
          className="mt-6 w-full rounded-lg bg-green-500 py-3 font-bold transition hover:bg-green-600 disabled:opacity-50"
          disabled={paying}
          onClick={simulatePayment}
        >
          {paying ? "Processing payment..." : "Pay now"}
        </button>
      </div>
    </div>
  );
}
