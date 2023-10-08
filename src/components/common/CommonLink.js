import Link from "next/link";
import styled from "styled-components";

const CommonLinkComponent = styled(Link)`
  transition: all 200ms ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const CommonLink = ({ href, children }) => {
  return <CommonLinkComponent href={href}>{children}</CommonLinkComponent>;
};

export default CommonLink;
