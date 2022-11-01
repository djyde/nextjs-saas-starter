import * as trpcNext from "@trpc/server/adapters/next";
import { rootRouter } from "../../../routers/root";
import { getIronSession } from "iron-session/edge";
import { logtoClient } from "../../../utils.server";
// export API handler
export default logtoClient.withLogtoApiRoute(
  trpcNext.createNextApiHandler({
    router: rootRouter,
    async createContext(ctx) {
      return {
        user: ctx.req.user,
      };
    },
  })
);
