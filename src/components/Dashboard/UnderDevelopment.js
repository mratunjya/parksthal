import CommonImage from "@common/CommonImage";
import { FlexBox } from "@common/FlexBox";
import { H1 } from "@common/Text";

const UnderDevelopment = () => {
  return (
    <FlexBox
      flex="1"
      gap="2rem"
      align="center"
      justify="center"
      direction="column"
    >
      <CommonImage
        width={48}
        height={48}
        alignSelf="center"
        alt="Dashboard Icon"
        src="/assets/dashboard/under-development.gif"
      />
      <H1 align="center">Under Development</H1>
    </FlexBox>
  );
};

export default UnderDevelopment;
