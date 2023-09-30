import chroma from "chroma-js";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

import { Loader } from "@loader";
import { H3 } from "@common/Text";
import { FlexBox } from "@common/FlexBox";
import { LargeButton } from "@common/Button";
import { SECONDARY_100, SECONDARY_500, WHITE } from "@colors";

const AuthLogInBtns = () => {
  const [isLoading, setIsLoading] = useState(false);

  const googleLogInHandler = () => {
    signIn("google");
    setIsLoading(true);
  };

  const facebookLogInHandler = () => {
    signIn("facebook");
    setIsLoading(true);
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
      {isLoading ? (
        <>
          <H3>Authenticating ..</H3>
          <Loader />
        </>
      ) : (
        <>
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
        </>
      )}
    </FlexBox>
  );
};

export default AuthLogInBtns;
