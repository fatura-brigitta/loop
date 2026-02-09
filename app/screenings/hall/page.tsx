import { cookies } from "next/headers";
import prisma from "@/lib/prisma";

type Chair = {
  id: string;
  row: number;
  column: number;
  state: boolean;
  hall_id: string;
};

function SeatGrid({ chairs, rows, columns }: { chairs: Chair[]; rows: number; columns: number }) {
  return (
    <div className="flex flex-col items-center gap-2">
      {Array.from({ length: rows }).map((_, r) => (
        <div className="flex gap-2" key={r}>
          {Array.from({ length: columns }).map((_, c) => {
            const chair = chairs.find((ch) => ch.row === r + 1 && ch.column === c + 1);

            return (
              <div
                className={`h-8 w-8 rounded cursor-pointer
                  transition-transform
                  hover:scale-110
                  ${chair?.state ? "bg-red-500" : "bg-green-500"}
                `}
                key={c}
                title={`Sor ${r + 1}, Szék ${c + 1}`}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

function hallNumberFromId(id: string): number {
  // kiveszi a végéről a számot
  const match = id.match(/\d+$/);
  return match ? Number(match[0]) : 0;
}

export default async function HallPage() {
  const cookieStore = await cookies();

  const userId = cookieStore.get("userId")?.value;
  const screeningId = cookieStore.get("screeningId")?.value;

  if (!userId) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#060b14] text-white">
        A jegyvásárláshoz kérjük jelentkezzen be
      </div>
    );
  }

  if (!screeningId) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#060b14] text-white">
        Nincs kiválasztott vetítés
      </div>
    );
  }

  const screening = await prisma.screening.findUnique({
    where: { id: screeningId },
    include: {
      halls: true,
    },
  });

  if (!screening || !screening.halls) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#060b14] text-white">
        A terem nem található
      </div>
    );
  }

  const rows = screening.halls.row;
  const columns = screening.halls.column;

  if (typeof rows !== "number" || typeof columns !== "number") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#060b14] text-white">
        Hibás terem konfiguráció
      </div>
    );
  }

  const chairs = await prisma.chair.findMany({
    where: {
      hall_id: screening.halls.id,
    },
    orderBy: [{ row: "asc" }, { column: "asc" }],
  });

  return (
    <div className="min-h-screen bg-[#060b14] p-8 text-white">
      <h1 className="mb-6 text-center text-2xl font-bold">{hallNumberFromId(screening.halls.id)}. terem – {screening.halls.name}</h1>

      <SeatGrid chairs={chairs} columns={columns} rows={rows}/>
    </div>
  );
}