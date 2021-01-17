import "reflect-metadata";
import { ApolloServer } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse } from "next";
import { buildSchema } from "type-graphql";
import InitResolver from "../../gql/resolvers/InitResolver";
import { prisma, singleton } from "../../utils";
import type { GqlContext } from "../../utils";
import { getSession } from "next-auth/client";
import { Container } from "typedi";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const session = getSession({ req })

  const apolloServer = await singleton("apolloServer", async () => {
    const schema = await buildSchema({
      resolvers: [InitResolver],
      container: Container
    });

    return new ApolloServer({
      schema,
      context: () => ({ prisma: prisma, session } as GqlContext),
    });
  });

  const gqlHandler = apolloServer.createHandler({
    path: "/api/gql",
  });

  return gqlHandler(req, res);
}
