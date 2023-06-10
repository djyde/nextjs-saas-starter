import { initTRPC } from '@trpc/server';
// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
export const trpcInstance = initTRPC.create();
