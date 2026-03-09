import { NextResponse } from "next/server"
import { getOpeningHours } from "@/lib/openingHours"

export async function GET(req: Request) {

  const { searchParams } = new URL(req.url)
  const date = searchParams.get("date")

  if(!date){
    return NextResponse.json(null)
  }

  const hours = await getOpeningHours(new Date(date))

  console.log("hours:", hours)
  return NextResponse.json(hours)
}