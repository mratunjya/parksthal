import Image from "next/image";
import styled from "styled-components";

const CustomImage = styled(Image)``;

const CommonImage = ({
  src,
  alt,
  width,
  height,
  quality,
  priority,
  padding,
  position,
  top,
  objectFit,
  left,
}) => {
  return (
    <CustomImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      quality={quality || 60}
      priority={priority || true}
      padding={padding || "0"}
      draggable={false}
      position={position}
      top={top}
      left={left}
      objectFit={objectFit}
    />
  );
};

export default CommonImage;
