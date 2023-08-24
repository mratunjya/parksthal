import styled from "styled-components";
import { PRIMARY_500, WHITE } from "@colors";

const Button = styled.button`
  display: flex;
  flex-direction: ${(props) => props.direction};
  flex-wrap: ${(props) => props.wrap};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  align-content: ${(props) => props.content};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  max-width: ${(props) => props.maxWidth};
  max-height: ${(props) => props.maxHeight};
  min-width: ${(props) => props.minWidth};
  min-height: ${(props) => props.minHeight};
  aspect-ratio: ${(props) => props.ratio};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.radius};
  background-color: ${(props) => props.backgroundColor};
  box-shadow: ${(props) => props.shadow};
  opacity: ${(props) => props.opacity};
  overflow: ${(props) => props.overflow};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  z-index: ${(props) => props.zIndex};
  transition: ${(props) => props.transition};
  cursor: ${(props) => props.cursor};
  user-select: ${(props) => props.select};
  pointer-events: ${(props) => props.events};
  text-transform: ${(props) => props.transform};
  font-weight: ${(props) => props.weight};
  letter-spacing: ${(props) => props.spacing};
  color: ${(props) => props.color};
  ${(props) => props.css};

  // Mobile

  @media (max-width: 768px) {
    flex-direction: ${(props) => props.directionMobile};
    flex-wrap: ${(props) => props.wrapMobile};
    justify-content: ${(props) => props.justifyMobile};
    align-items: ${(props) => props.alignMobile};
    align-content: ${(props) => props.contentMobile};
    width: ${(props) => props.widthMobile};
    height: ${(props) => props.heightMobile};
    max-width: ${(props) => props.maxWidthMobile};
    max-height: ${(props) => props.maxHeightMobile};
    min-width: ${(props) => props.minWidthMobile};
    min-height: ${(props) => props.minHeightMobile};
    aspect-ratio: ${(props) => props.ratioMobile};
    padding: ${(props) => props.paddingMobile};
    margin: ${(props) => props.marginMobile};
    border: ${(props) => props.borderMobile};
    border-radius: ${(props) => props.radiusMobile};
    background-color: ${(props) => props.backgroundColorMobile};
    box-shadow: ${(props) => props.shadowMobile};
    opacity: ${(props) => props.opacityMobile};
    overflow: ${(props) => props.overflowMobile};
    position: ${(props) => props.positionMobile};
    top: ${(props) => props.topMobile};
    right: ${(props) => props.rightMobile};
    bottom: ${(props) => props.bottomMobile};
    left: ${(props) => props.leftMobile};
    z-index: ${(props) => props.zIndexMobile};
    transition: ${(props) => props.transitionMobile};
    cursor: ${(props) => props.cursorMobile};
    user-select: ${(props) => props.mobileSelect};
    pointer-events: ${(props) => props.mobileEvents};
    ${(props) => props.css};
  }

  &:after,
  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100px;
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
  radius: "100px",
  transform: "uppercase",
  weight: "bold",
  spacing: "0.1em",
  backgroundColor: PRIMARY_500,
  color: WHITE,
};

export const SmallButton = styled(Button)`
  font-size: 1rem;
  padding: 1rem 2rem;
`;

export const MediumButton = styled(Button)`
  font-size: 1.2rem;
  padding: 1.2rem 2.4rem;
`;

export const LargeButton = styled(Button)`
  font-size: 1.5rem;
  padding: 1.5rem 3rem;
`;

export default Button;
