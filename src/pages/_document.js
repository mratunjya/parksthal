import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#71726e" />
        <meta name="apple-mobile-web-app-title" content="ParkSthal"></meta>
        <meta name="application-name" content="ParkSthal"></meta>
        <meta name="msapplication-TileColor" content="#ffffff"></meta>
        <meta
          name="msapplication-TileImage"
          content="/mstile-144x144.png"
        ></meta>
        <meta name="theme-color" content="#ffffff"></meta>
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
