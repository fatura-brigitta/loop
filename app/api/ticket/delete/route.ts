import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import prisma from "@/lib/prisma";

export async function DELETE(req: Request) {

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

  if (!ticket || ticket.user_id !== userId) {
    return NextResponse.json(
      { message: "Jegy nem található" },
      { status: 404 }
    );
  }

  await prisma.ticket.delete({
    where: { id: ticketId }
  });

  return NextResponse.json({ ok: true });
}