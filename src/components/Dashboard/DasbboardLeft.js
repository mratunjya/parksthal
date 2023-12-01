import randomstring from "randomstring";

import { H3 } from "@common/Text";
import { FlexBox } from "@common/FlexBox";
import CommonLink from "@common/CommonLink";
import { PRIMARY_500, SECONDARY_500, TERTIARY_500, WHITE } from "@colors";
import { DashboardMenu } from "@meta/Dashboard/DashboardMenu";

const DashboardLeft = ({ user, routerQuery }) => {
  return (
    <FlexBox
      flex="3"
      gap="1rem"
      bgColor={WHITE}
      overflow="auto"
      direction="column"
      flexMobile="unset"
      gapMobile="0.5rem"
      widthMobile="100%"
      padding="0 2rem 0 0"
      directionMobile="row"
      justify="space-between"
      justifyContent="center"
      paddingMobile="0 0 1rem 0"
    >
      <FlexBox
        gap="1rem"
        gapMobile="0.5rem"
        direction="column"
        directionMobile="row"
      >
        {DashboardMenu[`${user?.role}`]?.map((option) => (
          <CommonLink
            key={randomstring.generate()}
            href={`${routerQuery ? "" : "dashboard/"}${option
              .toLowerCase()
              .replaceAll(" ", "-")}`}
          >
            <FlexBox
              width="100%"
              align="center"
              justify="center"
              radius="0.75rem"
              heightMobile="100%"
              padding="1rem 1.5rem"
              bgColor={PRIMARY_500}
              textColor={TERTIARY_500}
              paddingMobile="0.75rem 1rem"
              border={`2px solid ${PRIMARY_500}`}
            >
              <H3>{option}</H3>
            </FlexBox>
          </CommonLink>
        ))}
      </FlexBox>
      <CommonLink href={`${routerQuery ? "" : "dashboard/"}profile`}>
        <FlexBox
          width="100%"
          align="center"
          radius="0.75rem"
          justify="center"
          heightMobile="100%"
          padding="1rem 1.5rem"
          bgColor={SECONDARY_500}
          textColor={TERTIARY_500}
          paddingMobile="0.75rem 1rem"
          border={`2px solid ${SECONDARY_500}`}
        >
          <H3>Edit Profile</H3>
        </FlexBox>
      </CommonLink>
    </FlexBox>
  );
};

export default DashboardLeft;
