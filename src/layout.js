import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import isPropValid from "@emotion/is-prop-valid";
import ProgressBar from "react-scroll-progress-bar";
import { StyleSheetManager } from "styled-components";

import NavBar from "@common/NavBar";
import { Loader } from "@common/Loader";
import { SECONDARY_500 } from "@colors";
import { IsAuthenticated, SessionStatus, SessionUser } from "@Auth";
import { getSession } from "next-auth/react";

export default function Layout({ title, description, children, privateRoute }) {
  const router = useRouter();
  const user = SessionUser();
  const status = SessionStatus();
  const isAuthenticated = IsAuthenticated();
  const [role, setRole] = useState("loading");

  useEffect(() => {
    getSession().then((session) => {
      setRole(session?.session?.user?.role);
    });
  }, []);

  useEffect(() => {
    if (privateRoute) {
      status !== "loading" && (!isAuthenticated || !role) && router.push("/");
    }
  }, [isAuthenticated, privateRoute, router, status, role]);

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
      <ProgressBar bgcolor={SECONDARY_500} height="0.1875rem" />
      <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
        <NavBar />
        {privateRoute ? (
          status === "loading" ? (
            <Loader flex="1" />
          ) : (
            isAuthenticated && !!role && <main>{children}</main>
          )
        ) : (
          <main>{children}</main>
        )}
      </StyleSheetManager>
    </>
  );
}
