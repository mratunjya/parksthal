import chroma from "chroma-js";
import { useEffect, useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

import { H5 } from "@common/Text";
import { FlexBox } from "@common/FlexBox";
import { LogOut } from "@utils/LogOut";
import CommonLink from "@common/CommonLink";
import { SmallButton } from "@common/Button";
import CommonImage from "@common/CommonImage";
import { navLinksData } from "@meta/NavBar/navLinksData";
import { IsAuthenticated } from "@utils/IsAuthenticated";
import { BLACK, SECONDARY_200, SECONDARY_300, WHITE } from "@colors";

import {
  NavBarWrapper,
  NavBar,
  AllNavLinks,
  OnlyMobileNavBar,
  HamBurgerButton,
  FallBackNavBar,
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
        <FlexBox align="center" justify="center" padding="0.5rem" toUpper>
          <H5 whiteSpace="nowrap" color={SECONDARY_300}>
            {navLink.name}
          </H5>
        </FlexBox>
      </CommonLink>
    ));

  return (
    <>
      <NavBarWrapper
        justify="center"
        align="center"
        padding="0.75rem 0"
        position="sticky"
        top="0"
        left="0"
        bgColor={chroma(WHITE).alpha(0.75).css()}
      >
        <NavBar justify="space-between" align="center">
          <CommonLink href="/">
            <CommonImage
              src="/assets/parksthal-logo.svg"
              width={150}
              height={22.12}
              alt="ParkSthal Logo"
              objectFit={"cover"}
              quality={0}
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
          direction="column"
          padding="2rem 1rem"
          justify="center"
          align="center"
          position="fixed"
          width="30%"
          height="100%"
          zIndex="2"
          opacity="0.4"
          bgColor={BLACK}
          display="none"
          displayMobile="flex"
        />
      )}
      <OnlyMobileNavBar
        width="70%"
        position="fixed"
        direction="column"
        padding="2rem 1.5rem"
        isNavBarOpen={isNavOpen}
        zIndex="100"
        bgColor={chroma(WHITE).alpha(0.8).css()}
        height="100%"
        display="none"
        displayMobile="flex"
        gap="1.5rem"
        align="flex-start"
      >
        <RenderAllNavLinks />
      </OnlyMobileNavBar>
    </>
  );
};

export default CommonNavBar;
