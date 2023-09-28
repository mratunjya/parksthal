import chroma from "chroma-js";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

import { H5 } from "@common/Text";
import FlexBox from "@common/FlexBox";
import CommonLink from "@common/CommonLink";
import CommonImage from "@common/CommonImage";
import { navLinksData } from "@meta/NavBar/navLinksData";

import { SECONDARY_100, SECONDARY_200, SECONDARY_300, WHITE } from "@colors";

const NavBarWrapper = styled(FlexBox).attrs({ as: "nav" })`
  backdrop-filter: saturate(180%) blur(20px);
  box-shadow: 0px 0px 8px ${SECONDARY_100};

  @media (max-width: 768px) {
    padding: 0.5rem 0;
  }
`;

const NavBar = styled(FlexBox)`
  width: 86.67%;
  max-width: 75rem;
`;

const AllNavLinks = styled(FlexBox)`
  width: fit-content;

  @media (max-width: 768px) {
    display: none;
  }
`;

const OnlyMobileNavBarEnteringAnimation = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0.5;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
`;

const OnlyMobileNavBarExitingAnimation = keyframes`
  0% {
    transform: translateX(0%);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0.5;
  }
`;

const OnlyMobileNavBar = styled(FlexBox).attrs({ as: "nav" })`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    animation: ${(props) =>
        props.isnavbaropen
          ? OnlyMobileNavBarEnteringAnimation
          : OnlyMobileNavBarExitingAnimation}
      0.3s ease-in-out;
    left: ${(props) => (props.isnavbaropen ? "30%" : "100%")};
  }
`;

const AllNavLinksMobile = styled(FlexBox)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const HamBurgerButton = styled(FlexBox)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const FallBackNavBar = styled(FlexBox)`
  display: none;

  @media (max-width: 768px) {
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    width: 100%;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

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
          </AllNavLinks>
          <HamBurgerButton
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
          width="100%"
          position="fixed"
          backgroundcolor={WHITE}
          direction="column"
          padding="2rem 1rem"
          zindex="100"
        />
      )}
      <OnlyMobileNavBar
        width="70%"
        position="fixed"
        backgroundcolor={WHITE}
        direction="column"
        padding="2rem 0rem"
        isnavbaropen={isNavOpen}
        zindex="100"
      >
        <AllNavLinksMobile align="center" gap="1.5rem" direction="column">
          <FlexBox
            align="flex-start"
            justify="center"
            gap="0.75rem"
            direction="column"
          >
            <RenderAllNavLinks />
          </FlexBox>
        </AllNavLinksMobile>
      </OnlyMobileNavBar>
    </>
  );
};

export default CommonNavBar;
