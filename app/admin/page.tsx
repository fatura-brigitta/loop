"use client";

import Timeline from "@/app/components/Timeline";
import { LogOut, Film, Calendar, MessageSquare, Building2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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


type Tab =
  | "movies"
  | "halls"
  | "screenings"
  | "screening_types"
  | "bad_words"
  | "flagged_comments";

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

  const [sMovieId, setSMovieId] = useState<string>("");
  const [sHallId, setSHallId] = useState<string>("");

  const [editingId, setEditingId] = useState<string | null>(null);

  const [badWordsText,setBadWordsText] = useState("");
  const [flaggedComments,setFlaggedComments] = useState<any[]>([]);
  const [showBadWords, setShowBadWords] = useState(false);

  const [movieForm, setMovieForm] = useState({
    title: "",
    director: "",
    actors: "",
    playtime: "",
    language: "",
    trailer: "",
    poster: "",
    genre: "",
    review: "",
    description: "",
    onscreen: false,
  });

  function resetForm() {
    setEditingId(null);
    setMovieForm({
      title: "",
      director: "",
      actors: "",
      playtime: "",
      language: "",
      trailer: "",
      poster: "",
      genre: "",
      review: "",
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
    row: "",
    column: "",
  });

  function resetHallForm() {
    setHallEditingId(null);
    setHallForm({
      name: "",
      row: "",
      column: "",
    });
  }

  const [screeningForm, setScreeningForm] = useState({
    movie_id: "",
    hall_id: "",
    screening_type_id: "",
    startTime: "",
  });


  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().slice(0, 10)
  );

  const [dayHallScreenings, setDayHallScreenings] = useState<Screening[]>([]);

  async function loadScheduleDay() {
  if (!selectedDate || !screeningForm.hall_id) {
    setDayHallScreenings([]);
    return;
  }

  try {
      const res = await fetch(`/api/admin/adminSchedule?date=${selectedDate}`);
      const data = await res.json();

      const hallOnly = (data.screenings as Screening[]).filter(
        (s) => s.halls?.id === screeningForm.hall_id
      );

      setDayHallScreenings(hallOnly);
    } catch (e: any) {
      setDayHallScreenings([]);
    }
  }

  useEffect(() => {
    loadScheduleDay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate, screeningForm.hall_id, tab]);


  const handleLogout = async () => {
    await fetch("/api/admin/adminLogout", { method: "POST" });
    router.replace("/adminLogin");
  };

  async function loadAll() {
  setErr("");

  try {
    const [ms, hs, ss, st] = await Promise.all([
      api("movies", "GET"),
      api("halls", "GET"),
      api("screenings", "GET"),
      api("screening_types", "GET"),
    ]);

    setMovies(ms);
    setHalls(hs);
    setScreenings(ss);
    setScreeningTypes(st);

    await loadModeration();

  } catch (e: any) {
    setErr(e.message || "Betöltési hiba");
  }
}

async function loadModeration() {
  try {
    const words = await api("bad_words", "GET");

    setBadWordsText(
      words.map((w: any) => w.word).join(", ")
    );

    const comments = await api("flagged_comments", "GET");

    setFlaggedComments(comments);

  } catch (e: any) {
    console.error("Moderation load error", e);
  }
}

  useEffect(() => {
    loadAll();
    loadModeration();
  }, []);

  useEffect(() => {
    if (!sMovieId && movies.length) setSMovieId(movies[0].id);
    if (!sHallId && halls.length) setSHallId(halls[0].id);
  }, [movies, halls, sMovieId, sHallId]);

  const localToISO = (local: string) => {
    const d = new Date(local);
    return d.toISOString();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white" data-cy="admin-page">
      <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-900 border-r border-white/10 p-6 flex flex-col" data-cy="admin-sidebar">
        <div className="mb-10 text-white text-xl font-semibold">Admin Panel</div>

        <nav className="flex flex-col gap-2 text-sm flex-1">
          <button className={`flex items-center gap-3 px-3 py-2 rounded-lg transition cursor-pointer ${
              tab === "movies" ? "bg-white/10 text-white" : "text-slate-300 hover:text-white "
            }`}
            data-cy="nav-movies"
            onClick={() => setTab("movies")}
          >
            <Film size={18} />
            Filmek
          </button>

          <button className={`flex items-center gap-3 px-3 py-2 rounded-lg transition cursor-pointer ${
              tab === "halls" ? "bg-white/10 text-white" : "text-slate-300 hover:text-white"
            }`}
            data-cy="nav-halls"
            onClick={() => setTab("halls")}
          >
            <Building2 size={18} />
            Termek
          </button>

          <button className={`flex items-center gap-3 px-3 py-2 rounded-lg transition cursor-pointer ${
              tab === "screenings" ? "bg-white/10 text-white" : "text-slate-300 hover:text-white"
            }`}
            data-cy="nav-screenings"
            onClick={() => setTab("screenings")}
          >
            <Calendar size={18} />
            Vetítések
          </button>


          <button className={`flex items-center gap-3 px-3 py-2 rounded-lg transition cursor-pointer ${
              tab === "bad_words"
                ? "bg-white/10 text-white"
                : "text-slate-300 hover:text-white"
            }`}
            data-cy="nav-forum"
            onClick={() => setTab("bad_words")}
          >
            <MessageSquare size={18} />
            Fórum
          </button>
        </nav>

        <div className="border-t border-white/10 pt-4 text-slate-300 text-sm flex flex-col items-end">
          <button className="flex items-center gap-2 hover:text-white transition cursor-pointer" data-cy="admin-logout" onClick={handleLogout}>
            <LogOut size={18} />
            Kijelentkezés
          </button>
        </div>
      </aside>

      <main className="ml-64 p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">
            {tab === "movies" && "Filmek kezelése"}
            {tab === "halls" && "Termek kezelése"}
            {tab === "screenings" && "Vetítések kezelése"}
          </h1>

          <button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 transition text-sm cursor-pointer"
            data-cy="admin-refresh"
            onClick={loadAll}
          >
            Frissítés
          </button>
        </div>

        {err && (
          <div className="mt-4 p-3 rounded-lg bg-red-500/15 border border-red-500/30 text-red-200 text-sm" data-cy="admin-error">
            {err}
          </div>
        )}

        {tab === "movies" && (
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">

            <section className="lg:col-span-1 p-5 rounded-xl bg-white/5 border border-white/10" data-cy="movie-form">
              <h2 className="font-semibold mb-4">
                {editingId ? "Film szerkesztése" : "Új film létrehozása"}
              </h2>

              <div className="grid grid-cols-2 gap-4">

              <div className="space-y-3">
                <div>
                  <label className="block text-sm text-slate-300 mb-1">Cím</label>
                  <input className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 outline-none" data-cy="movie-title-input"
                    value={movieForm.title}
                    onChange={(e)=>setMovieForm({...movieForm,title:e.target.value})} />
                </div>

                <div>
                  <label className="block text-sm text-slate-300 mb-1">Rendező</label>
                  <input className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 outline-none" data-cy="movie-director-input"
                    value={movieForm.director}
                    onChange={(e)=>setMovieForm({...movieForm,director:e.target.value})} />
                </div>

                <div>
                  <label className="block text-sm text-slate-300 mb-1">Színészek</label>
                  <input className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 outline-none" data-cy="movie-actor-input"
                    value={movieForm.actors}
                    onChange={(e)=>setMovieForm({...movieForm,actors:e.target.value})} />
                </div>

                <div>
                  <label className="block text-sm text-slate-300 mb-1">Nyelv</label>
                  <input className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 outline-none" data-cy="movie-language-input"
                    value={movieForm.language}
                    onChange={(e)=>setMovieForm({...movieForm,language:e.target.value})} />
                </div>

                <div>
                  <label className="block text-sm text-slate-300 mb-1">Hossz (perc)</label>
                  <input className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 outline-none" data-cy="movie-length-input" type="number"
                    value={movieForm.playtime}
                    onChange={(e)=>setMovieForm({...movieForm,playtime:e.target.value})} />
                </div>
              </div>

              <div className="space-y-3">

                <div>
                  <label className="block text-sm text-slate-300 mb-1">Műfaj</label>
                  <input className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 outline-none" data-cy="movie-genre-input"
                    value={movieForm.genre}
                    onChange={(e)=>setMovieForm({...movieForm,genre:e.target.value})} />
                </div>

                <div>
                  <label className="block text-sm text-slate-300 mb-1">Poszter URL</label>
                  <input className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 outline-none" data-cy="movie-poster-input"
                    value={movieForm.poster}
                    onChange={(e)=>setMovieForm({...movieForm,poster:e.target.value})} />
                </div>

                <div>
                  <label className="block text-sm text-slate-300 mb-1">Előzetes URL</label>
                  <input className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 outline-none" data-cy="movie-trailer-input"
                    value={movieForm.trailer}
                    onChange={(e)=>setMovieForm({...movieForm,trailer:e.target.value})} />
                </div>

                <div>
                  <label className="block text-sm text-slate-300 mb-1">Értékelés</label>
                  <input className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 outline-none" data-cy="movie-rating-input" step="0.1"
                    type="number"
                    value={movieForm.review ?? ""}
                    onChange={(e)=>setMovieForm({...movieForm,review:e.target.value})} />
                </div>
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm text-slate-300 mb-1">Leírás</label>
              <textarea className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 outline-none"
                data-cy="movie-description-input"
                rows={4}
                value={movieForm.description}
                onChange={(e)=>setMovieForm({...movieForm,description:e.target.value})}
              />
            </div>


              <label className="flex items-center gap-2 text-sm text-slate-200 mb-4">
                <input checked={movieForm.onscreen}
                  data-cy="movie-onscreen-input"
                  type="checkbox"
                  onChange={(e) =>
                    setMovieForm({ ...movieForm, onscreen: e.target.checked })
                  }
                />
                Műsoron
              </label>

              <button className="w-full px-4 py-2 rounded-lg bg-emerald-500/20 border border-emerald-500/30 hover:bg-emerald-500/25 transition cursor-pointer"
                data-cy="movie-save"
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
                    const value = movieForm[key as keyof typeof movieForm];

                    if (value === null || value === undefined || value === "") {
                      setErr("Az összes mező kitöltése kötelező.");
                      return;
                    }
                  }

                  try {
                    const payload = {
                      ...movieForm,
                      playtime: Number(movieForm.playtime),
                      review: Number(movieForm.review),
                    };

                    if (editingId) {
                      await api("movies", "PUT", {
                        id: editingId,
                        ...payload,
                      });
                    } else {
                      await api("movies", "POST", payload);
                    }

                    resetForm();
                    await loadAll();

                  } catch (e: any) {
                    setErr(e.message);
                  }

                }}
              >
                {editingId ? "Mentés" : "Új film létrehozása"}
              </button>

              {editingId && (
                <button className="w-full mt-2 px-4 py-2 rounded-lg bg-red-500/15 border border-red-500/30 hover:bg-red-500/25 transition cursor-pointer"
                  data-cy="movie-cancel"
                  onClick={() => resetForm()}
                >
                  Mégse
                </button>
              )}
            </section>

            <section className="lg:col-span-2 p-5 rounded-xl bg-white/5 border border-white/10" data-cy="movie-list">
              <div className="flex items-center justify-between mb-4 gap-3">
                <h2 className="font-semibold">Filmek</h2>
                <input className="px-3 py-2 rounded-lg bg-slate-900 border border-white/10 outline-none text-sm w-60"
                  data-cy="movie-item"
                  placeholder="Keresés cím szerint..."
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>


              <div className="space-y-2 max-h-[520px] overflow-y-auto pr-2 custom-scroll">
                {filteredMovies.map((m) => (
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900/40 border border-white/10"
                    data-cy="movie-item"
                    key={m.id}
                  >
                    <div>
                      <div className="font-medium">{m.title}</div>
                      <div className="text-xs text-slate-300">
                        {m.playtime} perc • {m.onscreen ? "Műsoron" : "Nincs műsoron"}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button className="px-3 py-2 rounded-lg bg-blue-500/20 border border-blue-500/30 hover:bg-blue-500/25 transition text-sm cursor-pointer"
                        data-cy="movie-edit"
                        onClick={() => {
                          setEditingId(m.id);
                          setMovieForm({
                            title: m.title ?? "",
                            director: m.director ?? "",
                            actors: m.actors ?? "",
                            playtime: String(m.playtime ?? ""),
                            language: m.language ?? "",
                            trailer: m.trailer ?? "",
                            poster: m.poster ?? "",
                            genre: m.genre ?? "",
                            review: String(m.review ?? ""),
                            description: m.description ?? "",
                            onscreen: m.onscreen ?? false,
                          });

                        }}
                      >
                        Szerkesztés
                      </button>

                      <button className="px-3 py-2 rounded-lg bg-red-500/15 border border-red-500/25 hover:bg-red-500/20 transition text-sm cursor-pointer"
                        data-cy="movie-delete"
                        onClick={async () => {
                          await api("movies", "DELETE", { id: m.id });
                          await loadAll();
                        }}
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

        {tab === "halls" && (
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">

            <section data-cy="hall-form">
              <h2 className="font-semibold mb-4">
                {hallEditingId ? "Terem szerkesztése" : "Új terem létrehozása"}
              </h2>

              <div className="mb-3">
                <label className="block text-sm text-slate-300 mb-1">
                  Terem neve
                </label>
                <input className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  data-cy="hall-name-input"
                  value={hallForm.name}
                  onChange={(e) =>
                    setHallForm({ ...hallForm, name: e.target.value })
                  }
                />
              </div>

              <div className="mb-3">
                <label className="block text-sm text-slate-300 mb-1">
                  Sorok száma
                </label>
                <input className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  data-cy="hall-rows-input"
                  min={1}
                  type="number"
                  value={hallForm.row}
                  onChange={(e) =>
                    setHallForm({ ...hallForm, row: e.target.value })
                  }
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm text-slate-300 mb-1">
                  Oszlopok száma (soronkénti ülőhelyek)
                </label>
                <input className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  data-cy="hall-cols-input"
                  min={1}
                  type="number"
                  value={hallForm.column}
                  onChange={(e) =>
                    setHallForm({ ...hallForm, column: e.target.value })
                  }
                />
              </div>

              <button className="w-full px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 hover:bg-emerald-500/30 transition cursor-pointer"
                data-cy="hall-create"
                onClick={async () => {
                  setErr("");

                  if (
                    hallForm.name === "" ||
                    hallForm.row === "" ||
                    hallForm.column === ""
                  ) {
                    setErr("Minden mező kitöltése kötelező.");
                    return;
                  }

                  try {
                    const payload = {
                      name: hallForm.name,
                      row: Number(hallForm.row),
                      column: Number(hallForm.column),
                    };

                    if (hallEditingId) {
                      await api("halls", "PUT", {
                        id: hallEditingId,
                        ...payload,
                      });
                    } else {
                      await api("halls", "POST", payload);
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

              {hallEditingId && (
                <button className="w-full mt-2 px-4 py-2 rounded-xl bg-red-500/15 border border-red-500/40 hover:bg-red-500/25 transition"
                  data-cy="hall-create-cancel"
                  onClick={resetHallForm}
                >
                  Cancel Edit
                </button>
              )}
            </section>

            <section className="lg:col-span-2 p-5 rounded-xl bg-white/5 border border-white/10" data-cy="hall-list">
              <h2 className="font-semibold mb-4">Termek</h2>

              <div className="space-y-2 max-h-[520px] overflow-y-auto pr-2">

                {halls.map((h) => (
                  <div
                    className="flex items-center justify-between p-3 rounded-lg bg-slate-900/40 border border-white/10"
                    key={h.id}
                  >
                    <div>
                      <div className="font-medium">{h.name}</div>
                      <div className="text-xs text-slate-300">
                        {h.row} sor × {h.column} ülőhely ({h.row * h.column} összesen)
                      </div>
                    </div>

                    <div className="flex gap-2">

                      <button className="px-3 py-2 rounded-lg bg-blue-500/20 border border-blue-500/30 hover:bg-blue-500/25 transition text-sm cursor-pointer"
                        data-cy="hall-edit"
                        onClick={() => {
                          setHallEditingId(h.id);
                          setHallForm({
                            name: h.name ?? "",
                            row: String(h.row ?? 0),
                            column: String(h.column ?? 0),
                          });
                        }}
                      >
                        Szerkesztés
                      </button>

                      <button className="px-3 py-2 rounded-lg bg-red-500/15 border border-red-500/25 hover:bg-red-500/20 transition text-sm cursor-pointer"
                        data-cy="hall-delete"
                        onClick={async () => {
                          await api("halls", "DELETE", { id: h.id });
                          await loadAll();
                        }}
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

        {tab === "screenings" && (
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">

            <section className="lg:col-span-2 p-5 rounded-xl bg-white/5 border border-white/10" data-cy="screening-form">

              <h2 className="font-semibold mb-4">Vetítés létrehozása</h2>

              <div className="mb-3">
                <label className="block text-sm text-slate-300 mb-1">Nap</label>
                <input className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-white"
                  data-cy="screening-day-input"
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="block text-sm text-slate-300 mb-1">
                  Terem
                </label>
                <select className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-white"
                  data-cy="screening-hall-select"
                  value={screeningForm.hall_id}
                  onChange={(e)=>setScreeningForm({...screeningForm,hall_id:e.target.value})}
                >
                  <option value="">...</option>
                  {halls.map(h=>(
                    <option key={h.id} value={h.id}>
                      {h.name} ({h.row*h.column} seats)
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-3">
                <label className="block text-sm text-slate-300 mb-1">
                  Film
                </label>
                <select className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-white"
                  data-cy="screening-movie-select"
                  value={screeningForm.movie_id}
                  onChange={(e)=>setScreeningForm({...screeningForm,movie_id:e.target.value})}
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

              <div className="mb-3">
                <label className="block text-sm text-slate-300 mb-1">
                  Vetítés típusa
                </label>

                <select className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-white"
                  data-cy="screening-type-select"
                  value={screeningForm.screening_type_id}
                  onChange={(e) =>
                    setScreeningForm({
                      ...screeningForm,
                      screening_type_id: e.target.value,
                    })
                  }
                >
                  <option value="">...</option>

                  {screeningTypes.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.type} (+{t.percent}%)
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm text-slate-300 mb-1">
                  Vetítés kezdete
                </label>
                <input className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-white"
                  data-cy="screening-start-input"
                  max="21:45"
                  min="10:00"
                  step="900"
                  type="time"
                  value={screeningForm.startTime}
                  onChange={(e)=>
                    setScreeningForm({...screeningForm,startTime:e.target.value})
                  }
                />

                <div className="mt-5">
                  <div className="text-sm text-slate-300 mb-2">
                    Idővonal (a kiválasztott teremhez) — kattints egy pontra a kezdés beállításához
                  </div>

                 <Timeline data-cy="movie-search"
                    date={selectedDate}
                    movie={movies.find((m) => m.id === screeningForm.movie_id) || null}
                    screenings={dayHallScreenings}
                    onPickStart={(localISO) =>
                      setScreeningForm((prev) => ({ ...prev, start: localISO }))
                    }
                  />
                </div>

                {(() => {
                  const movie = movies.find((m) => m.id === screeningForm.movie_id);
                  if (!movie || !screeningForm.startTime) return null;

                  const [hour, minute] = screeningForm.startTime.split(":").map(Number);
                  const start = new Date(selectedDate);
                  start.setHours(hour, minute, 0, 0);

                  const CLEANING = 15;
                  const end = new Date(start.getTime() + (movie.playtime + CLEANING) * 60000);

                  const open = new Date(selectedDate);
                  open.setHours(10, 0, 0, 0);

                  const close = new Date(selectedDate);
                  close.setHours(22, 0, 0, 0);

                  const outsideOpening = start < open || end > close;

                  const conflict = dayHallScreenings.some((s) => {
                    const sStart = new Date(s.start);
                    const sEnd = new Date(s.end);
                    return start < sEnd && end > sStart;
                  });

                  let text = "";
                  let style = "";

                  if (outsideOpening) {
                    text = "A vetítés kilóg a mozi nyitvatartásából.";
                    style = "bg-red-500/15 border-red-500/30 text-red-200";
                  } else if (conflict) {
                    text = "Nem fér be ide (ütközik egy meglévő vetítéssel vagy takarítással).";
                    style = "bg-red-500/15 border-red-500/30 text-red-200";
                  } else {
                    text = "Be fog férni ide (film + 15 perc takarítás).";
                    style = "bg-emerald-500/15 border-emerald-500/30 text-emerald-200";
                  }

                  return (
                    <div className={`mt-3 text-sm rounded-lg p-2 border ${style}`}>
                      {text}
                    </div>
                  );
                })()}

              </div>

              <button className="w-full px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 hover:bg-emerald-500/30 transition cursor-pointer"
                data-cy="screening-create"
                onClick={async()=>{

                 if (
                    !screeningForm.movie_id ||
                    !screeningForm.hall_id ||
                    !screeningForm.screening_type_id ||
                    !screeningForm.startTime
                  )

                  {
                    setErr("Az összes mező kitöltése kötelező.");
                    return;
                  }

                  try{
                    const [hour, minute] = screeningForm.startTime.split(":").map(Number);

                    const startDate = new Date(selectedDate);
                    startDate.setHours(hour, minute, 0, 0);

                    await api("screenings","POST",{
                      movie_id: screeningForm.movie_id,
                      hall_id: screeningForm.hall_id,
                      screening_type_id: screeningForm.screening_type_id,
                      start: startDate.toISOString()
                    });


                    setScreeningForm({
                      movie_id:"",
                      hall_id:"",
                      screening_type_id:"",
                      startTime:""
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

            <section className="lg:col-span-1 p-5 rounded-xl bg-white/5 border border-white/10" data-cy="screening-list">

              <h2 className="font-semibold mb-4">Vetítések</h2>

              <div className="space-y-2 max-h-[520px] overflow-y-auto pr-2">

                {screenings
                  .filter(s => {

                    if(selectedDate){
                      const d = new Date(s.start).toISOString().slice(0,10);
                      if(d !== selectedDate) return false;
                    }

                    if(screeningForm.hall_id){
                      if(s.hall_id !== screeningForm.hall_id) return false;
                    }

                    return true;
                  })
                  .map((s) => {

                  const start = new Date(s.start);

                  return (
                    <div
                      className="flex items-center justify-between p-3 rounded-lg bg-slate-900/40 border border-white/10"
                      key={s.id}
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

                      <button className="px-3 py-2 rounded-lg bg-red-500/15 border border-red-500/25 hover:bg-red-500/20 transition text-sm cursor-pointer"
                        data-cy="screening-delete"
                        onClick={async () => {
                          await api("screenings", "DELETE", { id: s.id });
                          await loadAll();
                        }}
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

        {tab === "bad_words" && (
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

          <section className="p-5 rounded-xl bg-white/5 border border-white/10 flex flex-col" data-cy="flagged-comments">
  
          <h2 className="font-semibold mb-4">Problémás kommentek</h2>
  
          <div className="space-y-2 max-h-[520px] overflow-y-auto pr-2 custom-scroll">
  
            {flaggedComments.map(c=>{
  
            let text = c.comment;
  
            badWordsText.split(",").forEach(w=>{
  
            const word = w.trim();
            if(!word) return;
  
            const regex = new RegExp(`(${word})`,"gi");
            text = text.replace(regex,"<mark>$1</mark>");
  
            });
  
            return(
  
            <div
            className="flex items-start justify-between p-3 rounded-lg bg-slate-900/40 border border-white/10"
            key={c.id}
            >
  
            <div className="text-sm">
  
            <div className="text-xs text-slate-400 mb-1">
            {c.user} • {c.movie}
            {c.type === "reply" && (
            <span className="ml-2 text-yellow-400">(válasz)</span>
            )}
            </div>
  
            <div dangerouslySetInnerHTML={{__html:text}}/></div>
  
            <button className="ml-4 px-3 py-2 rounded-lg bg-red-500/15 border border-red-500/25 hover:bg-red-500/20 transition text-sm whitespace-nowrap"
            data-cy="flagged-comments-delete"
            onClick={async()=>{
  
            await fetch("/api/admin?entity=flagged_comments",{
            method:"DELETE",
            headers:{
            "Content-Type":"application/json"
            },
            body:JSON.stringify({
            id:c.id,
            type:c.type
            })
            });
  
            await loadModeration();
  
            }}
            >
            Törlés
            </button>
  
            </div>
  
            );
  
            })}
  
          </div>
          </section>

          <section className="p-5 rounded-xl bg-white/5 border border-white/10" data-cy="bad-words-panel">

          <div
          className="flex items-center justify-between cursor-pointer mb-4"
          onClick={()=>setShowBadWords(!showBadWords)}
          >

            <h2 className="font-semibold">Tiltott szavak</h2>

            <span className={`transition ${showBadWords ? "rotate-180" : ""}`}>
            ▼
            </span>

          </div>

          {showBadWords && (
            <>
            <textarea className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 outline-none"
            data-cy="bad-words-input"
            rows={4}
            value={badWordsText}
            onChange={(e)=>setBadWordsText(e.target.value)}
            />

            <div className="text-xs text-slate-400 mt-1">
            Vesszővel elválasztva
            </div>

            <button className="mt-3 px-4 py-2 rounded-lg bg-emerald-500/20 border border-emerald-500/30"
            data-cy="bad-words-save"
            onClick={async()=>{

            const words = badWordsText
            .split(",")
            .map(w=>w.trim())
            .filter(Boolean);

            await fetch("/api/admin?entity=bad_words",{
            method:"POST",
            headers:{
            "Content-Type":"application/json"
            },
            body:JSON.stringify({words})
            });

            await loadModeration();

            }}
            >
            Mentés
            </button>
            </>
            )}
          </section>
        </div>
        )}
      </main>
    </div>
  );
}