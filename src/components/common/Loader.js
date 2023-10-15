import styled, { keyframes } from "styled-components";

import { FlexBox } from "./FlexBox";
import { PRIMARY_500 } from "@colors";

const DotPulseAnimation = keyframes`
  0% {
    top: -0.3125rem;
    transform: scale(1);
  }
  100% {
    top: 0.3125rem;
    transform: scale(1);
  }
`;

const DotPulseWrapper = styled(FlexBox)`
  width: 0.75rem;
  aspect-ratio: 1;
  border-radius: 50%;
  position: relative;
`;

const DotPulse = styled(FlexBox)`
  width: 0.75rem;
  aspect-ratio: 1;
  border-radius: 50%;
  position: absolute;
  transform: scale(0);
  animation: ${DotPulseAnimation} 0.75s infinite alternate;
  background-color: ${(props) => props.color || PRIMARY_500};
`;

const DotPulseLeft = styled(DotPulse)`
  animation-delay: 0s;
`;

const DotPulseMiddle = styled(DotPulse)`
  animation-delay: 0.375s;
`;

const DotPulseRight = styled(DotPulse)`
  animation-delay: 0.75s;
`;

export const Loader = ({ color }) => (
  <FlexBox
    gap="10px"
    width="100%"
    height="100%"
    align="center"
    justify="center"
  >
    <DotPulseWrapper>
      <DotPulseLeft color={color} />
    </DotPulseWrapper>
    <DotPulseWrapper>
      <DotPulseMiddle color={color} />
    </DotPulseWrapper>
    <DotPulseWrapper>
      <DotPulseRight color={color} />
    </DotPulseWrapper>
  </FlexBox>
);
