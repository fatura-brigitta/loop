import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async signIn({ user }) {
      if (!user.email) return false;

      let existing = await prisma.user.findUnique({
        where: { email: user.email },
      });

      if (!existing) {
        const baseRank = await prisma.rank.findFirst({
          where: { point_limit: 0 },
        });

        existing = await prisma.user.create({
          data: {
            name: user.name || "Google User",
            email: user.email,
            password_hash: "",
            auth_provider: "google",
            phone_number: "0000000000",
            profile_image: user.image || "/profile/default.png",
            gender: "RATHER_NOT_SAY",
            points: 0,
            rank_id: baseRank!.id,
            email_verified: true,
          },
        });
      }

      const cookieStore = await cookies();
      cookieStore.set("userId", existing.id, {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
      });

      return true;
    },
  },
});

export { handler as GET, handler as POST };