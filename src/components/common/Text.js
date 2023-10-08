import styled from "styled-components";

// Paragraph style

export const P = styled.p`
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => props.lineHeight};
  white-space: ${(props) => props.whiteSpace};

  @media (max-width: 768px) {
    color: ${(props) => props.colorMobile};
    margin: ${(props) => props.marginMobile};
    padding: ${(props) => props.paddingMobile};
    font-size: ${(props) => props.fontSizeMobile};
    font-weight: ${(props) => props.fontWeightMobile};
    line-height: ${(props) => props.lineHeightMobile};
    white-space: ${(props) => props.whiteSpaceMobile};
  }
`;

export const Li = styled(P).attrs({ as: "li" })``;

// Heading styles

export const H1 = styled(P).attrs({ as: "h1" })``;

export const H2 = styled(P).attrs({ as: "h2" })``;

export const H3 = styled(P).attrs({ as: "h3" })``;

export const H4 = styled(P).attrs({ as: "h4" })``;

export const H5 = styled(P).attrs({ as: "h5" })``;

export const H6 = styled(P).attrs({ as: "h6" })``;
