import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import prisma from "@/lib/prisma";

export async function GET() {
  const cookieStore = cookies();
  const screeningId = (await cookieStore).get("screeningId")?.value;

  if (!screeningId) {
    return NextResponse.json({ message: "Missing screening" }, { status: 400 });
  }

  const screening = await prisma.screening.findUnique({
    where: { id: screeningId },
  });

  if (!screening) {
    return NextResponse.json({ message: "Screening not found" }, { status: 404 });
  }

  const hall = await prisma.hall.findUnique({
    where: { id: screening.hall_id },
  });

  if (!hall) {
    return NextResponse.json({ message: "Hall not found" }, { status: 404 });
  }

  const chairs = await prisma.chair.findMany({
    where: { hall_id: hall.id },
    orderBy: [{ row: "asc" }, { column: "asc" }],
  });

  return NextResponse.json({
    hall,
    chairs,
  });
}
