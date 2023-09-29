import { FlexBox } from "@common/FlexBox";
import styled from "styled-components";
import { PRIMARY_500, WHITE } from "@colors";

const Button = styled(FlexBox).attrs({ as: "button" })`
  &:after,
  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    opacity: 0.1;
    background: ${WHITE};
  }

  &:focus,
  &:hover {
    &:after {
      width: 100%;
      height: 100%;
    }
  }

  &:active {
    &:before {
      width: 100%;
      height: 100%;
    }
  }
`;

Button.defaultProps = {
  justify: "center",
  align: "center",
  border: "none",
  position: "relative",
  radius: "6.25rem",
  transform: "uppercase",
  weight: "bold",
  spacing: "0.1em",
  bgColor: PRIMARY_500,
  textColor: WHITE,
  textTransform: "uppercase",
};

export const SmallButton = styled(Button)`
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
`;

export const MediumButton = styled(Button)`
  font-size: 1.2rem;
  padding: 1.2rem 2.4rem;
`;

export const LargeButton = styled(Button)`
  font-size: 1.5rem;
  padding: 1.5rem 3rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export default Button;
