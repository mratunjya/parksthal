import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

import Layout from "@layout";
import {
  POST_IS_ANY_MISSING_DETAILS_OWNER,
  POST_IS_ANY_MISSING_DETAILS_CONSUMER,
  POST_IS_ANY_MISSING_DETAILS_ATTENDANT,
} from "@apis";
import { FlexBox } from "@common/FlexBox";
import { getSession } from "next-auth/react";
import { PRIMARY_500, WHITE } from "@colors";
import DashboardRight from "./DashBoardRight";
import Profile from "@components/Dashboard/Profile";
import DashboardLeft from "@components/Dashboard/DasbboardLeft";

const DashboardAllRoutes = () => {
  const router = useRouter();
  const dashboardRightRef = useRef();
  const [user, setUser] = useState({});
  const [routerQuery, setRouterQuery] = useState();
  const [navBarHeight, setNavBarHeight] = useState(0);
  const [title, setTitle] = useState("ParkSthal: Dashboard");
  const [missingDetailsApi, setMissingDetailsApi] = useState("");
  const [dashboardRightHeight, setDashboardRightHeight] = useState(null);

  useEffect(() => {
    getSession().then((session) => {
      setUser(session?.session?.user);
    });
  }, [router]);

  useEffect(() => {
    setDashboardRightHeight(dashboardRightRef?.current?.offsetHeight);
  }, [dashboardRightRef?.current?.offsetHeight]);

  useEffect(() => {
    setNavBarHeight(document.querySelector("nav").offsetHeight);
  }, []);

  useEffect(() => {
    if (user) {
      if (user?.role == "consumer")
        setMissingDetailsApi(POST_IS_ANY_MISSING_DETAILS_CONSUMER);
      else if (user?.role == "attendant")
        setMissingDetailsApi(POST_IS_ANY_MISSING_DETAILS_ATTENDANT);
      else if (user?.role == "owner")
        setMissingDetailsApi(POST_IS_ANY_MISSING_DETAILS_OWNER);
    }
  }, [user]);

  useEffect(() => {
    if (router.isReady) {
      setRouterQuery(router?.query["sub-routes"]);
    }
  }, [router]);

  useEffect(() => {
    const payload = { email: user?.email };
    if (payload?.email) {
      axios
        .post(missingDetailsApi, payload)
        .then((response) => {
          if (response.data.missing) {
            router.push("profile");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [missingDetailsApi, router, user]);

  return (
    <Layout title={title} privateRoute>
      <FlexBox
        flex="1"
        paddingMobile="1rem 0"
        align="center"
        justify="center"
        alignMobile="flex-start"
        bgImage="/assets/dashboard/background.svg"
      >
        <FlexBox
          flex="0.8667"
          radius="2rem"
          maxWidth="75rem"
          flexMobile="unset"
          radiusMobile="1rem"
          widthMobile="86.67%"
          bgColor={PRIMARY_500}
          border={`2rem solid ${WHITE}`}
          borderMobile={`1rem solid ${WHITE}`}
          height={`calc(100vh - ${navBarHeight}px - 2rem)`}
          heightMobile={`calc(100vh - ${navBarHeight}px - 1.5rem)`}
        >
          <FlexBox
            flex="1"
            wrap="wrap"
            radius="1rem"
            gap="0.125rem"
            maxWidth="75rem"
            widthMobile="100%"
            wrapMobile="nowrap"
            ref={dashboardRightRef}
            directionMobile="column"
          >
            <DashboardLeft user={user} routerQuery={routerQuery} />
            <FlexBox
              flex="7"
              bgColor={WHITE}
              direction="column"
              flexMobile="unset"
              position="relative"
              heightMobile="100vh"
              padding="0 0 0 2rem"
              overflowMobile="auto"
              maxHeightMobile="100vh"
              paddingMobile="1rem 0 0 0"
            >
              {routerQuery === "profile" ? (
                <Profile user={user} />
              ) : (
                <DashboardRight
                  user={user}
                  setTitle={setTitle}
                  routerQuery={routerQuery}
                  dashboardRightHeight={dashboardRightHeight}
                />
              )}
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </Layout>
  );
};

export default DashboardAllRoutes;
