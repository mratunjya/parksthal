import Layout from "@layout";
import styled from "styled-components";
import { FlexBox } from "@common/FlexBox";
import { H1, H2, Li, P } from "@common/Text";
import { PRIMARY_100, WHITE } from "@colors";

const ExternalWrapper = styled(FlexBox)`
  ol {
    padding: 0.5rem 3.5rem;

    @media (max-width: 768px) {
      padding: 0 1.5rem;
    }
  }

  ${Li} {
    padding: 0.5rem 0.75rem;

    @media (max-width: 768px) {
      padding: 0.5rem 0.5rem;
    }
  }
`;

const Wrapper = styled(FlexBox)``;

const HelpAndFAQ = () => {
  const howDoesItWork = [
    "Download the ParkSthal app or directly book from website.",
    "Sign up or log in to ParkSthal account.",
    "Search for parking spaces near your destination.",
    "Choose a parking space, select your desired time, and make a reservation.",
    "Arrive at the parking space, and your reservation will be ready for you.",
    "Pay securely through the app/website.",
  ];

  return (
    <Layout title="ParkSthal: Help & FAQ">
      <ExternalWrapper bgColor={PRIMARY_100}>
        <Wrapper
          width="86.67%"
          maxWidth="75rem"
          margin="0 auto"
          padding="2rem 2rem 5rem"
          gap="1.5rem"
          wrapMobile="wrap"
          justifyMobile="flex-start"
          heightMobile="unset"
          paddingMobile="1.5rem 1.5rem 2.5rem"
          direction="column"
          bgColor={WHITE}
          widthMobile="96%"
        >
          <H1>Help & FAQ</H1>
          <FlexBox direction="column" gap="0.75rem">
            <H2>Common Questions</H2>
            <P>
              Have questions about ParkSthal? Check out our frequently asked
              questions below for answers.
            </P>
          </FlexBox>
          <FlexBox direction="column" gap="0.75rem">
            <H2>How does ParkSthal work?</H2>
            <P>
              <strong>A:</strong> ParkSthal is a user-friendly mobile app that
              allows you to search for available parking spaces, make
              reservations, and pay securely. Here&apos;s how it works:
            </P>
            <ol>
              {howDoesItWork.map((step, index) => {
                return <Li key={index}>{step}</Li>;
              })}
            </ol>
          </FlexBox>
          <FlexBox direction="column" gap="0.75rem">
            <H2>Is my payment information safe with ParkSthal?</H2>
            <P>
              <strong>A:</strong> Absolutely. We prioritize security, and your
              payment information is encrypted and stored securely. We use
              industry-standard security measures to protect your data.
            </P>
          </FlexBox>
          <FlexBox direction="column" gap="0.75rem">
            <H2>Can I List my parking space on ParkSthal?</H2>
            <P>
              <strong>A:</strong> Yes, we welcome parking space owners to join
              our platform. You can List your spaces and start earning from
              them. Here&apos;s how:
            </P>
            <ol>
              <Li>Sign up or log in to ParkSthal account.</Li>
              <Li>
                Add your parking spaces, including details Like location and
                availabiLity.
              </Li>
              <Li>Set pricing and availabiLity preferences.</Li>
              <Li>Start receiving bookings from users.</Li>
            </ol>
          </FlexBox>
          <FlexBox direction="column" gap="0.75rem">
            <H2>Getting Help</H2>
            <P>
              If you have any other questions or need assistance, please
              don&apos;t hesitate to contact our friendly support team at
              <strong> contact.parksthal@gmail.com</strong>. We&apos;re here to
              help you.
            </P>
          </FlexBox>
        </Wrapper>
      </ExternalWrapper>
    </Layout>
  );
};

export default HelpAndFAQ;
