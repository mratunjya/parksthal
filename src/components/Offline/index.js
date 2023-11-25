import Layout from "@layout";
import { H1 } from "@common/Text";
import { FlexBox } from "@common/FlexBox";
import { IoCloudOffline } from "react-icons/io5";
import CommonLink from "@common/CommonLink";
import { MediumButton } from "@common/Button";
import CommonImage from "@common/CommonImage";
import { ERROR_RED, PRIMARY_500, SECONDARY_100, SECONDARY_500 } from "@colors";

const Offline = () => {
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
              alt="Offline Image"
              src="/assets/offline.svg"
            />
            <H1>
              <FlexBox gap="0.5rem" align="center">
                Offline
                <IoCloudOffline color={PRIMARY_500} size={50} />: No Internet
              </FlexBox>
            </H1>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </Layout>
  );
};

export default Offline;
