import styled from "styled-components";

import { FlexBox } from "@common/FlexBox";
import { PRIMARY_500, WHITE } from "@colors";

const Button = styled(FlexBox).attrs({ as: "button" })`
  &::after,
  &::before {
    top: 50%;
    width: 0;
    left: 50%;
    height: 0;
    content: "";
    opacity: 0.1;
    overflow: hidden;
    position: absolute;
    background: ${WHITE};
    transform: translate(-50%, -50%);
  }

  &:focus,
  &:hover {
    &::after {
      width: 100%;
      height: 100%;
    }
  }

  &:active {
    &::before {
      width: 100%;
      height: 100%;
    }
  }
`;

Button.defaultProps = {
  border: "none",
  weight: "bold",
  align: "center",
  spacing: "0.1em",
  textColor: WHITE,
  radius: "6.25rem",
  justify: "center",
  bgColor: PRIMARY_500,
  position: "relative",
};

export const SubmitBtn = styled(Button).attrs({
  as: "input",
  type: "submit",
})``;

export const SmallButton = styled(Button)`
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
`;

export const SmallSubmitButton = styled(SmallButton).attrs({
  as: "input",
  type: "submit",
})``;

export const MediumButton = styled(Button)`
  font-size: 1.2rem;
  padding: 1.2rem 2.4rem;
`;

export const MediumSubmitButton = styled(MediumButton).attrs({
  as: "input",
  type: "submit",
})``;

export const LargeButton = styled(Button)`
  font-size: 1.5rem;
  padding: 1.5rem 3rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const LargeSubmitButton = styled(LargeButton).attrs({
  as: "input",
  type: "submit",
})``;

export default Button;
