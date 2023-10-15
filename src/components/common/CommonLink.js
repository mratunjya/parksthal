import Link from "next/link";
import styled from "styled-components";

const CommonLinkComponent = styled(Link)`
  transition: all 200ms ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const CommonLink = ({ href, children, target }) => {
  if (href?.indexOf("http") === 0)
    return (
      <a href={href} target={target}>
        {children}
      </a>
    );

  return <CommonLinkComponent href={href}>{children}</CommonLinkComponent>;
};

export default CommonLink;
