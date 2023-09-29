import styled from "styled-components";

import Layout from "@layout";
import { H1 } from "@common/Text";
import { FlexBox } from "@common/FlexBox";
import AuthLogInBtns from "@components/Log-In/AuthLogInBtns";

const Wrapper = styled(FlexBox)``;

const LogIn = () => {
  return (
    <Layout title="ParkSthal: Log In">
      <Wrapper
        width="86.67%"
        maxWidth="75rem"
        margin="0 auto"
        align="center"
        justify="space-between"
        gap="1.5rem"
        height="calc(100vh - 3.4375rem)"
        wrapMobile="wrap"
        justifyMobile="flex-start"
        heightMobile="unset"
        paddingMobile="24px 0"
      >
        <H1>
          Welcome to ParkSthal!
          <br />
          <br />
          Please log in to ParkSthal using <br className="no-mobile" />
          Google or Facebook
        </H1>
        <AuthLogInBtns />
      </Wrapper>
    </Layout>
  );
};

export default LogIn;
