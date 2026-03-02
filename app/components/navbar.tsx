"use client";

import { LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type User = {
  name: string;
  profile_image: string;
};

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {

        const authRes = await fetch("/api/auth", {
          credentials: "include",
          cache: "no-store",
        });

        if (!authRes.ok) {
          setUser(null);
          setLoading(false);
          return;
        }

        const profileRes = await fetch("/api/profile", {
          credentials: "include",
          cache: "no-store",
        });

        if (!profileRes.ok) {
          setUser(null);
          setLoading(false);
          return;
        }

        const data = await profileRes.json();

        setUser({
          name: data.name,
          profile_image: data.profile_image || "/profile/default.png",
        });

      } catch {
        setUser(null);
      }

      setLoading(false);
    };

    loadUser();
  }, [pathname]);

  const handleLogout = async () => {
    await fetch("/api/auth", { method: "DELETE" });
    router.push("/login");
    router.refresh();
  };

  const handleLogin = () => {
    router.push(`/login?redirect=${encodeURIComponent(pathname)}`);
  };

  return (
    <header className="sticky top-0 z-50 h-14 border-b border-white/10 bg-[#060b14]/90 backdrop-blur">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4">

        <Link className="flex items-center gap-2" href="/">
          <Image alt="Logo" height={28} src="/favicon.ico" width={28} />
          <span className="text-lg font-extrabold tracking-wide text-cyan-300">
            Loop
          </span>
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <Link className="hover:text-white" href="/movies">
            Filmek
          </Link>

          <Link className="hover:text-white" href="/screenings">
            Vetítések
          </Link>

          <Link className="hover:text-white" href="/forum">
            Fórum
          </Link>

          {!loading && (
            <>
              {user ? (
                <div className="flex items-center gap-3">

                  <Link className="flex items-center gap-2 group" href="/profile">

                    <div className="relative h-9 w-9 overflow-hidden rounded-full border border-white/20">
                      <Image
                        alt="Profil"
                        className="object-cover group-hover:scale-110 transition"
                        fill
                        src={user.profile_image}
                      />
                    </div>

                    <span className="text-slate-200/90 group-hover:text-white">
                      {user.name}
                    </span>
                  </Link>

                  <button
                    className="text-slate-200/90 hover:text-white transition cursor-pointer"
                    onClick={handleLogout}
                  >
                    <LogOut size={22} />
                  </button>
                </div>
              ) : (
                <button
                  className="rounded-full bg-blue-500 px-4 py-2 text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:brightness-110 cursor-pointer"
                  onClick={handleLogin}
                >
                  Bejelentkezés
                </button>
              )}
            </>
          )}
        </nav>
      </div>
    </header>
  );
}