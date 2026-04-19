import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import prisma from "@/lib/prisma";
import { getLang } from "@/lib/lang";
import { messages } from "@/lib/messages";

export async function DELETE(req: Request) {
  const lang = await getLang();
  const t = messages[lang];

  try {
    const cookieStore = await cookies();
    const userId = cookieStore.get("userId")?.value;

    if (!userId) {
      return NextResponse.json(
        { message: t.notLoggedIn },
        { status: 401 }
      );
    }

    const { ticketId } = await req.json();

    if (!ticketId) {
      return NextResponse.json(
        { message: t.missingTicketId },
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
        { message: t.ticketNotFoundOrUnauthorized },
        { status: 404 }
      );
    }
    return NextResponse.json({ ok: true });

  } catch (error) {
    console.error("DELETE TICKET ERROR:", error);

    return NextResponse.json(
      { message: t.serverError },
      { status: 500 }
    );
  }
}