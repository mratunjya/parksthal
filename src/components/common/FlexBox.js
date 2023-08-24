import styled from "styled-components";

const FlexBox = styled.div`
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
    background-color: ${(props) => props.color};
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
        background-color: ${(props) => props.colorMobile};
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
        ${(props) => props.cssMobile};
    }
`;

export default FlexBox;