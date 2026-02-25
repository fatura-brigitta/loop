import prisma from "@/lib/prisma";

export async function updateUserRank(userId: string, newPoints: number) {

  const ranks = await prisma.rank.findMany({
    orderBy: {
      point_limit: "asc"
    }
  });

  let newRank = ranks[0];

  for (const rank of ranks) {
    if (newPoints >= rank.point_limit) {
      newRank = rank;
    }
  }

  await prisma.user.update({
    where: { id: userId },
    data: {
      points: newPoints,
      rank_id: newRank.id
    }
  });

  return newRank;
}