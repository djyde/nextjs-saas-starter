import { z } from 'zod';
import { procedure, router } from '../trpc';

export const rootRouter = router({
  hello: procedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
});

// export type definition of API
export type RootRouter = typeof rootRouter;