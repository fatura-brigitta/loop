import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import cloudinary from "@/lib/cloudinary";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async signIn({ user, account }) {

      if (!user.email) return false;

      let existing = await prisma.user.findUnique({
        where: { email: user.email },
      });

      if (!existing) {

        const baseRank = await prisma.rank.findFirst({
          where: { point_limit: 0 },
        });

        let profileImage = "/profile/default.png";

        if (user.image) {
          try {
            const upload = await cloudinary.uploader.upload(user.image, {
              folder: "loop/profile",
              public_id: user.email,
              overwrite: true,
              transformation: [
                { width: 256, height: 256, crop: "fill" },
                { quality: "auto", fetch_format: "auto" }
              ]
            });

            profileImage = upload.public_id;

          } catch (err) {
            console.error("Cloudinary upload failed:", err);
          }
        }

        existing = await prisma.user.create({
          data: {
            name: user.name || "User",
            email: user.email,
            password_hash: "",
            auth_provider: account?.provider || "oauth",
            phone_number: null,
            profile_image: profileImage,
            gender: "RATHER_NOT_SAY",
            points: 0,
            rank_id: baseRank!.id,
            email_verified: true,
          },
        });
      }

      const cookieStore = cookies();
      (await cookieStore).set("userId", existing.id, {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
      });

      return true;
    },
  }
});

export { handler as GET, handler as POST };