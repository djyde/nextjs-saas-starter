import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { PrismaClient } from "@prisma/client";
import Adapters from "next-auth/adapters";
import { prisma, singletonSync } from "../../../utils";

const providers = [];

if (process.env.GITHUB_ID) {
  providers.push(Providers.GitHub({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
  }))
}

const options = {
  // Configure one or more authentication providers
  providers: providers,

  adapter: Adapters.Prisma.Adapter({ prisma: prisma }),

  callbacks: {
    session: async (session, user) => {
      session.uid = user.id
      return Promise.resolve(session)
    }
  }
};

export default (req, res) => NextAuth(req, res, options);
