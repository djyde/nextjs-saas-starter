import { LogtoContext } from "@logto/next";
import { TRPCError, initTRPC } from "@trpc/server";

type Context = {
  user: LogtoContext;
};
const t = initTRPC.context<Context>().create();

const authMiddleware = t.middleware(({ next, ctx }) => {
  if (!ctx.user.isAuthenticated) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
    });
  }
  return next({
    ctx: ctx,
  });
});

export const router = t.router;
export const publicProcedure = t.procedure;
export const authedProcedure = t.procedure.use(authMiddleware);
