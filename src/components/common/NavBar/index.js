import chroma from "chroma-js";
import { useEffect, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

import { H5 } from "@common/Text";
import { LogOut } from "@utils/LogOut";
import { FlexBox } from "@common/FlexBox";
import CommonLink from "@common/CommonLink";
import { SmallButton } from "@common/Button";
import CommonImage from "@common/CommonImage";
import { IsAuthenticated, SessionStatus } from "@Auth";
import { navLinksData } from "@meta/NavBar/navLinksData";
import {
  WHITE,
  BLACK,
  TERTIARY_200,
  SECONDARY_200,
  SECONDARY_400,
  WHATSAPPGREEN,
} from "@colors";

import {
  NavBar,
  NavCta,
  AllNavLinks,
  NavBarWrapper,
  FallBackNavBar,
  HamBurgerButton,
  OnlyMobileNavBar,
} from "./indexStyle";
import { Loader } from "@common/Loader";
import styled from "styled-components";

const WhatsappWrapper = styled(FlexBox)`
  &:hover {
    svg {
      scale: 1.25;
    }
  }
`;

const CommonNavBar = () => {
  const isAuthenticated = IsAuthenticated();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLogOutClick, setIsLogOutClick] = useState(false);
  const isSessionStatusLoading = SessionStatus() === "loading";

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isNavOpen]);

  const openNavBar = () => {
    setIsNavOpen(true);
  };

  const closeNavBar = () => {
    setIsNavOpen(false);
  };

  const RenderLogo = () => (
    <CommonLink href="/">
      <CommonImage
        src="/assets/parksthal-logo.svg"
        width={150}
        height={22.12}
        alt="ParkSthal Logo"
        objectFit={"cover"}
      ></CommonImage>
    </CommonLink>
  );

  const RenderAllNavLinks = () =>
    navLinksData.map((navLink, index) => (
      <CommonLink href={navLink.href} key={index}>
        <NavCta
          onClick={closeNavBar}
          align="center"
          justify="center"
          padding="0.5rem"
          toUpper
          border="2px solid transparent"
          radius="0.5rem"
          bgColor="transparent"
        >
          <H5 whiteSpace="nowrap" color={SECONDARY_400}>
            {navLink.name}
          </H5>
        </NavCta>
      </CommonLink>
    ));

  const RenderWhatsAppBtn = () => (
    <CommonLink
      target="_blank"
      href="https://api.whatsapp.com/send?phone=9997168704"
    >
      <WhatsappWrapper
        ratio="1"
        radius="50%"
        width="2.5rem"
        align="center"
        justify="center"
        bgColor={WHATSAPPGREEN}
      >
        <BsWhatsapp color={WHITE} />
      </WhatsappWrapper>
    </CommonLink>
  );

  const RenderLogInLogOut = () =>
    isSessionStatusLoading ? (
      <SmallButton>
        <Loader color={TERTIARY_200} />
      </SmallButton>
    ) : isAuthenticated ? (
      <SmallButton
        onClick={() => {
          setIsLogOutClick(true);
          LogOut();
        }}
        disabled={isLogOutClick}
      >
        {isLogOutClick ? <Loader color={TERTIARY_200} /> : "Log Out"}
      </SmallButton>
    ) : (
      <CommonLink href="/log-in">
        <SmallButton>Log In</SmallButton>
      </CommonLink>
    );

  return (
    <>
      <NavBarWrapper
        top="0"
        left="0"
        align="center"
        justify="center"
        position="sticky"
        bgColor={chroma(WHITE).alpha(0.75).css()}
        bgColorMobile={WHITE}
      >
        <NavBar
          align="center"
          bgColor={WHITE}
          justify="space-between"
          padding="0.75rem 1.5rem"
          paddingMobile="0"
          gap="1rem"
        >
          <RenderLogo />
          <AllNavLinks
            align="center"
            gap="1.5rem"
            position="relative"
            wrap="wrap"
            justify="flex-end"
            rowGap="0.5rem"
          >
            <FlexBox align="center" justify="center" gap="0.75rem">
              <RenderAllNavLinks />
            </FlexBox>
            <RenderWhatsAppBtn />
            <RenderLogInLogOut />
          </AllNavLinks>
          <HamBurgerButton
            display="none"
            displayMobile="flex"
            width="fit-content"
            padding="0.5rem 0 0.5rem 0.5rem"
            onClick={isNavOpen ? closeNavBar : openNavBar}
          >
            {isNavOpen ? (
              <RxCross1 size={24} color={SECONDARY_200} />
            ) : (
              <RxHamburgerMenu size={24} color={SECONDARY_200} />
            )}
          </HamBurgerButton>
        </NavBar>
      </NavBarWrapper>
      <FlexBox>
        {isNavOpen && (
          <FallBackNavBar
            onClick={closeNavBar}
            width="30%"
            zIndex="2"
            height="100%"
            align="center"
            display="none"
            justify="center"
            position="fixed"
            direction="column"
            padding="2rem 1rem"
            displayMobile="flex"
            bgColor={chroma(BLACK).alpha(0.4).css()}
          />
        )}
        <OnlyMobileNavBar
          isNavBarOpen={isNavOpen}
          width="70%"
          gap="1.5rem"
          zIndex="100"
          height="100%"
          display="none"
          position="fixed"
          align="flex-start"
          direction="column"
          displayMobile="flex"
          padding="2rem 1.5rem"
          bgColor={chroma(WHITE).alpha(0.8).css()}
        >
          <FlexBox gap="0.75rem" align="flex-start" direction="column">
            <RenderAllNavLinks />
          </FlexBox>
          <FlexBox gap="1rem" align="center" justify="center">
            <RenderWhatsAppBtn />
            <RenderLogInLogOut />
          </FlexBox>
        </OnlyMobileNavBar>
      </FlexBox>
    </>
  );
};

export default CommonNavBar;
