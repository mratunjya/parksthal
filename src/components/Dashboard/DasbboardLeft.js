import { H3 } from "@common/Text";
import { FlexBox } from "@common/FlexBox";
import CommonLink from "@common/CommonLink";
import { DashboardMenu } from "@meta/Dashboard/DashboardMenu";
import { PRIMARY_500, SECONDARY_500, TERTIARY_500, WHITE } from "@colors";

const DashboardLeft = ({ user, routerQuery }) => {
  return (
    <FlexBox
      flex="3"
      gap="1rem"
      bgColor={WHITE}
      direction="column"
      padding="0 2rem 0 0"
      justify="space-between"
    >
      <FlexBox gap="1rem" direction="column">
        {DashboardMenu[`${user?.role}`]?.map((option) => (
          <CommonLink
            key={Math.random()}
            href={`${routerQuery ? "" : "dashboard/"}${option
              .toLowerCase()
              .replaceAll(" ", "-")}`}
          >
            <FlexBox
              width="100%"
              align="center"
              justify="center"
              radius="0.75rem"
              padding="1rem 1.5rem"
              bgColor={PRIMARY_500}
              textColor={TERTIARY_500}
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
          padding="1rem 1.5rem"
          bgColor={SECONDARY_500}
          textColor={TERTIARY_500}
          border={`2px solid ${SECONDARY_500}`}
        >
          <H3>Edit Profile</H3>
        </FlexBox>
      </CommonLink>
    </FlexBox>
  );
};

export default DashboardLeft;
