import chroma from "chroma-js";
import { useEffect, useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

import { H5 } from "@common/Text";
import { LogOut } from "@utils/LogOut";
import { FlexBox } from "@common/FlexBox";
import CommonLink from "@common/CommonLink";
import { SmallButton } from "@common/Button";
import CommonImage from "@common/CommonImage";
import { navLinksData } from "@meta/NavBar/navLinksData";
import { IsAuthenticated } from "@utils/IsAuthenticated";
import { BLACK, SECONDARY_200, SECONDARY_400, WHITE } from "@colors";

import {
  NavBarWrapper,
  NavBar,
  AllNavLinks,
  OnlyMobileNavBar,
  HamBurgerButton,
  FallBackNavBar,
  NavCta,
} from "./indexStyle";

const CommonNavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
    });
  }, []);

  const openNavBar = () => {
    setIsNavOpen(true);
  };

  const closeNavBar = () => {
    setIsNavOpen(false);
  };

  const RenderAllNavLinks = () =>
    navLinksData.map((navLink, index) => (
      <CommonLink href={navLink.href} key={index}>
        <NavCta
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

  return (
    <>
      <NavBarWrapper
        top="0"
        left="0"
        align="center"
        justify="center"
        position="sticky"
        bgColor={chroma(WHITE).alpha(0.75).css()}
      >
        <NavBar
          justify="space-between"
          align="center"
          bgColor={WHITE}
          padding="0.75rem 1.5rem"
        >
          <CommonLink href="/">
            <CommonImage
              src="/assets/parksthal-logo.svg"
              width={150}
              height={22.12}
              alt="ParkSthal Logo"
              objectFit={"cover"}
            ></CommonImage>
          </CommonLink>
          <AllNavLinks align="center" gap="1.5rem" position="relative">
            <FlexBox align="center" justify="center" gap="0.75rem">
              <RenderAllNavLinks />
            </FlexBox>
            {IsAuthenticated() && (
              <SmallButton onClick={LogOut}>Log Out</SmallButton>
            )}
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
        {IsAuthenticated() && (
          <SmallButton onClick={LogOut}>Log Out</SmallButton>
        )}
      </OnlyMobileNavBar>
    </>
  );
};

export default CommonNavBar;
