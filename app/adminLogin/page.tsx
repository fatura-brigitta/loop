"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function AdminLoginPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/adminLogin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Unknown error occurred during login");
        return;
      }

      router.push("/admin");
    } catch (err) {
      setError("Network error occurred during login");
    }
  };

  //login felület
  return (
    <div className="min-h-screen bg-[#060b14] text-slate-100">
      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex min-h-screen items-center justify-center  bg-[#060b14]/90">
          <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">

            <h1 className="mb-6 text-center text-2xl font-bold text-gray-500">
              Admin Login
            </h1>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm text-gray-500">
                  Admin
                </label>

                <input
                  className="mt-1 w-full text-black rounded border px-3 py-2 border-[#060b14]/90"
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm text-gray-500">
                  Password
                </label>

                <div className="relative mt-1">
                  <input
                    className="w-full rounded text-black border px-3 py-2 pr-10  border-[#060b14]/90"
                    required
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <button
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                    type="button"
                    onClick={() => setShowPassword(prev => !prev)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {error && (
                <p className="text-sm text-red-500 bg-red-100 p-2 rounded h-12 flex items-center">
                  {error}
                </p>
              )}

              <button
                className="w-full rounded bg-black py-2 text-white hover:bg-gray-800 cursor-pointer"
                type="submit"
              >
                Login
              </button>

            </form>
          </div>
        </div>
      </main>
    </div>
  );
}