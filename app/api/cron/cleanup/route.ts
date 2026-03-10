import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {

  const limitDate = new Date();
  limitDate.setDate(limitDate.getDate() - 30);

  const result = await prisma.$transaction(async (tx) => {

    const deletedTickets = await tx.ticket.deleteMany({
      where: {
        screenings: {
          start: {
            lt: limitDate
          }
        }
      }
    });

    const deletedScreenings = await tx.screening.deleteMany({
      where: {
        start: {
          lt: limitDate
        }
      }
    });

    return {
      ticketsDeleted: deletedTickets.count,
      screeningsDeleted: deletedScreenings.count
    };

  });

  return NextResponse.json({
    message: "Cleanup completed",
    ...result
  });

}