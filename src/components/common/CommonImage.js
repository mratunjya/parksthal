import Image from "next/image";
import styled from "styled-components";

const CustomImage = styled(Image)`
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  align-self: ${(props) => props.align};
`;

const CommonImage = ({
  src,
  alt,
  top,
  left,
  width,
  align,
  height,
  margin,
  quality,
  priority,
  padding,
  position,
  objectFit,
}) => {
  return (
    <CustomImage
      top={top}
      src={src}
      alt={alt}
      left={left}
      width={width}
      align={align}
      margin={margin}
      height={height}
      draggable={false}
      padding={padding}
      position={position}
      priority={priority}
      objectFit={objectFit}
      quality={quality || 60}
    />
  );
};

export default CommonImage;
