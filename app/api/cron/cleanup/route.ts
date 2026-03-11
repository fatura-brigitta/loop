import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {

  const limitDate = new Date();
  limitDate.setHours(limitDate.getHours() - 2);

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

    const deletedUsers = await tx.user.deleteMany({
      where: {
        email_verified: false
      }
    });

    return {
      ticketsDeleted: deletedTickets.count,
      screeningsDeleted: deletedScreenings.count,
      usersDeleted: deletedUsers.count
    };

  });

  return NextResponse.json({
    message: "Cleanup completed",
    ...result
  });

}