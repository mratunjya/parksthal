import chroma from "chroma-js";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

import { H3 } from "@common/Text";
import FlexBox from "@common/FlexBox";
import Button, { LargeButton } from "@common/Button";
import { BLACK, SECONDARY_100, SECONDARY_500, WHITE } from "@colors";

const AuthLogInBtns = () => {
  const googleLogInHandler = () => {
    signIn("google");
  };

  const facebookLogInHandler = () => {
    signIn("facebook");
  };

  return (
    <FlexBox
      bgColor={chroma(SECONDARY_100).brighten(0.7).hex()}
      padding="3.75rem 3.4375rem"
      radius="5.625rem"
      textTransform="none"
      direction="column"
      gap="1.5rem"
      minWidth="31.25rem"
      paddingMobile="2rem"
      radiusMobile="2rem"
      minWidthMobile="unset"
      widthMobile="100%"
    >
      <H3 className="only-mobile">Continue with</H3>
      <LargeButton
        bgColor={WHITE}
        radius="1.3125rem"
        gap="1rem"
        padding="1.5rem !important"
        paddingMobile="1rem !important"
        textColor={SECONDARY_500}
        textAlign="left"
        justify="flex-start"
        width="100%"
        whiteSpace="nowrap"
        onClick={googleLogInHandler}
      >
        <FcGoogle />
        <span>
          <span className="no-mobile">Continue with</span> Google
        </span>
      </LargeButton>
      <LargeButton
        bgColor="#1877F2"
        radius="1.3125rem"
        gap="1rem"
        padding="1.5rem !important"
        paddingMobile="1rem !important"
        textAlign="left"
        justify="flex-start"
        width="100%"
        whiteSpace="nowrap"
        onClick={facebookLogInHandler}
      >
        <BsFacebook />
        <span>
          <span className="no-mobile">Continue with</span> Facebook
        </span>
      </LargeButton>
    </FlexBox>
  );
};

export default AuthLogInBtns;
