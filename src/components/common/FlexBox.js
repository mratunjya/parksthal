import styled from "styled-components";

export const FlexBox = styled.div`
  /* Flex properties */
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.direction};
  flex-wrap: ${(props) => props.wrap};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  align-content: ${(props) => props.content};
  flex: ${(props) => props.flex};

  /* Dimension properties */
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  max-width: ${(props) => props.maxWidth};
  max-height: ${(props) => props.maxHeight};
  min-width: ${(props) => props.minWidth};
  min-height: ${(props) => props.minHeight};
  aspect-ratio: ${(props) => props.ratio};

  /* Spacing properties */
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  gap: ${(props) => props.gap}; /* Added for grid gap */

  /* Gap for grid row */
  row-gap: ${(props) => props.rowGap};

  /* Gap for grid column */
  column-gap: ${(props) => props.colGap};

  /* Border properties */
  border: ${(props) => props.border};
  border-radius: ${(props) => props.radius};

  /* Background properties */
  background-color: ${(props) => props.bgColor};
  background-image: ${(props) => props.bgImage};

  /* Box shadow and opacity */
  box-shadow: ${(props) => props.shadow};
  opacity: ${(props) => props.opacity};

  /* Overflow and positioning */
  overflow: ${(props) => props.overflow};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};

  /* Z-index and transitions */
  z-index: ${(props) => props.zIndex};
  transition: ${(props) => props.transition};

  /* Interaction properties */
  cursor: ${(props) => props.cursor};
  user-select: ${(props) => props.select};
  pointer-events: ${(props) => props.events};

  /* Text transformation */
  text-transform: ${(props) => props.toUpper && "uppercase"};

  /* Text styles */
  font-size: ${(props) => props.fontSize};
  font-family: ${(props) => props.fontFamily};
  color: ${(props) => props.textColor};
  line-height: ${(props) => props.lineHeight};
  font-weight: ${(props) => props.weight};
  text-align: ${(props) => props.textAlign};
  white-space: ${(props) => props.whiteSpace};

  ${(props) => props.css};

  // Mobile
  @media (max-width: 768px) {
    /* Mobile-specific styles */
    display: ${(props) => props.displayMobile};
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
    background-color: ${(props) => props.bgColorMobile};
    background-image: ${(props) => props.bgImageMobile};
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
    user-select: ${(props) => props.selectMobile};
    pointer-events: ${(props) => props.eventsMobile};
    text-transform: ${(props) =>
      props.toUpperMobile ? "uppercase" : props.textTransform};
    font-size: ${(props) => props.fontSizeMobile};
    font-family: ${(props) => props.fontFamilyMobile};
    color: ${(props) => props.textColorMobile};
    line-height: ${(props) => props.lineHeightMobile};
    gap: ${(props) => props.gapMobile};
    row-gap: ${(props) => props.rowGapMobile};
    column-gap: ${(props) => props.colGapMobile};
    font-weight: ${(props) => props.weightMobile};
    flex: ${(props) => props.flexMobile};

    ${(props) => props.cssMobile};
  }
`;

FlexBox.defaultProps = {
  display: "flex",
};
