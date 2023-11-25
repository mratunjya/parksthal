import Layout from "@layout";
import { H1 } from "@common/Text";
import { FlexBox } from "@common/FlexBox";
import { TbError404 } from "react-icons/tb";
import CommonLink from "@common/CommonLink";
import { MediumButton } from "@common/Button";
import CommonImage from "@common/CommonImage";
import { ERROR_RED, SECONDARY_100, SECONDARY_500 } from "@colors";

const Error = () => {
  return (
    <Layout title={"ParkSthal: Error, Page Not Found"}>
      <FlexBox flex="1" align="center" justify="center">
        <FlexBox
          gap="3rem"
          radius="1rem"
          align="center"
          padding="4rem"
          direction="column"
          shadow={`0 0 4px 1px ${SECONDARY_100}`}
        >
          <FlexBox direction="column" align="center">
            <CommonImage
              width={125}
              height={125}
              alt="404 Image"
              src="/assets/error404.svg"
            />
            <H1 color={ERROR_RED}>
              <FlexBox gap="0.5rem" align="center">
                Error
                <TbError404 color={SECONDARY_500} size={50} />: Page Not Found
              </FlexBox>
            </H1>
          </FlexBox>
          <CommonLink href="/">
            <MediumButton>Go To Home</MediumButton>
          </CommonLink>
        </FlexBox>
      </FlexBox>
    </Layout>
  );
};

export default Error;
