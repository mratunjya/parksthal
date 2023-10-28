import "@styles/globals.css";

import Head from "next/head";
import GlobalStyles from "@GlobalStyles";
import { useEffect, useState } from "react";
import NextNProgress from "nextjs-progressbar";
import { SessionProvider } from "next-auth/react";

import { PRIMARY_500 } from "@colors";
import PageLoader from "@common/PageLoader";

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
        height={3}
        stopDelayMs={200}
        color={PRIMARY_500}
        startPosition={0.3}
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
