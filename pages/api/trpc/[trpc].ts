import * as trpcNext from "@trpc/server/adapters/next";
import { unstable_getServerSession } from "next-auth";
import { rootRouter } from "../../../routers/root";
import { logtoClient } from "../../../utils.server";
import { authOptions } from "../auth/[...nextauth]";
// export API handler
export default trpcNext.createNextApiHandler({
  router: rootRouter,
  async createContext(ctx) {
    const session = await unstable_getServerSession(ctx.req, ctx.res, authOptions)
    return {
      session
    };
  },
});
