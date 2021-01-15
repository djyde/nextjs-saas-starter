import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { PrismaClient } from "@prisma/client";
import Adapters from "next-auth/adapters";

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  // @ts-expect-error
  if (!global.prisma) {
    // @ts-expect-error
    global.prisma = new PrismaClient();
  }
  // @ts-expect-error
  prisma = global.prisma;
}

const providers = [];

if (process.env.GITHUB_ID) {
  Providers.GitHub({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
  });
}

const options = {
  // Configure one or more authentication providers
  providers: providers,

  adapter: Adapters.Prisma.Adapter({ prisma }),

  callbacks: {
    session: async (session, user) => {
      session.uid = user.id
      return Promise.resolve(session)
    }
  }
};

export default (req, res) => NextAuth(req, res, options);
