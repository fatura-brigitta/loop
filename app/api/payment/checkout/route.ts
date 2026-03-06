export const runtime = "nodejs";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import Stripe from "stripe";
import prisma from "@/lib/prisma";
import { calculateTicketPrice } from "@/lib/price";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-02-25.clover",
});

export async function POST(req: NextRequest) {

  try {

    console.log("---- STRIPE CHECKOUT START ----");

    const cookieStore = await cookies();
    const paymentId = cookieStore.get("paymentSessionId")?.value;

    console.log("paymentSessionId:", paymentId);

    if (!paymentId) {
      throw new Error("No payment session cookie");
    }

    const session = await prisma.payment_session.findUnique({
      where: { id: paymentId },
      include: {
        screenings: {
          include: {
            movies: true,
            screening_types: true
          }
        }
      }
    });

    console.log("session:", session);

    if (!session) {
      throw new Error("Payment session not found");
    }

    if (!session.screenings) {
      throw new Error("Screening missing from session");
    }

    if (!session.screenings.screening_types) {
      throw new Error("Screening type missing");
    }

    const chairIds = session.chair_ids as string[];

    console.log("chairs:", chairIds);

    if (!chairIds || chairIds.length === 0) {
      throw new Error("No seats selected");
    }

    const defaultTicketType = await prisma.ticket_type.findFirst({
      where: { type: "Normál" }
    });

    console.log("ticketType:", defaultTicketType);

    if (!defaultTicketType) {
      throw new Error("Ticket type 'normal' not found");
    }

    const screeningPercent = session.screenings.screening_types.percent;
    const ticketDiscount = defaultTicketType.percent;

    console.log("screeningPercent:", screeningPercent);
    console.log("ticketDiscount:", ticketDiscount);
    
    const pricePerSeat = calculateTicketPrice(
        screeningPercent,
        ticketDiscount
    );
    console.log("Stripe unit_amount:", Math.round(pricePerSeat));
    console.log("Stripe quantity:", chairIds.length);
    console.log("Stripe total:", Math.round(pricePerSeat) * chairIds.length);
    
    console.log("pricePerSeat:", pricePerSeat);

    if (!pricePerSeat || pricePerSeat < 175) {
      throw new Error("Price too small for Stripe");
    }

    const stripeSession = await stripe.checkout.sessions.create({
        mode: "payment",
        payment_method_types: ["card"],
        line_items: [
            {
            price_data: {
                currency: "eur",
                product_data: {
                name: `${session.screenings.movies?.title} mozijegy`,
                },
                unit_amount: Math.round(pricePerSeat),
            },
            quantity: chairIds.length,
            },
        ],

        success_url: `${process.env.NEXT_PUBLIC_URL}/payment/success`,
        cancel_url: `${process.env.NEXT_PUBLIC_URL}/payment`,
    });

    console.log("stripeSession:", stripeSession.id);

    return NextResponse.json({
      url: stripeSession.url
    });

  } catch (err) {

    console.error("STRIPE CHECKOUT ERROR:", err);

    return NextResponse.json(
      { message: "Stripe checkout failed" },
      { status: 500 }
    );

  }

}