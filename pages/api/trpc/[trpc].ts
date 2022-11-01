import * as trpcNext from "@trpc/server/adapters/next";
import { rootRouter } from "../../../routers/root";

// export API handler
export default trpcNext.createNextApiHandler({
  router: rootRouter,
  createContext: () => ({}),
});
