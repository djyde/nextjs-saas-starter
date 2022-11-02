import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { resolvedConfig } from "../../../config.server";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../prisma";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: resolvedConfig.auth.github.clientId,
      clientSecret: resolvedConfig.auth.github.secret,
    }),
    // ...add more providers here
  ],
};
export default NextAuth(authOptions);
