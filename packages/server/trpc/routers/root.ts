import { z } from 'zod';
import { router } from '.';
import { publicProducer } from '../producers';

export const rootRouter = router({
  hello: publicProducer
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