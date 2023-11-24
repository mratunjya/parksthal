import { useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import Layout from "@layout";
import { H1 } from "@common/Text";
import { Loader } from "@common/Loader";
import { FlexBox } from "@common/FlexBox";
import AuthLogInBtns from "@components/Log-In/AuthLogInBtns";
import { IsAuthenticated, SessionStatus, SessionUser } from "@Auth";

const Wrapper = styled(FlexBox)``;

const LogIn = () => {
  const user = SessionUser();
  const router = useRouter();
  const status = SessionStatus();
  const isAuthenticated = IsAuthenticated();

  useEffect(() => {
    if (user?.role) {
      router.push("dashboard");
    }
  }, [router, user]);

  return (
    <Layout title="ParkSthal: Log In">
      {status === "loading" ? (
        <Loader flex="1" />
      ) : (
        !user?.role && (
          <Wrapper
            padding="2rem 2rem 5rem"
            width="86.67%"
            maxWidth="75rem"
            margin="0 auto"
            align="center"
            justify="space-between"
            gap="1.5rem"
            wrapMobile="wrap"
            justifyMobile="flex-start"
            heightMobile="unset"
            paddingMobile="1.5rem 0"
            flex="1"
            flexMobile="unset"
          >
            <H1>
              Welcome to ParkSthal!
              <br />
              <br />
              Kindly log using <br className="no-mobile" />
              Google or Facebook
            </H1>
            <AuthLogInBtns />
          </Wrapper>
        )
      )}
    </Layout>
  );
};

export default LogIn;
