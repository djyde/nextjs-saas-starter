import { createTRPCNext } from "@trpc/next";
import { RootRouter } from "./routers/root";
import { httpBatchLink } from "@trpc/client";
import { resolvedConfig } from "./config.server";

export const singleton = async <T>(id: string, fn: () => Promise<T>) => {
  if (process.env.NODE_ENV === "production") {
    return await fn();
  } else {
    if (!global[id]) {
      global[id] = await fn();
    }
    return global[id] as T;
  }
};

export const singletonSync = <T>(id: string, fn: () => T) => {
  if (process.env.NODE_ENV === "production") {
    return fn();
  } else {
    if (!global[id]) {
      global[id] = fn();
    }
    return global[id] as T;
  }
};


export const trpc = createTRPCNext<RootRouter>({
  config({ ctx }) {
    return {
      links: [
        httpBatchLink({
          /**
           * If you want to use SSR, you need to use the server's full URL
           * @link https://trpc.io/docs/ssr
           **/
          url: `${resolvedConfig.baseUrl()}/api/trpc`,
        }),
      ],
      /**
       * @link https://tanstack.com/query/v4/docs/reference/QueryClient
       **/
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   **/
  ssr: true,
});
