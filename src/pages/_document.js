import { ServerStyleSheet } from "styled-components";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico"></link>
          <link rel="manifest" href="/manifest.json"></link>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          ></link>
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          ></link>
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          ></link>
          <link rel="manifest" href="/webmanifest.json"></link>
          <link
            rel="mask-icon"
            href="/safari-pinned-tab.svg"
            color="#71726e"
          ></link>
          <meta name="apple-mobile-web-app-title" content="ParkSthal"></meta>
          <meta name="application-name" content="ParkSthal"></meta>
          <meta name="msapplication-TileColor" content="#ffffff"></meta>
          <meta
            name="msapplication-TileImage"
            content="/mstile-144x144.png"
          ></meta>
          <meta name="theme-color" content="#ffffff"></meta>
          <meta name="msapplication-config" content="/browserconfig.xml"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
