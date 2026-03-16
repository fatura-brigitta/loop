"use client";

import { LogOut, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { profileImageUrl } from "@/lib/profileImage";

type User = {
  name: string;
  profile_image: string;
};

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

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

        document.documentElement.classList.remove("dark");
        if (data.theme === "dark") {
          document.documentElement.classList.add("dark");
        }

        if (data.theme) {
          localStorage.setItem("theme", data.theme);
        }
      } catch {
        setUser(null);
      }

      setLoading(false);
    };

    loadUser();
  }, [pathname]);

  useEffect(() => {
    const reload = async () => {
      const profileRes = await fetch("/api/profile", {
        credentials: "include",
        cache: "no-store",
      });

      if (!profileRes.ok) return;

      const data = await profileRes.json();

      setUser({
        name: data.name,
        profile_image: data.profile_image || "/profile/default.png",
      });
    };

    window.addEventListener("profile-updated", reload);
    return () => window.removeEventListener("profile-updated", reload);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleLogout = async () => {
    await fetch("/api/auth", { method: "DELETE" });

    setUser(null);
    setLoading(false);
    setMenuOpen(false);

    localStorage.removeItem("theme");
    document.documentElement.classList.add("dark");

    router.refresh();
    router.push("/");
  };

  const handleLogin = () => {
    setMenuOpen(false);
    router.push(`/login?redirect=${encodeURIComponent(pathname)}`);
  };

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname === path || pathname.startsWith(path + "/");
  };

  const navLinkClass = (active: boolean) =>
    `relative pb-1 transition cursor-pointer ${
      active
        ? "text-[var(--text-main2)] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-[var(--text-main2)]"
        : "text-[var(--text-soft)] hover:text-[var(--text-main2)]"
    }`;

  const mobileLinkClass = (active: boolean) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
      active
        ? "bg-[var(--text-main2)]/10 text-[var(--text-main2)]"
        : "text-[var(--text-soft)] hover:text-[var(--text-main2)] hover:bg-[var(--border-color)]/30"
    }`;

  return (
    <>
      {menuOpen && (
        <div
          className="fixed inset-0 z-[90] bg-black/60 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <header className="sticky top-0 z-50 h-16 border-b border-[var(--border-color)] bg-[var(--card-bg)] shadow-sm transition-colors" data-cy="navbar">
        <div className="absolute inset-0 bg-[var(--card-bg)] -z-10" />
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4">
          <Link className="flex items-center gap-2" data-cy="navbar-logo" href="/">
            <Image alt="Logo" height={40} src="/favicon.ico" width={40} />
            <span className="text-lg font-extrabold tracking-wide text-[var(--text-main2)]">
              Loop
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="rounded-lg border border-[var(--border-color)] p-2 md:hidden"
            aria-label="Menü megnyitása"
          >
            <Menu size={22} />
          </button>

          <nav className="hidden items-center gap-6 text-sm md:flex" data-cy="navbar-links">
            <Link className={navLinkClass(isActive("/movies"))} data-cy="navbar-movies" href="/movies">
              Filmek
            </Link>

            <Link
              className={navLinkClass(isActive("/screenings"))}
              data-cy="navbar-screenings"
              href="/screenings"
            >
              Vetítések
            </Link>

            <Link className={navLinkClass(isActive("/forum"))} data-cy="navbar-forum" href="/forum">
              Fórum
            </Link>

            {!loading &&
              (user ? (
                <div className="flex items-center gap-4">
                  <Link
                    className={`flex items-center gap-2 ${navLinkClass(isActive("/profile"))}`}
                    data-cy="navbar-profile"
                    href="/profile"
                  >
                    <div className="relative h-9 w-9 overflow-hidden rounded-full border border-[var(--border-color)]">
                      <Image
                        alt="Profil"
                        className="object-cover"
                        data-cy="navbar-profile-image"
                        fill
                        key={user.profile_image || "/profile/default.png"}
                        src={profileImageUrl(user.profile_image, 96)}
                        unoptimized
                      />
                    </div>
                    <span data-cy="navbar-username">{user.name}</span>
                  </Link>

                  <button
                    className="cursor-pointer text-[var(--text-soft)] transition hover:text-[var(--text-main2)]"
                    data-cy="navbar-logout"
                    onClick={handleLogout}
                    type="button"
                  >
                    <LogOut size={22} />
                  </button>
                </div>
              ) : (
                <button
                  className="cursor-pointer rounded-full bg-[var(--text-main2)] px-4 py-2 text-[var(--text-light)] shadow-lg shadow-[var(--text-main2)]/30 transition hover:-translate-y-0.5 hover:brightness-110"
                  data-cy="navbar-login"
                  onClick={handleLogin}
                  type="button"
                >
                  Bejelentkezés
                </button>
              ))}
          </nav>
        </div>
      </header>

      <aside
        className={`fixed inset-y-0 right-0 z-[100] flex w-[200px] flex-col border-l border-[var(--border-color)] bg-slate-950 p-6 shadow-xl transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-6 flex items-center justify-between border-b border-[var(--border-color)] pb-4">
          <span className="text-lg font-bold text-[var(--text-main2)]">Menü</span>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Menü bezárása"
            className="rounded-lg border border-[var(--border-color)] p-2"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex flex-col gap-1 text-sm">
          <Link
            href="/movies"
            onClick={() => setMenuOpen(false)}
            className={mobileLinkClass(isActive("/movies"))}
          >
            Filmek
          </Link>

          <Link
            href="/screenings"
            onClick={() => setMenuOpen(false)}
            className={mobileLinkClass(isActive("/screenings"))}
          >
            Vetítések
          </Link>

          <Link
            href="/forum"
            onClick={() => setMenuOpen(false)}
            className={mobileLinkClass(isActive("/forum"))}
          >
            Fórum
          </Link>

          {user && (
            <Link
              href="/profile"
              onClick={() => setMenuOpen(false)}
              className={mobileLinkClass(isActive("/profile"))}
            >
              <div className="relative h-9 w-9 overflow-hidden rounded-full border border-[var(--border-color)]">
                <Image
                  alt="Profil"
                  fill
                  className="object-cover"
                  src={profileImageUrl(user.profile_image, 96)}
                  unoptimized
                />
              </div>
              <span>{user.name}</span>
            </Link>
          )}
        </nav>

        <div className="mt-auto border-t border-[var(--border-color)] pt-6">
          {user ? (
            <button
              onClick={handleLogout}
              type="button"
              className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-[var(--text-soft)] transition hover:bg-[var(--border-color)]/30 hover:text-[var(--text-main2)]"
            >
              <LogOut size={20} />
              Kijelentkezés
            </button>
          ) : (
            <button
              onClick={handleLogin}
              type="button"
              className="w-full rounded-full bg-[var(--text-main2)] px-4 py-2 text-[var(--text-light)]"
            >
              Bejelentkezés
            </button>
          )}
        </div>
      </aside>
    </>
  );
}