// app/admin/page.tsx
"use client";

import Link from "next/link";
import { LogOut, Film, Calendar, MessageSquare, Building2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type Movie = {
  id: string;
  title: string;
  director: string | null;
  actors: string | null;
  playtime: number;
  language: string | null;
  trailer: string | null;
  poster: string | null;
  genre: string | null;
  review: number | null;
  description: string | null;
  onscreen: boolean;
};

type Hall = {
  id: string;
  name: string;
  row: number;
  column: number;
};

type Screening = {
  id: string;
  hall_id: string;
  movie_id: string;
  start: string;
  end: string;
  screening_type_id: string;

  movies?: Movie;
  halls?: Hall;
  screening_types?: ScreeningType;
};


type ScreeningType = {
  id: string;
  type: string;
  percent: number;
};


type Tab = "movies" | "halls" | "screenings" | "screening_types";

async function api(entity: Tab, method: string, body?: any) {
  const res = await fetch(`/api/admin?entity=${entity}`, {
    method,
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data?.error || `Hiba (${res.status})`);
  }
  return data;
}

export default function AdminPage() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("movies");

  const [movies, setMovies] = useState<Movie[]>([]);
  const [halls, setHalls] = useState<Hall[]>([]);
  const [screenings, setScreenings] = useState<Screening[]>([]);
  const [screeningTypes, setScreeningTypes] = useState<ScreeningType[]>([]);


  const [err, setErr] = useState<string>("");

  // forms
  const [mTitle, setMTitle] = useState("");
  const [mPlaytime, setMPlaytime] = useState<number>(120);
  const [mOnscreen, setMOnscreen] = useState<boolean>(true);

  const [hName, setHName] = useState("");
  const [hRow, setHRow] = useState<number>(5);
  const [hCol, setHCol] = useState<number>(8);

  const [sMovieId, setSMovieId] = useState<string>("");
  const [sHallId, setSHallId] = useState<string>("");
  const [sStartLocal, setSStartLocal] = useState<string>("");

  const [editingId, setEditingId] = useState<string | null>(null);

  const [movieForm, setMovieForm] = useState({
    title: "",
    director: "",
    actors: "",
    playtime: 0,
    language: "",
    trailer: "",
    poster: "",
    genre: "",
    review: 0,
    description: "",
    onscreen: false,
  });

  function resetForm() {
    setEditingId(null);
    setMovieForm({
      title: "",
      director: "",
      actors: "",
      playtime: 0,
      language: "",
      trailer: "",
      poster: "",
      genre: "",
      review: 0,
      description: "",
      onscreen: false,
    });
  }

  const [search, setSearch] = useState("");
  const filteredMovies = movies.filter((m) =>
    m.title?.toLowerCase().includes(search.toLowerCase())
  );

  const [hallEditingId, setHallEditingId] = useState<string | null>(null);
  const [hallForm, setHallForm] = useState({
    name: "",
    row: 0,
    column: 0,
  });

  function resetHallForm() {
    setHallEditingId(null);
    setHallForm({
      name: "",
      row: 0,
      column: 0,
    });
  }

  const [screeningForm, setScreeningForm] = useState({
    movie_id: "",
    hall_id: "",
    screening_type_id: "",
    start: "",
  });

  const handleLogout = async () => {
    await fetch("/api/adminLogout", { method: "POST" });
    router.replace("/adminLogin");
  };

  async function loadAll() {
    setErr("");
    try {
      const [ms, hs, ss, st] = await Promise.all([
        api("movies", "GET"),
        api("halls", "GET"),
        api("screenings", "GET"),
        api("screening_types", "GET")
      ]);
      setMovies(ms);
      setHalls(hs);
      setScreenings(ss);
      setScreeningTypes(st);
    } catch (e: any) {
      setErr(e.message || "Betöltési hiba");
    }
  }

  useEffect(() => {
    loadAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // default dropdown values
  useEffect(() => {
    if (!sMovieId && movies.length) setSMovieId(movies[0].id);
    if (!sHallId && halls.length) setSHallId(halls[0].id);
  }, [movies, halls, sMovieId, sHallId]);

  const selectedMovie = useMemo(
    () => movies.find(m => m.id === sMovieId),
    [movies, sMovieId]
  );

  const formatDt = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleString();
  };

  // NOTE: datetime-local -> Date
  // A böngésző helyi időt ad, JS Date ezt helyi időnek veszi -> ISO-ra alakítjuk küldés előtt.
  const localToISO = (local: string) => {
    // local: "2026-02-18T14:30"
    const d = new Date(local);
    return d.toISOString();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-900 border-r border-white/10 p-6 flex flex-col">
        <div className="mb-10 text-white text-xl font-semibold">Admin Panel</div>

        <nav className="flex flex-col gap-2 text-sm flex-1">
          <button
            onClick={() => setTab("movies")}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition cursor-pointer ${
              tab === "movies" ? "bg-white/10 text-white" : "text-slate-300 hover:text-white "
            }`}
          >
            <Film size={18} />
            Filmek
          </button>

          <button
            onClick={() => setTab("halls")}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition cursor-pointer ${
              tab === "halls" ? "bg-white/10 text-white" : "text-slate-300 hover:text-white"
            }`}
          >
            <Building2 size={18} />
            Termek
          </button>

          <button
            onClick={() => setTab("screenings")}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition cursor-pointer ${
              tab === "screenings" ? "bg-white/10 text-white" : "text-slate-300 hover:text-white"
            }`}
          >
            <Calendar size={18} />
            Vetítések
          </button>

          <Link
            href="/forum"
            className="mt-4 flex items-center gap-3 text-slate-300 hover:text-white transition px-3 py-2 cursor-pointer"
          >
            <MessageSquare size={18} />
            Fórum
          </Link>
        </nav>

        <div className="border-t border-white/10 pt-4 text-slate-300 text-sm flex flex-col items-end">
          <button onClick={handleLogout} className="flex items-center gap-2 hover:text-white transition cursor-pointer">
            <LogOut size={18} />
            Kijelentkezés
          </button>
        </div>
      </aside>

      {/* Content */}
      <main className="ml-64 p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">
            {tab === "movies" && "Filmek kezelése"}
            {tab === "halls" && "Termek kezelése"}
            {tab === "screenings" && "Vetítések kezelése"}
          </h1>

          <button
            onClick={loadAll}
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 transition text-sm cursor-pointer"
          >
            Frissítés
          </button>
        </div>

        {err && (
          <div className="mt-4 p-3 rounded-lg bg-red-500/15 border border-red-500/30 text-red-200 text-sm">
            {err}
          </div>
        )}

        {/* MOVIES */}
        {tab === "movies" && (
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* FORM */}
            <section className="lg:col-span-1 p-5 rounded-xl bg-white/5 border border-white/10">
              <h2 className="font-semibold mb-4">
                {editingId ? "Film szerkesztése" : "Új film létrehozása"}
              </h2>

              <div className="grid grid-cols-2 gap-4">

              {/* LEFT COLUMN */}
              <div className="space-y-3">
                <div>
                  <label className="block text-sm text-slate-300 mb-1">Cím</label>
                  <input value={movieForm.title}
                    onChange={(e)=>setMovieForm({...movieForm,title:e.target.value})}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 outline-none" />
                </div>

                <div>
                  <label className="block text-sm text-slate-300 mb-1">Rendező</label>
                  <input value={movieForm.director}
                    onChange={(e)=>setMovieForm({...movieForm,director:e.target.value})}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 outline-none" />
                </div>

                <div>
                  <label className="block text-sm text-slate-300 mb-1">Színészek</label>
                  <input value={movieForm.actors}
                    onChange={(e)=>setMovieForm({...movieForm,actors:e.target.value})}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 outline-none" />
                </div>

                <div>
                  <label className="block text-sm text-slate-300 mb-1">Nyelv</label>
                  <input value={movieForm.language}
                    onChange={(e)=>setMovieForm({...movieForm,language:e.target.value})}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 outline-none" />
                </div>

                <div>
                  <label className="block text-sm text-slate-300 mb-1">Hossz (perc)</label>
                  <input type="number" value={movieForm.playtime}
                    onChange={(e)=>setMovieForm({...movieForm,playtime:Number(e.target.value)})}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 outline-none" />
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="space-y-3">

                <div>
                  <label className="block text-sm text-slate-300 mb-1">Műfaj</label>
                  <input value={movieForm.genre}
                    onChange={(e)=>setMovieForm({...movieForm,genre:e.target.value})}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 outline-none" />
                </div>

                <div>
                  <label className="block text-sm text-slate-300 mb-1">Poszter URL</label>
                  <input value={movieForm.poster}
                    onChange={(e)=>setMovieForm({...movieForm,poster:e.target.value})}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 outline-none" />
                </div>

                <div>
                  <label className="block text-sm text-slate-300 mb-1">Előzetes URL</label>
                  <input value={movieForm.trailer}
                    onChange={(e)=>setMovieForm({...movieForm,trailer:e.target.value})}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 outline-none" />
                </div>

                <div>
                  <label className="block text-sm text-slate-300 mb-1">Értékelés</label>
                  <input type="number" step="0.1"
                    value={movieForm.review ?? ""}
                    onChange={(e)=>setMovieForm({...movieForm,review:Number(e.target.value)})}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 outline-none" />
                </div>
              </div>
            </div>

            {/* DESCRIPTION FULL WIDTH */}
            <div className="mt-4">
              <label className="block text-sm text-slate-300 mb-1">Leírás</label>
              <textarea
                rows={4}
                value={movieForm.description}
                onChange={(e)=>setMovieForm({...movieForm,description:e.target.value})}
                className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 outline-none"
              />
            </div>


              <label className="flex items-center gap-2 text-sm text-slate-200 mb-4">
                <input
                  type="checkbox"
                  checked={movieForm.onscreen}
                  onChange={(e) =>
                    setMovieForm({ ...movieForm, onscreen: e.target.checked })
                  }
                />
                Műsoron
              </label>

              <button
                onClick={async () => {
                  setErr("");

                  const requiredFields = [
                    "title",
                    "director",
                    "actors",
                    "playtime",
                    "language",
                    "trailer",
                    "poster",
                    "genre",
                    "review",
                    "description",
                  ];

                  for (const key of requiredFields) {
                    if (!movieForm[key as keyof typeof movieForm]) {
                      setErr("Az összes mező kitöltése kötelező.");
                      return;
                    }
                  }

                  try {
                    if (editingId) {
                      await api("movies", "PUT", {
                        id: editingId,
                        ...movieForm,
                      });
                    } else {
                      await api("movies", "POST", movieForm);
                    }

                    resetForm();
                    await loadAll();
                  } catch (e: any) {
                    setErr(e.message);
                  }
                }}
                className="w-full px-4 py-2 rounded-lg bg-emerald-500/20 border border-emerald-500/30 hover:bg-emerald-500/25 transition cursor-pointer"
              >
                {editingId ? "Mentés" : "Új film létrehozása"}
              </button>

              {editingId && (
                <button
                  onClick={() => resetForm()}
                  className="w-full mt-2 px-4 py-2 rounded-lg bg-red-500/15 border border-red-500/30 hover:bg-red-500/25 transition cursor-pointer"
                >
                  Mégse
                </button>
              )}
            </section>

            {/* LIST */}
            <section className="lg:col-span-2 p-5 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center justify-between mb-4 gap-3">
                <h2 className="font-semibold">Filmek</h2>
                <input
                  type="text"
                  placeholder="Keresés cím szerint..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="px-3 py-2 rounded-lg bg-slate-900 border border-white/10 outline-none text-sm w-60"
                />
              </div>


              <div className="space-y-2 max-h-[520px] overflow-y-auto pr-2 custom-scroll">
                {filteredMovies.map((m) => (
                  <div
                    key={m.id}
                    className="flex items-center justify-between p-3 rounded-lg bg-slate-900/40 border border-white/10"
                  >
                    <div>
                      <div className="font-medium">{m.title}</div>
                      <div className="text-xs text-slate-300">
                        {m.playtime} perc • {m.onscreen ? "Műsoron" : "Nincs műsoron"}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setEditingId(m.id);
                          setMovieForm({
                            title: m.title ?? "",
                            director: m.director ?? "",
                            actors: m.actors ?? "",
                            playtime: m.playtime ?? 0,
                            language: m.language ?? "",
                            trailer: m.trailer ?? "",
                            poster: m.poster ?? "",
                            genre: m.genre ?? "",
                            review: m.review ?? 0,
                            description: m.description ?? "",
                            onscreen: m.onscreen ?? false,
                          });

                        }}
                        className="px-3 py-2 rounded-lg bg-blue-500/20 border border-blue-500/30 hover:bg-blue-500/25 transition text-sm cursor-pointer"
                      >
                        Szerkesztés
                      </button>

                      <button
                        onClick={async () => {
                          await api("movies", "DELETE", { id: m.id });
                          await loadAll();
                        }}
                        className="px-3 py-2 rounded-lg bg-red-500/15 border border-red-500/25 hover:bg-red-500/20 transition text-sm cursor-pointer"
                      >
                        Törlés
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}


        {/* HALLS */}
        {tab === "halls" && (
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* CREATE / EDIT FORM */}
            <section>
              <h2 className="font-semibold mb-4">
                {hallEditingId ? "Terem szerkesztése" : "Új terem létrehozása"}
              </h2>

              {/* NAME */}
              <div className="mb-3">
                <label className="block text-sm text-slate-300 mb-1">
                  Terem neve
                </label>
                <input
                  value={hallForm.name}
                  onChange={(e) =>
                    setHallForm({ ...hallForm, name: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>

              {/* ROWS */}
              <div className="mb-3">
                <label className="block text-sm text-slate-300 mb-1">
                  Sorok száma
                </label>
                <input
                  type="number"
                  value={hallForm.row}
                  min={1}
                  onChange={(e) =>
                    setHallForm({ ...hallForm, row: Number(e.target.value) })
                  }
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>

              {/* COLUMNS */}
              <div className="mb-4">
                <label className="block text-sm text-slate-300 mb-1">
                  Oszlopok száma (soronkénti ülőhelyek)
                </label>
                <input
                  type="number"
                  value={hallForm.column}
                  min={1}
                  onChange={(e) =>
                    setHallForm({ ...hallForm, column: Number(e.target.value) })
                  }
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>


              {/* SAVE BUTTON */}
              <button
                className="w-full px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 hover:bg-emerald-500/30 transition cursor-pointer"
                onClick={async () => {
                  setErr("");

                  if (!hallForm.name || hallForm.row <= 0 || hallForm.column <= 0) {
                    setErr("Minde mező kitöltése kötelező és érvényes értéknek kell lennie.");
                    return;
                  }

                  try {
                    if (hallEditingId) {
                      await api("halls", "PUT", {
                        id: hallEditingId,
                        ...hallForm,
                      });
                    } else {
                      await api("halls", "POST", hallForm);
                    }

                    resetHallForm();
                    await loadAll();
                  } catch (e: any) {
                    setErr(e.message);
                  }
                }}
              >
                {hallEditingId ? "Mentés" : "Új terem létrehozása"}
              </button>

              {/* CANCEL EDIT */}
              {hallEditingId && (
                <button
                  onClick={resetHallForm}
                  className="w-full mt-2 px-4 py-2 rounded-xl bg-red-500/15 border border-red-500/40 hover:bg-red-500/25 transition"
                >
                  Cancel Edit
                </button>
              )}
            </section>

            {/* HALL LIST */}
            <section className="lg:col-span-2 p-5 rounded-xl bg-white/5 border border-white/10">
              <h2 className="font-semibold mb-4">Termek</h2>

              <div className="space-y-2 max-h-[520px] overflow-y-auto pr-2">

                {halls.map((h) => (
                  <div
                    key={h.id}
                    className="flex items-center justify-between p-3 rounded-lg bg-slate-900/40 border border-white/10"
                  >
                    <div>
                      <div className="font-medium">{h.name}</div>
                      <div className="text-xs text-slate-300">
                        {h.row} sor × {h.column} ülőhely ({h.row * h.column} összesen)
                      </div>
                    </div>

                    <div className="flex gap-2">

                      {/* EDIT */}
                      <button
                        onClick={() => {
                          setHallEditingId(h.id);
                          setHallForm({
                            name: h.name ?? "",
                            row: h.row ?? 0,
                            column: h.column ?? 0,
                          });
                        }}
                        className="px-3 py-2 rounded-lg bg-blue-500/20 border border-blue-500/30 hover:bg-blue-500/25 transition text-sm cursor-pointer"
                      >
                        Szerkesztés
                      </button>

                      {/* DELETE */}
                      <button
                        onClick={async () => {
                          await api("halls", "DELETE", { id: h.id });
                          await loadAll();
                        }}
                        className="px-3 py-2 rounded-lg bg-red-500/15 border border-red-500/25 hover:bg-red-500/20 transition text-sm cursor-pointer"
                      >
                        Törlés
                      </button>

                    </div>
                  </div>
                ))}

              </div>
            </section>
          </div>
        )}


        {/* SCREENINGS */}
        {tab === "screenings" && (
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* CREATE FORM */}
            <section className="lg:col-span-1 p-5 rounded-xl bg-white/5 border border-white/10">

              <h2 className="font-semibold mb-4">Vetítés létrehozása</h2>

              {/* MOVIE */}
              <div className="mb-3">
                <label className="block text-sm text-slate-300 mb-1">
                  Film
                </label>
                <select
                  value={screeningForm.movie_id}
                  onChange={(e)=>setScreeningForm({...screeningForm,movie_id:e.target.value})}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-white"
                >
                  <option value="">...</option>
                  {movies
                    .filter(m=>m.onscreen)
                    .map(m=>(
                      <option key={m.id} value={m.id}>
                        {m.title} ({m.playtime} min)
                      </option>
                  ))}
                </select>
              </div>

              {/* HALL */}
              <div className="mb-3">
                <label className="block text-sm text-slate-300 mb-1">
                  Terem
                </label>
                <select
                  value={screeningForm.hall_id}
                  onChange={(e)=>setScreeningForm({...screeningForm,hall_id:e.target.value})}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-white"
                >
                  <option value="">...</option>
                  {halls.map(h=>(
                    <option key={h.id} value={h.id}>
                      {h.name} ({h.row*h.column} seats)
                    </option>
                  ))}
                </select>
              </div>

              {/* SCREENING TYPE */}
              <div className="mb-3">
                <label className="block text-sm text-slate-300 mb-1">
                  Vetítés típusa
                </label>

                <select
                  value={screeningForm.screening_type_id}
                  onChange={(e) =>
                    setScreeningForm({
                      ...screeningForm,
                      screening_type_id: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-white"
                >
                  <option value="">...</option>

                  {screeningTypes.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.type} (+{t.percent}%)
                    </option>
                  ))}
                </select>
              </div>

              {/* START TIME */}
              <div className="mb-4">
                <label className="block text-sm text-slate-300 mb-1">
                  Vetítés kezdete
                </label>
                <input
                  type="datetime-local"
                  value={screeningForm.start}
                  onChange={(e)=>setScreeningForm({...screeningForm,start:e.target.value})}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-white"
                />
              </div>

              {/* SAVE */}
              <button
                className="w-full px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 hover:bg-emerald-500/30 transition cursor-pointer"
                onClick={async()=>{

                 if (
                    !screeningForm.movie_id ||
                    !screeningForm.hall_id ||
                    !screeningForm.screening_type_id ||
                    !screeningForm.start
                  )

                  {
                    setErr("Az összes mező kitöltése kötelező.");
                    return;
                  }

                  try{
                    await api("screenings","POST",{
                      movie_id: screeningForm.movie_id,
                      hall_id: screeningForm.hall_id,
                      screening_type_id: screeningForm.screening_type_id,
                      start: new Date(screeningForm.start).toISOString()
                    });

                    setScreeningForm({
                      movie_id:"",
                      hall_id:"",
                      screening_type_id:"",
                      start:""
                    });
                    await loadAll();

                  }catch(e:any){
                    setErr(e.message);
                  }
                }}
              >
                Vetítés létrehozása
              </button>
            </section>

            {/* LIST */}
            <section className="lg:col-span-2 p-5 rounded-xl bg-white/5 border border-white/10">

              <h2 className="font-semibold mb-4">Vetítések</h2>

              <div className="space-y-2 max-h-[520px] overflow-y-auto pr-2">

                {screenings.map((s) => {
                  const start = new Date(s.start);

                  return (
                    <div
                      key={s.id}
                      className="flex items-center justify-between p-3 rounded-lg bg-slate-900/40 border border-white/10"
                    >
                      <div>
                        <div className="font-medium">
                          {s.movies?.title}
                        </div>

                        <div className="text-xs text-slate-300">
                          {s.halls?.name}
                        </div>

                        <div className="text-xs text-slate-400">
                          {s.screening_types?.type}
                        </div>

                        <div className="text-xs text-slate-400">
                          {start.toLocaleString()}
                        </div>
                      </div>

                      <button
                        onClick={async () => {
                          await api("screenings", "DELETE", { id: s.id });
                          await loadAll();
                        }}
                        className="px-3 py-2 rounded-lg bg-red-500/15 border border-red-500/25 hover:bg-red-500/20 transition text-sm cursor-pointer"
                      >
                        Törlés
                      </button>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        )}
      </main>
    </div>
  );
}
