export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import Stripe from "stripe";
import prisma from "@/lib/prisma";
import { calculateTicketPrice } from "@/lib/price";

import { getLang } from "@/lib/lang";
import { messages } from "@/lib/messages";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-02-25.clover",
});

export async function POST(req: NextRequest) {

  const lang = await getLang();
  const t = messages[lang];

  try {

    const body = await req.json();
    const ticketTypes = body.ticketTypes ?? [];

    const cookieStore = await cookies();
    const paymentId = cookieStore.get("paymentSessionId")?.value;

    if (!paymentId) {
      return NextResponse.json(
        { message: t.noSession },
        { status: 400 }
      );
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

    if (!session) {
      return NextResponse.json(
        { message: t.invalidSession },
        { status: 400 }
      );
    }

    if (!session.screenings || !session.screenings.screening_types) {
      return NextResponse.json(
        { message: t.invalidSession },
        { status: 400 }
      );
    }

    await prisma.payment_session.update({
      where: { id: paymentId },
      data: {
        selected_ticket_types: ticketTypes
      }
    });

    const chairIds = session.chair_ids as string[];

    if (!chairIds || chairIds.length === 0) {
      return NextResponse.json(
        { message: t.noSeatSelected },
        { status: 400 }
      );
    }

    if (ticketTypes.length === 0) {
      return NextResponse.json(
        { message: t.missingTicketTypes },
        { status: 400 }
      );
    }

    let totalPrice = 0;

    for (const typeName of ticketTypes) {

      const type = await prisma.ticket_type.findFirst({
        where: { type: typeName }
      });

      if (!type) continue;

      const price = calculateTicketPrice(
        session.screenings.screening_types.percent,
        type.percent
      );

      totalPrice += price;
    }

    const stripeSession = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: `${session.screenings.movies?.title} mozijegy(ek)`,
            },
            unit_amount: totalPrice,
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_URL}/payment/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/payment`,
    });

    return NextResponse.json({
      url: stripeSession.url
    });

  } catch (err) {

    console.error("STRIPE CHECKOUT ERROR:", err);

    const lang = await getLang();
    const t = messages[lang];

    return NextResponse.json(
      { message: t.stripeError },
      { status: 500 }
    );

  }

}