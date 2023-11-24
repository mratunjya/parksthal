import axios from "axios";
import chroma from "chroma-js";
import Select from "react-select";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useEffect, useMemo, useState } from "react";

import {
  WHITE,
  PRIMARY_100,
  PRIMARY_500,
  TERTIARY_500,
  SECONDARY_100,
  SECONDARY_500,
  FACEBOOK_BLUE,
} from "@colors";
import { Loader } from "@loader";
import { H3, H4 } from "@common/Text";
import checkSvg from "./assets/check.svg";
import { FlexBox } from "@common/FlexBox";
import CommonImage from "@common/CommonImage";
import { LargeButton, SmallButton } from "@common/Button";
import { IsAuthenticated, SessionStatus, SessionUser } from "@Auth";

const AuthLogInBtns = () => {
  const user = SessionUser();
  const router = useRouter();
  const sessionStatus = SessionStatus();
  const isAuthenticated = IsAuthenticated();
  const [isLoading, setIsLoading] = useState(false);
  const [isSaveClicked, setSaveClicked] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    // Handle the selected option as needed
    setSelectedOption(selectedOption);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setSaveClicked(true);

    const payload = { email: user.email, role: selectedOption.value };

    axios
      .put("http://localhost:4000/api/users/update", payload)
      .catch((err) => {
        console.log(err);
        setSaveClicked(false);
      })
      .finally(() => {
        router.push("dashboard");
      });
  };

  const selectStyles = {
    control: (styles) => ({
      ...styles,
      cursor: "pointer",
      boxShadow: PRIMARY_500,
      border: `2px solid ${PRIMARY_500}`,
      ":hover": {
        ...styles[":hover"],
        borderColor: PRIMARY_500,
      },
    }),
    menu: (styles) => ({
      ...styles,
      overflow: "hidden",
      borderColor: "red",
      borderRadius: "10px",
      boxShadow: `0 0 8px 1px ${TERTIARY_500}`,
    }),
    option: (styles, { isSelected }) => ({
      ...styles,
      cursor: "pointer",
      color: isSelected ? WHITE : SECONDARY_500,
      backgroundColor: isSelected ? PRIMARY_500 : null,
      ":active": {
        ...styles[":active"],
        color: WHITE,
        backgroundColor: PRIMARY_100,
      },
    }),
  };

  const selectOptions = useMemo(
    () => [
      { value: "consumer", label: "Consumer" },
      { value: "attendant", label: "Attendant" },
      { value: "owner", label: "Owner" },
    ],
    []
  );

  const googleLogInHandler = () => {
    signIn("google");
    setIsLoading(true);
  };

  const facebookLogInHandler = () => {
    signIn("facebook");
    setIsLoading(true);
  };

  useEffect(() => {
    handleChange(selectOptions[0]);
  }, [selectOptions]);

  return (
    <FlexBox
      gap="2.5rem"
      direction="column"
      widthMobile="100%"
      minWidth="31.25rem"
      radiusMobile="3rem"
      textTransform="none"
      minWidthMobile="unset"
      padding="3.75rem 3.4375rem"
      gapMobile={isLoading ? "3rem" : "2rem"}
      radius={isLoading ? "5rem" : "5.625rem"}
      bgColor={chroma(SECONDARY_100).brighten(0.7).hex()}
      paddingMobile={isLoading ? "2rem 2rem 4rem" : "2rem"}
    >
      {isLoading ? (
        <>
          <H3>Authenticating ...</H3>
          <Loader />
        </>
      ) : sessionStatus === "loading" ? (
        <>
          <H3>Getting session Status ...</H3>
          <Loader />
        </>
      ) : isAuthenticated ? (
        <>
          <H3>Authenticated Successfully !</H3>
          {user.role ? (
            <CommonImage
              width={100}
              alt={"check"}
              src={checkSvg}
              align="center"
              margin={"1.25rem 0 0"}
            />
          ) : (
            <FlexBox direction="column" gap="1.5rem">
              <H4>Select your role for using our web app</H4>
              <form onSubmit={handleSubmit}>
                <FlexBox direction="column" width="50%" gap="0.75rem">
                  <FlexBox display="block">
                    <Select
                      onChange={handleChange}
                      autoFocus
                      isClearable={false}
                      isSearchable={false}
                      styles={selectStyles}
                      options={selectOptions}
                      classNamePrefix="select"
                      placeholder="Select a role"
                      defaultValue={selectOptions[0]}
                    />
                  </FlexBox>
                  <SmallButton width="fit-content" disabled={isSaveClicked}>
                    {isSaveClicked ? <Loader color={WHITE} /> : "Save"}
                  </SmallButton>
                </FlexBox>
              </form>
            </FlexBox>
          )}
        </>
      ) : (
        <>
          <H3 className="only-mobile">Continue with</H3>
          <FlexBox direction="column" gap="2.5rem" gapMobile="1.5rem">
            <LargeButton
              onClick={googleLogInHandler}
              gap="1rem"
              width="100%"
              bgColor={WHITE}
              textAlign="left"
              radius="1.3125rem"
              whiteSpace="nowrap"
              justify="flex-start"
              textColor={SECONDARY_500}
              padding="1.5rem !important"
              paddingMobile="1rem !important"
            >
              <FcGoogle />
              <span>
                <span className="no-mobile">Continue with</span> Google
              </span>
            </LargeButton>
            <LargeButton
              onClick={facebookLogInHandler}
              gap="1rem"
              width="100%"
              textAlign="left"
              radius="1.3125rem"
              whiteSpace="nowrap"
              justify="flex-start"
              bgColor={FACEBOOK_BLUE}
              padding="1.5rem !important"
              paddingMobile="1rem !important"
            >
              <BsFacebook />
              <span>
                <span className="no-mobile">Continue with</span> Facebook
              </span>
            </LargeButton>
          </FlexBox>
        </>
      )}
    </FlexBox>
  );
};

export default AuthLogInBtns;
