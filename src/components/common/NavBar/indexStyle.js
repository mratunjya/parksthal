import chroma from "chroma-js";
import styled, { keyframes } from "styled-components";

import { FlexBox } from "@common/FlexBox";
import { SECONDARY_100, BLACK } from "@colors";

export const NavBarWrapper = styled(FlexBox).attrs({ as: "nav" })`
  backdrop-filter: saturate(180%) blur(20px);
  box-shadow: 0px 0px 8px ${SECONDARY_100};

  @media (max-width: 768px) {
    padding: 0.5rem 0;
  }
`;

export const NavBar = styled(FlexBox)`
  width: 86.67%;
  max-width: 75rem;
`;

export const AllNavLinks = styled(FlexBox)`
  width: fit-content;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const OnlyMobileNavBarEnteringAnimation = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0.5;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
`;

export const OnlyMobileNavBarExitingAnimation = keyframes`
  0% {
    transform: translateX(0%);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0.5;
  }
`;

export const OnlyMobileNavBar = styled(FlexBox).attrs({ as: "nav" })`
  display: none;
  backdrop-filter: saturate(180%) blur(20px);

  @media (max-width: 768px) {
    display: flex;
    animation: ${(props) =>
        props.isNavBarOpen
          ? OnlyMobileNavBarEnteringAnimation
          : OnlyMobileNavBarExitingAnimation}
      0.3s ease-in-out;
    left: ${(props) => (props.isNavBarOpen ? "30%" : "100%")};
  }
`;

export const HamBurgerButton = styled(FlexBox)``;

const FallBackNavBarAnimation = keyframes`
  0% {
    width: 100%;
    backdrop-filter: saturate(180%) blur(0);
    background-color: ${chroma(BLACK).alpha(0).css()};
  }

  100% {
    width: 30%;
    backdrop-filter: saturate(180%) blur(10px);
    background-color: ${chroma(BLACK).alpha(0.4).css()};
  }
`;

export const FallBackNavBar = styled(FlexBox)`
  backdrop-filter: saturate(180%) blur(10px);
  animation: ${FallBackNavBarAnimation} 300ms ease-in-out;
`;
