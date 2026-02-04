"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LogOut } from "lucide-react";
import Image from "next/image";

export default function HomePage() {

  const router = useRouter();

  const [name, setUserName] = useState("");
  const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {
  const load = async () => {
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

  load();
}, []);


  const handleLogout = async () => {
  await fetch("/api/logout", { method: "POST" });

  setUserName("");
  setShowLogin(false);

  router.refresh();
};


  return (
    <div className="min-h-screen bg-[#060b14] text-slate-100">
      <header className="sticky top-0 z-50 h-14 border-b border-white/10 bg-[#060b14]/90 backdrop-blur">
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4">
          <div >
            
            <Link
              href="/"
              className="tracking-wide items-center justify-center flex gap-2"
            >
              <Image
                src="/favicon.ico"
                alt="Logo"
                width={28}
                height={28}
                className="object-contain"
              />

              <span className="text-lg font-extrabold tracking-wide text-cyan-300 flex gap-2">
                Loop
              </span>
            </Link>
          </div>
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
              <div>
                <a className="text-slate-200/90 text-white" href="/profile">
                  Hello, {name} !
                </a>
                <span> </span>
                <a className="text-slate-200/90 hover:text-white transition" onClick={handleLogout}>
                <LogOut size={25}/>
                </a>
              </div>
            ) : (
              <a
              className="ml-2 rounded-full bg-blue-500 px-4 py-2 text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:brightness-110"
              href="/login"
            >Login</a>)}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">

      </main>
    </div>
  );
}
