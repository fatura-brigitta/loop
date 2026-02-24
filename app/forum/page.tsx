"use client";
import Navbar from "@/app/components/navbar";



export default function ForumPage() {
  return (
    <div className="min-h-screen bg-[#060b14] text-slate-100">
      <Navbar/>
        <div className="mx-auto max-w-6xl p-4 text-center">
            <h1 className="mb-6 text-2xl font-bold">Fórum</h1>
            <p className="text-lg text-white/80">
                Ez a fórum még fejlesztés alatt áll. Kérjük, térjen vissza később!
            </p>
        </div>
    </div>
  );
}