import * as trpcNext from '@trpc/server/adapters/next';
import { rootRouter } from '../../../trpc/routers/root';

export default trpcNext.createNextApiHandler({
  router: rootRouter,
  createContext: () => ({}),
});