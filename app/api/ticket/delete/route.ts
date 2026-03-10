import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import prisma from "@/lib/prisma";

export async function DELETE(req: Request) {
  try {

    const cookieStore = await cookies();
    const userId = cookieStore.get("userId")?.value;

    if (!userId) {
      return NextResponse.json(
        { message: "Nem vagy bejelentkezve" },
        { status: 401 }
      );
    }

    const { ticketId } = await req.json();

    if (!ticketId) {
      return NextResponse.json(
        { message: "Hiányzó ticketId" },
        { status: 400 }
      );
    }

    const deleted = await prisma.ticket.deleteMany({
      where: {
        id: ticketId,
        user_id: userId
      }
    });

    if (deleted.count === 0) {
      return NextResponse.json(
        { message: "Jegy nem található vagy nincs jogosultság" },
        { status: 404 }
      );
    }

    return NextResponse.json({ ok: true });

  } catch (error) {

    console.error("DELETE TICKET ERROR:", error);

    return NextResponse.json(
      { message: "Szerver hiba" },
      { status: 500 }
    );
  }
}