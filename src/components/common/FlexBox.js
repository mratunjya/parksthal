import styled from "styled-components";

export const FlexBox = styled.div`
  /* Flex properties */
  flex: ${(props) => props.flex};
  flex-wrap: ${(props) => props.wrap};
  display: ${(props) => props.display};
  align-items: ${(props) => props.align};
  align-content: ${(props) => props.content};
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};

  /* Dimension properties */
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  min-width: ${(props) => props.minWidth};
  max-width: ${(props) => props.maxWidth};
  aspect-ratio: ${(props) => props.ratio};
  max-height: ${(props) => props.maxHeight};
  min-height: ${(props) => props.minHeight};

  /* Spacing properties */
  gap: ${(props) => props.gap};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};

  /* Gap for grid row */
  row-gap: ${(props) => props.rowGap};

  /* Gap for grid column */
  column-gap: ${(props) => props.colGap};

  /* Border properties */
  border: ${(props) => props.border};
  border-radius: ${(props) => props.radius};

  /* Background properties */
  background-size: ${(props) => props.bgSize};
  background-color: ${(props) => props.bgColor};
  background-image: ${(props) => props.bgImage && `url("${props.bgImage}")`};

  /* Box shadow and opacity */
  opacity: ${(props) => props.opacity};
  box-shadow: ${(props) => props.shadow};

  /* Overflow and positioning */
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  overflow: ${(props) => props.overflow};
  position: ${(props) => props.position};
  transform: ${(props) => props.transform};

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
  color: ${(props) => props.textColor};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.weight};
  text-align: ${(props) => props.textAlign};
  font-family: ${(props) => props.fontFamily};
  line-height: ${(props) => props.lineHeight};
  white-space: ${(props) => props.whiteSpace};

  ${(props) => props.css};

  // Mobile
  @media (max-width: 768px) {
    /* Mobile-specific styles */

    /* Flex properties */
    flex: ${(props) => props.flexMobile};
    flex-wrap: ${(props) => props.wrapMobile};
    display: ${(props) => props.displayMobile};
    align-items: ${(props) => props.alignMobile};
    align-content: ${(props) => props.contentMobile};
    flex-direction: ${(props) => props.directionMobile};
    justify-content: ${(props) => props.justifyMobile};

    /* Dimension properties */
    width: ${(props) => props.widthMobile};
    height: ${(props) => props.heightMobile};
    min-width: ${(props) => props.minWidthMobile};
    max-width: ${(props) => props.maxWidthMobile};
    aspect-ratio: ${(props) => props.ratioMobile};
    max-height: ${(props) => props.maxHeightMobile};
    min-height: ${(props) => props.minHeightMobile};

    /* Spacing properties */
    gap: ${(props) => props.gapMobile};
    margin: ${(props) => props.marginMobile};
    padding: ${(props) => props.paddingMobile};

    /* Gap for grid row */
    row-gap: ${(props) => props.rowGapMobile};

    /* Gap for grid column */
    column-gap: ${(props) => props.colGapMobile};

    /* Border properties */
    border: ${(props) => props.borderMobile};
    border-radius: ${(props) => props.radiusMobile};

    /* Background properties */
    background-size: ${(props) => props.bgSizeMobile};
    background-color: ${(props) => props.bgColorMobile};
    background-image: ${(props) =>
      props.bgImageMobile && `url("${props.bgImageMobile}")`};

    /* Box shadow and opacity */
    opacity: ${(props) => props.opacityMobile};
    box-shadow: ${(props) => props.shadowMobile};

    /* Overflow and positioning */
    top: ${(props) => props.topMobile};
    left: ${(props) => props.leftMobile};
    right: ${(props) => props.rightMobile};
    bottom: ${(props) => props.bottomMobile};
    overflow: ${(props) => props.overflowMobile};
    position: ${(props) => props.positionMobile};

    /* Z-index and transitions */
    z-index: ${(props) => props.zIndexMobile};
    transition: ${(props) => props.transitionMobile};

    /* Interaction properties */
    cursor: ${(props) => props.cursorMobile};
    user-select: ${(props) => props.selectMobile};
    pointer-events: ${(props) => props.eventsMobile};

    /* Text transformation */
    text-transform: ${(props) => props.toUpper && "uppercase"};

    /* Text styles */
    color: ${(props) => props.textColorMobile};
    font-size: ${(props) => props.fontSizeMobile};
    font-weight: ${(props) => props.weightMobile};
    text-align: ${(props) => props.textAlignMobile};
    font-family: ${(props) => props.fontFamilyMobile};
    line-height: ${(props) => props.lineHeightMobile};
    white-space: ${(props) => props.whiteSpaceMobile};

    ${(props) => props.cssMobile};
  }
`;

FlexBox.defaultProps = {
  display: "flex",
};
