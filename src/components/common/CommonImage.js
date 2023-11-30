import Image from "next/image";
import styled from "styled-components";

const CustomImage = styled(Image)`
  flex: ${(props) => props.flex};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  align-self: ${(props) => props.align};
  width: ${(props) => props.width + "px"};
  align-self: ${(props) => props.alignSelf};
  height: ${(props) => !props.width && props.height + "px"};
`;

const CommonImage = ({
  src,
  alt,
  top,
  left,
  flex,
  width,
  align,
  height,
  margin,
  quality,
  priority,
  padding,
  position,
  objectFit,
  alignSelf,
}) => {
  return (
    <CustomImage
      top={top}
      src={src}
      alt={alt}
      left={left}
      flex={flex}
      width={width}
      align={align}
      margin={margin}
      height={height}
      draggable={false}
      padding={padding}
      position={position}
      priority={priority}
      objectFit={objectFit}
      alignSelf={alignSelf}
      quality={quality || 100}
    />
  );
};

export default CommonImage;
