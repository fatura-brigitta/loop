import { prisma } from "@/lib/prisma"

export type OpeningHoursResult =
  | { open: string; close: string }
  | null

export async function getOpeningHours(
  date: Date
): Promise<OpeningHoursResult> {

  const dayStart = new Date(date.toISOString().slice(0,10))
  const dayEnd = new Date(date.toISOString().slice(0,10) + "T23:59:59")

  const override = await prisma.openingOverride.findFirst({
    where: {
      date: {
        gte: dayStart,
        lt: dayEnd
      }
    }
  })

  if (override) {
    if (override.closed) return null

    if (!override.open_time || !override.close_time) {
      return null
    }

    return {
      open: override.open_time,
      close: override.close_time
    }
  }

  const weekday = date.getDay()

  const weekly = await prisma.openingHours.findFirst({
    where: { weekday }
  })
  console.log("weekday:", date.getDay())

  if (!weekly || weekly.closed) return null

  return {
    open: weekly.open_time,
    close: weekly.close_time
  }
}