import Head from "next/head";
import { useEffect, useState } from "react";
import NextNProgress from "nextjs-progressbar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { SessionProvider } from "next-auth/react";

import "@styles/globals.css";
import { PRIMARY_500 } from "@colors";
import GlobalStyles from "@GlobalStyles";
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
        <ToastContainer
          draggable
          rtl={false}
          newestOnTop
          pauseOnHover
          closeOnClick
          theme="colored"
          autoClose={5000}
          position="top-right"
          hideProgressBar={false}
          pauseOnFocusLoss={false}
        />
      </SessionProvider>
    </>
  ) : (
    <PageLoader />
  );
}
