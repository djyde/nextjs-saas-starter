import { authedProcedure, publicProcedure, router } from "../trpc";

export const rootRouter = router({
  hello: publicProcedure.query(async ({ ctx }) => {
    return "Unauthorized";
  }),
  protected: authedProcedure.query(async ({ ctx }) => {
    return ctx.session.user.name;
  }),
});

export type RootRouter = typeof rootRouter;
