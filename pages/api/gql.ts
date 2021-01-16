import "reflect-metadata";
import { ApolloServer } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse } from "next";
import { buildSchema } from "type-graphql";
import InitResolver from "../../gql/resolvers/InitResolver";
import { Context, prisma, singleton } from "../../utils";
import { getSession } from "next-auth/client";

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
    });

    return new ApolloServer({
      schema,
      context: () => ({ prisma: prisma, session } as Context),
    });
  });

  const gqlHandler = apolloServer.createHandler({
    path: "/api/gql",
  });

  return gqlHandler(req, res);
}
