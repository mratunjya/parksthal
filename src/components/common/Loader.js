import styled, { keyframes } from "styled-components";

import { FlexBox } from "./FlexBox";
import { PRIMARY_300, PRIMARY_400, PRIMARY_500 } from "@colors";

const DotPulseAnimation = keyframes`
  0% {
    box-shadow: 9999px 0 0 -5px;
    background-color: ${PRIMARY_300};
    color: ${PRIMARY_300};
  }
  30% {
    box-shadow: 9999px 0 0 2px;
    background-color: ${PRIMARY_400};
    color: ${PRIMARY_400};
  }
  60%,
  100% {
    box-shadow: 9999px 0 0 -5px;
    background-color: ${PRIMARY_500};
    color: ${PRIMARY_500};
  }
`;

const DotPulseBeforeAnimation = keyframes`
  0% {
    box-shadow: 9984px 0 0 -5px;
    background-color: ${PRIMARY_300};
    color: ${PRIMARY_300};
    }
  30% {
    box-shadow: 9984px 0 0 2px;
    background-color: ${PRIMARY_400};
    color: ${PRIMARY_400};
  }
  60%,
  100% {
    box-shadow: 9984px 0 0 -5px;
    background-color: ${PRIMARY_500};
    color: ${PRIMARY_500};
  }
`;

const DotPulseAfterAnimation = keyframes`
  0% {
    box-shadow: 10014px 0 0 -5px;
    background-color: ${PRIMARY_300};
    color: ${PRIMARY_300};
  }
  30% {
    box-shadow: 10014px 0 0 2px;
    background-color: ${PRIMARY_400};
    color: ${PRIMARY_400};
  }
  60%,
  100% {
    box-shadow: 10014px 0 0 -5px;
    background-color: ${PRIMARY_500};
    color: ${PRIMARY_500};
  }
`;

const DotPulse = styled(FlexBox)`
  position: relative;
  left: -9999px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${PRIMARY_500};
  color: ${PRIMARY_500};
  box-shadow: 9999px 0 0 -5px;
  animation: ${DotPulseAnimation} 1.5s infinite linear;
  animation-delay: 0.25s;

  ::before,
  ::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: ${PRIMARY_500};
    color: ${PRIMARY_500};
  }

  ::before {
    box-shadow: 9984px 0 0 -5px;
    animation: ${DotPulseBeforeAnimation} 1.5s infinite linear;
    animation-delay: 0s;
  }

  ::after {
    box-shadow: 10014px 0 0 -5px;
    animation: ${DotPulseAfterAnimation} 1.5s infinite linear;
    animation-delay: 0.5s;
  }
`;

export const Loader = () => (
  <FlexBox align="center" justify="center" width="100%" height="100%">
    <DotPulse />
  </FlexBox>
);
