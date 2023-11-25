import "@styles/globals.css";

import Head from "next/head";
import GlobalStyles from "@GlobalStyles";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import NextNProgress from "nextjs-progressbar";
import { SessionProvider } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";

import { PRIMARY_500 } from "@colors";
import PageLoader from "@common/PageLoader";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleServiceWorkerRegistration = async () => {
      if ("serviceWorker" in navigator) {
        try {
          const registration = await navigator.serviceWorker.register(
            "/sw.js",
            {
              scope: "/",
            }
          );
          // console.log("Service Worker registration successful:", registration);
        } catch (error) {
          console.error("Service Worker registration failed:", error);
        }
      }
    };

    setIsLoaded(true);
    handleServiceWorkerRegistration();
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
          pauseOnHover
          closeOnClick
          theme="light"
          autoClose={5000}
          newestOnTop={false}
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
