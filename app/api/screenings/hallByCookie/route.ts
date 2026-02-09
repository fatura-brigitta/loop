import { cookies } from "next/headers";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const screeningId = (await cookies()).get("screeningId")?.value;

  if (!screeningId) {
    return NextResponse.json({ message: "Missing screening" }, { status: 400 });
  }

  const screening = await prisma.screening.findUnique({
    where: { id: screeningId },
  });

  if (!screening) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  const chairs = await prisma.chair.findMany({
    where: { hall_id: screening.hall_id },
    orderBy: [{ row: "asc" }, { column: "asc" }],
  });

  return NextResponse.json({ screening, chairs });
}
