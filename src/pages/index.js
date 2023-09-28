import styled from "styled-components";
import { useSession, signIn, signOut } from "next-auth/react";

import Layout from "@layout";
import FlexBox from "@common/FlexBox";
import { SmallButton, MediumButton, LargeButton } from "@common/Button";
import {
  PRIMARY_100,
  PRIMARY_200,
  PRIMARY_300,
  PRIMARY_400,
  PRIMARY_500,
  PRIMARY_600,
  PRIMARY_700,
  PRIMARY_800,
  PRIMARY_900,
  SECONDARY_100,
  SECONDARY_200,
  SECONDARY_300,
  SECONDARY_400,
  SECONDARY_500,
  SECONDARY_600,
  SECONDARY_700,
  SECONDARY_800,
  SECONDARY_900,
  TERTIARY_100,
  TERTIARY_200,
  TERTIARY_300,
  TERTIARY_400,
  TERTIARY_500,
  TERTIARY_600,
  TERTIARY_700,
  TERTIARY_800,
  TERTIARY_900,
} from "@colors";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(9, 1fr);
  gap: 10px;
  padding: 10px;
  align-items: center;
  justify-items: center;

  ${FlexBox} {
    border-radius: 5px;
  }
`;

export default function Home() {
  const session = useSession();

  const handleSignIn = () => {
    signIn();
  };

  const handleSignOut = () => {
    signOut();
  };

  return (
    <Layout title="ParkSthal: Home">
      {session.data ? (
        <MediumButton onClick={handleSignOut}>Sign Out</MediumButton>
      ) : (
        <SmallButton onClick={handleSignIn}>Sign In</SmallButton>
      )}
      <LargeButton>Button</LargeButton>
      <Wrapper>
        <FlexBox color={PRIMARY_100} width="100%" ratio="1" />
        <FlexBox color={SECONDARY_100} width="100%" ratio="1" />
        <FlexBox color={TERTIARY_100} width="100%" ratio="1" />
        <FlexBox color={PRIMARY_200} width="100%" ratio="1" />
        <FlexBox color={SECONDARY_200} width="100%" ratio="1" />
        <FlexBox color={TERTIARY_200} width="100%" ratio="1" />
        <FlexBox color={PRIMARY_300} width="100%" ratio="1" />
        <FlexBox color={SECONDARY_300} width="100%" ratio="1" />
        <FlexBox color={TERTIARY_300} width="100%" ratio="1" />
        <FlexBox color={PRIMARY_400} width="100%" ratio="1" />
        <FlexBox color={SECONDARY_400} width="100%" ratio="1" />
        <FlexBox color={TERTIARY_400} width="100%" ratio="1" />
        <FlexBox color={PRIMARY_500} width="100%" ratio="1" />
        <FlexBox color={SECONDARY_500} width="100%" ratio="1" />
        <FlexBox color={TERTIARY_500} width="100%" ratio="1" />
        <FlexBox color={PRIMARY_600} width="100%" ratio="1" />
        <FlexBox color={SECONDARY_600} width="100%" ratio="1" />
        <FlexBox color={TERTIARY_600} width="100%" ratio="1" />
        <FlexBox color={PRIMARY_700} width="100%" ratio="1" />
        <FlexBox color={SECONDARY_700} width="100%" ratio="1" />
        <FlexBox color={TERTIARY_700} width="100%" ratio="1" />
        <FlexBox color={PRIMARY_800} width="100%" ratio="1" />
        <FlexBox color={SECONDARY_800} width="100%" ratio="1" />
        <FlexBox color={TERTIARY_800} width="100%" ratio="1" />
        <FlexBox color={PRIMARY_900} width="100%" ratio="1" />
        <FlexBox color={SECONDARY_900} width="100%" ratio="1" />
        <FlexBox color={TERTIARY_900} width="100%" ratio="1" />
      </Wrapper>
    </Layout>
  );
}
