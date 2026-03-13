"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function PaymentSuccessPage() {

  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    const confirmPayment = async () => {

      try {

        const res = await fetch("/api/payment?action=session", {
          credentials: "include",
          cache: "no-store",
        });

        if (!res.ok) {
          setError("Nem található fizetési munkamenet");
          setLoading(false);
          return;
        }

        const session = await res.json();

        const ticketTypes = session.seats.map(() => "Normál");

        const confirm = await fetch("/api/payment?action=confirm", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ticketTypes,
          }),
        });

        if (!confirm.ok) {
          setError("Nem sikerült véglegesíteni a fizetést");
          setLoading(false);
          return;
        }

        const data = await confirm.json();

        if (data.rankUp) {
          sessionStorage.setItem("rankUp", JSON.stringify(data.rankUp));
        }

        router.push("/profile");

      } catch {
        setError("Fizetési hiba történt");
        setLoading(false);
      }

    };

    confirmPayment();

  }, [router]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[var(--bg-main)] text-[var(--text-main)]" data-cy="payment-success-loading">
        Fizetés feldolgozása...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[var(--bg-main)] text-red-400" data-cy="payment-success-error">
        {error}
      </div>
    );
  }

  return null;
}