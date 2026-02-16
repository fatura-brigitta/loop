import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import prisma from "@/lib/prisma";
import { ObjectId } from "mongodb";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const userId = cookieStore.get("userId")?.value;

    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const objectUserId = new ObjectId(userId).toString();

    const tickets = await prisma.ticket.findMany({
      where: {
        user_id: objectUserId,
      },
      include: {
        screenings: {
          include: {
            movies: true,
            halls: true,
            screening_types: true,
          },
        },
        chairs: true,
        ticket_types: true,
      },
      orderBy: {
        id: "desc",
      },
    });

    console.log("FOUND TICKETS:", tickets.length);

    return NextResponse.json(tickets);
  } catch (err) {
    console.error("PROFILE TICKETS ERROR:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}