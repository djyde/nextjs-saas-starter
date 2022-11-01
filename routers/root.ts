import { publicProcedure, router } from "../trpc";

export const rootRouter = router({
  hello: publicProcedure.query(async () => {
    return 'Randy'
  })
})

export type RootRouter = typeof rootRouter