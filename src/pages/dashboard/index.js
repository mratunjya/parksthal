import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Layout from "@layout";
import {
  POST_IS_ANY_MISSING_DETAILS_OWNER,
  POST_IS_ANY_MISSING_DETAILS_CONSUMER,
  POST_IS_ANY_MISSING_DETAILS_ATTENDANT,
} from "@apis";
import { FlexBox } from "@common/FlexBox";
import { getSession } from "next-auth/react";
import { PRIMARY_500, WHITE } from "@colors";
import DashboardLeft from "@components/Dashboard/DasbboardLeft";
import DashboardRight from "@components/Dashboard/DashBoardRight";

const Dashboard = () => {
  const router = useRouter();
  const [user, setUser] = useState({});
  const [navBarHeight, setNavBarHeight] = useState(0);
  const [missingDetailsApi, setMissingDetailsApi] = useState("");

  useEffect(() => {
    getSession().then((session) => {
      setUser(session?.session?.user);
    });
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
    const payload = { email: user?.email };
    if (payload?.email && missingDetailsApi) {
      axios
        .post(missingDetailsApi, payload)
        .then((response) => {
          if (response?.data?.missing) {
            router.push("dashboard/profile");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [router, user, missingDetailsApi]);

  useEffect(() => {
    setNavBarHeight(document.querySelector("nav").offsetHeight);
  }, [router]);

  return (
    <Layout title="ParkSthal: Dashboard" privateRoute>
      <FlexBox
        flex="1"
        align="center"
        justify="center"
        bgImage="/assets/dashboard/background.svg"
      >
        <FlexBox
          flex="0.8667"
          radius="2rem"
          maxWidth="75rem"
          bgColor={PRIMARY_500}
          border={`2rem solid ${WHITE}`}
          height={`calc(100vh - ${navBarHeight}px - 2rem)`}
        >
          <FlexBox flex="1" gap="2px" radius="1rem" maxWidth="75rem">
            <DashboardLeft user={user} routerQuery="index" />
            <FlexBox
              flex="7"
              align="center"
              bgColor={WHITE}
              justify="center"
              direction="column"
              padding="0 0 0 2rem"
            >
              <DashboardRight routerQuery="index" />
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </Layout>
  );
};

export default Dashboard;
