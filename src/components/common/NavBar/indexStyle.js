import chroma from "chroma-js";
import styled, { keyframes } from "styled-components";

import { H5 } from "@common/Text";
import { FlexBox } from "@common/FlexBox";
import { WHITE, BLACK, TERTIARY_200, SECONDARY_400 } from "@colors";

export const NavBarWrapper = styled(FlexBox).attrs({ as: "nav" })`
  -webkit-app-region: no-drag;
  height: var(--toolbar-height);

  & * {
    user-select: none;
  }

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

export const WhatsappWrapper = styled(FlexBox)`
  &:hover {
    svg {
      scale: 1.25;
    }
  }
`;

export const NavCta = styled(FlexBox)`
  &:hover,
  &:focus {
    border: 0.125rem solid ${SECONDARY_400};
  }

  &:active {
    border: 0.125rem solid ${SECONDARY_400};
    background-color: ${SECONDARY_400};

    ${H5} {
      color: ${TERTIARY_200};
    }
  }
`;

export const OnlyMobileNavBarEnteringAnimation = keyframes`
  0% {
    opacity: 0.5;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
`;

export const OnlyMobileNavBarExitingAnimation = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0%);
  }
  100% {
    opacity: 0.5;
    transform: translateX(100%);
  }
`;

export const OnlyMobileNavBar = styled(FlexBox).attrs({ as: "nav" })`
  backdrop-filter: saturate(180%) blur(1.25rem);

  &::before {
    content: "";
    left: 0;
    width: 100%;
    display: block;
    top: -0.3125rem;
    height: 0.625rem;
    position: absolute;
    background-color: ${WHITE};
  }

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
    backdrop-filter: saturate(180%) blur(0.625rem);
    background-color: ${chroma(BLACK).alpha(0.4).css()};
  }
`;

export const FallBackNavBar = styled(FlexBox)`
  backdrop-filter: saturate(180%) blur(0.625rem);
  animation: ${FallBackNavBarAnimation} 300ms ease-in-out;
`;
