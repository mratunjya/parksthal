import "@styles/globals.css";
import GlobalStyles from "@GlobalStyles";
import NextNProgress from "nextjs-progressbar";
import { SessionProvider } from "next-auth/react";

import { PRIMARY_500 } from "@colors";
import PageLoader from "@common/PageLoader";
import { useEffect, useState } from "react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return isLoaded ? (
    <>
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
