import { NextApiRequest, NextApiResponse } from "next";
import { apolloServer } from "../../gql";

export const config = {
  api: {
    bodyParser: false
  }
}

const gqlHandler = apolloServer.createHandler({
  path: '/api/gql'
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  return gqlHandler(req, res);
}