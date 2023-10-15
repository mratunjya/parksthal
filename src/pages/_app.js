import "@styles/globals.css";
import GlobalStyles from "@GlobalStyles";
import NextNProgress from "nextjs-progressbar";
import { SessionProvider } from "next-auth/react";

import { PRIMARY_500 } from "@colors";
import PageLoader from "@common/PageLoader";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return isLoaded ? (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyles />
      <NextNProgress
        color={PRIMARY_500}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  ) : (
    <PageLoader />
  );
}
