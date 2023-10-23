import * as trpcNext from '@trpc/server/adapters/next';
import { rootRouter } from '../../../server/trpc/routers/root';
import { createContext } from '../../../server/trpc/context';

// export API handler
// @see https://trpc.io/docs/server/adapters
export default trpcNext.createNextApiHandler({
  router: rootRouter,
  createContext: createContext,
});