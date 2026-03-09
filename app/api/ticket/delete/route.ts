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

    const ticket = await prisma.ticket.findUnique({
      where: { id: ticketId }
    });

    if (!ticket) {
      return NextResponse.json(
        { message: "Jegy nem található" },
        { status: 404 }
      );
    }

    if (String(ticket.user_id) !== String(userId)) {
      return NextResponse.json(
        { message: "Nincs jogosultság" },
        { status: 403 }
      );
    }

    await prisma.ticket.delete({
      where: { id: ticketId }
    });

    return NextResponse.json({ ok: true });

  } catch (error) {

    console.error("DELETE TICKET ERROR:", error);

    return NextResponse.json(
      { message: "Szerver hiba" },
      { status: 500 }
    );
  }
}