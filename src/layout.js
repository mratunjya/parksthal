import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import isPropValid from "@emotion/is-prop-valid";
import ProgressBar from "react-scroll-progress-bar";
import { StyleSheetManager } from "styled-components";

import NavBar from "@common/NavBar";
import { Loader } from "@common/Loader";
import { SECONDARY_500 } from "@colors";
import { IsAuthenticated, SessionStatus } from "@Auth";

export default function Layout({ title, description, children, privateRoute }) {
  const router = useRouter();
  const status = SessionStatus();
  const isAuthenticated = IsAuthenticated();

  useEffect(() => {
    if (privateRoute) {
      status !== "loading" && !isAuthenticated && router.push("log-in");
    }
  }, [isAuthenticated, privateRoute, router, status]);

  return (
    <>
      <Head>
        <title>
          {title || "ParkSthal: Your Premier Parking Booking Experience"}
        </title>
        <meta
          name="description"
          content={
            description ||
            "Discover seamless parking solutions with ParkEase. Find, book, and secure your parking spot effortlessly. Explore our user-friendly platform today."
          }
        />
      </Head>
      <ProgressBar bgcolor={SECONDARY_500} height="3px" />
      <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
        <NavBar />
        {privateRoute ? (
          status === "loading" ? (
            <Loader flex="1" />
          ) : (
            isAuthenticated && <main>{children}</main>
          )
        ) : (
          <main>{children}</main>
        )}
      </StyleSheetManager>
    </>
  );
}
