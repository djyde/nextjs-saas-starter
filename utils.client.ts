import { httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import axios from "axios";
import { resolvedConfig } from "./config.server";
import { RootRouter } from "./routers/root";

export const apiClient = axios.create({
  baseURL: "/api",
});

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
