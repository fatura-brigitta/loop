"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type PaymentData = {
  sessionId: string;
  movieTitle: string;
  hallName: string;
  start: string;
  seats: { row: number; column: number }[];
  totalPrice: number;
};

export default function PaymentPage() {
  const router = useRouter();

  const [data, setData] = useState<PaymentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [paying, setPaying] = useState(false);
  const [error, setError] = useState("");

  // 🔹 Aktív payment session lekérése (cookie alapján)
  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/payment/session", {
          credentials: "include",
          cache: "no-store",
        });

        if (!res.ok) {
          setError("No active payment session");
          setLoading(false);
          return;
        }

        const json = await res.json();
        setData(json);
        setLoading(false);
      } catch {
        setError("Payment page error");
        setLoading(false);
      }
    };

    load();
  }, []);

  // 🔹 Fizetés szimuláció (fake bank)
  const simulatePayment = async () => {
    if (!data) return;

    setPaying(true);

    // 2 másodperces "banki feldolgozás"
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const res = await fetch("/api/payment/confirm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ paymentId: data.sessionId }),
    });

    if (!res.ok) {
      setError("Payment failed");
      setPaying(false);
      return;
    }

    // sikeres fizetés → profil oldal
    router.push("/profile");
  };

  /* ================= UI STATES ================= */

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#060b14] text-white">
        Payment loading...
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

  /* ================= MAIN PAGE ================= */

  return (
    <div className="min-h-screen bg-[#060b14] text-white flex items-center justify-center">
      <div className="w-full max-w-xl rounded-xl bg-[#0b1220] p-8 shadow-2xl">

        <h1 className="text-2xl font-bold mb-6 text-center text-cyan-300">
          Payment
        </h1>

        <div className="space-y-3 text-sm">

          <div className="flex justify-between">
            <span>Movie</span>
            <span className="font-semibold">{data.movieTitle}</span>
          </div>

          <div className="flex justify-between">
            <span>Hall</span>
            <span>{data.hallName}</span>
          </div>

          <div className="flex justify-between">
            <span>Date</span>
            <span>{new Date(data.start).toLocaleString()}</span>
          </div>

          <div>
            <span className="block mb-1">Seats</span>
            <div className="text-cyan-300">
              {data.seats.map((s, i) => (
                <div key={i}>
                  Row {s.row} Seat {s.column}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between text-lg mt-4 border-t border-white/10 pt-4">
            <span>Total</span>
            <span className="text-green-400 font-bold">
              {data.totalPrice} Ft
            </span>
          </div>
        </div>

        <button
          onClick={simulatePayment}
          disabled={paying}
          className="mt-6 w-full rounded-lg bg-green-500 py-3 font-bold hover:bg-green-600 transition disabled:opacity-50"
        >
          {paying ? "Processing payment..." : "Pay now"}
        </button>

      </div>
    </div>
  );
}