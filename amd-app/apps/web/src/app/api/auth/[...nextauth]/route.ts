import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@repo/db";

type SessionProps = {
  session: any;
  user: any;
};

export const authOptions = {
  adapter: PrismaAdapter(prisma),

  providers: [
    GithubProvider({
      clientId: "Ov23likLvBEtMyGYFZSA",
      clientSecret: "1c359ded335b14e5bea2e6129d5c01e088133010",
    }),
    GoogleProvider({
      clientId:
        "280728861898-3astv25mlbuiekfn7vjukuq8uodgpenj.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],

  secret: "MQPR02Jmm33WRvqjEBj2EMLfq5zNCVtt6z9aFbSDifw=",

  callbacks: {
    async session({ session, user }: SessionProps) {
      session.user.id = user.id;
      return session;
    },
  },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
