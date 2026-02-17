import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";

export default async function TicketPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;

  const ticket = await prisma.ticket.findUnique({
    where: { qr_token: token },
    include: {
      screenings: {
        include: {
          movies: true,
          halls: true,
        },
      },
      chairs: true,
      ticket_types: true,
      screening_types: true,
    },
  });

  if (!ticket || !ticket.screenings || !ticket.chairs) return notFound();

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#060b14] p-6 text-white">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0b1220] p-6 text-center shadow-2xl">
        <h1 className="mb-4 text-2xl font-bold text-cyan-300">{ticket.screenings.movies?.title}</h1>

        <div className="space-y-2 text-lg">
          <div>
            <span className="text-white/60">Terem:</span> {ticket.screenings.halls?.name}
          </div>

          <div>
            <span className="text-white/60">Időpont:</span>{" "}
            {new Date(ticket.screenings.start).toLocaleString("hu-HU")}
          </div>

          <div>
            <span className="text-white/60">Sor:</span> {ticket.chairs.row}
          </div>

          <div>
            <span className="text-white/60">Szék:</span> {ticket.chairs.column}
          </div>

          <div>
            <span className="text-white/60">Jegytípus:</span> {ticket.ticket_types?.type}
          </div>

          <div>
            <span className="text-white/60">Vetítés típusa:</span> {ticket.screening_types?.type}
          </div>
        </div>

        <div className="mt-6 text-xl font-semibold text-green-400">Érvényes mozijegy 🎟</div>

        <p className="mt-4 text-sm text-white/50">Kérjük mutasd fel a jegyellenőrnek.</p>
      </div>
    </div>
  );
}
