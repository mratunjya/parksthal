import Link from "next/link";
import styled from "styled-components";

const CommonLinkComponent = styled(Link)`
  &:hover {
    transform: scale(1.05);
  }
`;

const CommonLink = ({ href, children }) => {
  return <CommonLinkComponent href={href}>{children}</CommonLinkComponent>;
};

export default CommonLink;
