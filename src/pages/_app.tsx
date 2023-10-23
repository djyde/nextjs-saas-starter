import type { AppType } from 'next/app';
import { ClerkProvider } from "@clerk/nextjs";
import { trpc } from '../utils/trpc';
import '../main.css'

const MyApp: AppType = ({ Component, pageProps }) => {
  return <ClerkProvider>
    <Component {...pageProps} />;
  </ClerkProvider>
};

export default trpc.withTRPC(MyApp);