import chroma from "chroma-js";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

import Button, { LargeButton } from "@common/Button";
import FlexBox from "@common/FlexBox";
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
    >
      <LargeButton
        bgColor={WHITE}
        radius="1.3125rem"
        gap="1rem"
        fontSize="1.5rem"
        padding="1.5rem !important"
        textColor={SECONDARY_500}
        textAlign="left"
        justify="flex-start"
        width="100%"
        whiteSpace="nowrap"
        onClick={googleLogInHandler}
      >
        <FcGoogle />
        <span>Continue with Google</span>
      </LargeButton>
      <LargeButton
        bgColor="#1877F2"
        radius="1.3125rem"
        gap="1rem"
        fontSize="1.5rem"
        padding="1.5rem !important"
        textAlign="left"
        justify="flex-start"
        width="100%"
        whiteSpace="nowrap"
        onClick={facebookLogInHandler}
      >
        <BsFacebook />
        <span>Continue with Facebook</span>
      </LargeButton>
    </FlexBox>
  );
};

export default AuthLogInBtns;
