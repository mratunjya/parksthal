import chroma from "chroma-js";
import { BsWhatsapp } from "react-icons/bs";
import { useEffect, useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

import { H5 } from "@common/Text";
import { LogOut } from "@utils/LogOut";
import { Loader } from "@common/Loader";
import { FlexBox } from "@common/FlexBox";
import { WHATSAPP_URL } from "@constants";
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
  WHATSAPP_GREEN,
} from "@colors";

import {
  NavBar,
  NavCta,
  AllNavLinks,
  NavBarWrapper,
  FallBackNavBar,
  HamBurgerButton,
  WhatsappWrapper,
  OnlyMobileNavBar,
} from "./indexStyle";

const CommonNavBar = () => {
  const isAuthenticated = IsAuthenticated();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLogOutClick, setIsLogOutClick] = useState(false);
  const isSessionStatusLoading = SessionStatus() === "loading";

  useEffect(() => {
    isNavOpen
      ? document.body.classList.add("no-overflow")
      : document.body.classList.remove("no-overflow");
  }, [isNavOpen]);

  const openNavBar = () => {
    setIsNavOpen(true);
  };

  const closeNavBar = () => {
    setIsNavOpen(false);
  };

  const RenderLogo = () => (
    <CommonLink href="/log-in">
      <CommonImage
        width={150}
        height={22.12}
        objectFit={"cover"}
        alt="ParkSthal Logo"
        src="/assets/parksthal-logo.svg"
      />
    </CommonLink>
  );

  const RenderAllNavLinks = () =>
    navLinksData.map((navLink, index) => (
      <CommonLink href={navLink.href} key={index}>
        <NavCta
          onClick={closeNavBar}
          toUpper
          align="center"
          radius="0.5rem"
          justify="center"
          padding="0.5rem"
          bgColor="transparent"
          border="2px solid transparent"
        >
          <H5 whiteSpace="nowrap" color={SECONDARY_400}>
            {navLink.name}
          </H5>
        </NavCta>
      </CommonLink>
    ));

  const RenderWhatsAppBtn = () => (
    <CommonLink target="_blank" href={WHATSAPP_URL}>
      <WhatsappWrapper
        ratio="1"
        radius="50%"
        width="2.5rem"
        align="center"
        justify="center"
        bgColor={WHATSAPP_GREEN}
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
          LogOut();
          setIsLogOutClick(true);
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
        bgColorMobile={WHITE}
        bgColor={chroma(WHITE).alpha(0.75).css()}
      >
        <NavBar
          gap="1rem"
          align="center"
          bgColor={WHITE}
          paddingMobile="0"
          justify="space-between"
          padding="0.75rem 1.5rem"
        >
          <RenderLogo />
          <AllNavLinks
            wrap="wrap"
            gap="1.5rem"
            align="center"
            rowGap="0.5rem"
            justify="flex-end"
            position="relative"
          >
            <FlexBox align="center" justify="center" gap="0.75rem">
              <RenderAllNavLinks />
            </FlexBox>
            <FlexBox gap="1.5rem" align="center" justify="center">
              <RenderWhatsAppBtn />
              <RenderLogInLogOut />
            </FlexBox>
          </AllNavLinks>
          <HamBurgerButton
            display="none"
            width="fit-content"
            displayMobile="flex"
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
            zIndex="2"
            width="30%"
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
