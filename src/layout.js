import Head from "next/head";
import isPropValid from "@emotion/is-prop-valid";
import { StyleSheetManager } from "styled-components";

export default function Layout({ title, description, children }) {
  return (
    <>
      <Head>
        <title>{title || "ParkSthal"}</title>
        <meta name="description" content={description || ""} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
        <main>{children}</main>
      </StyleSheetManager>
    </>
  );
}
