"use client";

import Link from "next/link";
import { LogOut, Film, Calendar, MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminPage() {
    const router = useRouter();
    const [name, setUserName] = useState("");
    const [showLogin, setShowLogin] = useState(true);

    const handleLogout = async () => {
        await fetch("/api/adminLogout", { method: "POST" });

        setUserName("");
        setShowLogin(false);

        router.replace("/adminLogin");
    };

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-900 border-r border-white/10 p-6 flex flex-col">

      {/* Logo / title */}
      <div className="mb-10 text-white text-xl font-semibold">
        Admin Panel
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-4 text-sm flex-1">

        <Link
          href="/movies"
          className="flex items-center gap-3 text-slate-300 hover:text-white transition"
        >
          <Film size={18} />
          Movies
        </Link>

        <Link
          href="/screenings"
          className="flex items-center gap-3 text-slate-300 hover:text-white transition"
        >
          <Calendar size={18} />
          Screenings
        </Link>

        <Link
          href="/forum"
          className="flex items-center gap-3 text-slate-300 hover:text-white transition"
        >
          <MessageSquare size={18} />
          Forum
        </Link>
      </nav>

      {/* Bottom user section */}
      <div className="border-t border-white/10 pt-4 text-slate-300 text-sm flex flex-col items-end">

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 hover:text-white transition"
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>
    </aside>
  );
}

