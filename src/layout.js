import Head from "next/head";
import ProgressBar from "react-scroll-progress-bar";

import NavBar from "@common/NavBar";
import { SECONDARY_500 } from "@colors";

export default function Layout({ title, description, children }) {
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
      <NavBar />
      <main>{children}</main>
    </>
  );
}
