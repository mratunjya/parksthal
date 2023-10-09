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
    </Layout>
  );
};

export default LogIn;
