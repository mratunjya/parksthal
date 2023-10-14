import styled from "styled-components";

import Layout from "@layout";
import bg from "../assets/bg.svg";
import { FlexBox } from "@common/FlexBox";
import { H1, H2, Li, P } from "@common/Text";
import { PRIMARY_100, WHITE } from "@colors";

const Wrapper = styled(FlexBox)`
  background-image: url(${bg.src});
  background-size: 25%;

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

const InnerWrapper = styled(FlexBox)``;

const PrivacyPolicy = () => {
  return (
    <Layout title="ParkSthal: Privacy Policy">
      <Wrapper bgColor={PRIMARY_100}>
        <InnerWrapper
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
          <H1>Privacy Policy</H1>
          <P>
            At ParkSthal, we value your privacy and are committed to protecting
            your personal information. This Privacy Policy explains how we
            collect, use, and safeguard your data when you use our services.
          </P>
          <FlexBox direction="column" gap="0.75rem">
            <H2>Information We Collect</H2>
            <P>
              We collect information you provide when you use ParkSthal,
              including:
            </P>
            <ol>
              <Li>Your name, email address, and contact information</Li>
              <Li>Location data when you use our parking booking services</Li>
              <Li>Payment information when you make parking reservations</Li>
              <Li>
                Information from your device, such as your IP address and device
                type
              </Li>
            </ol>
          </FlexBox>
          <FlexBox direction="column" gap="0.75rem">
            <H2>How We Use Your Information</H2>
            <P>We use the information we collect to:</P>
            <ol>
              <Li>Provide and improve our parking booking services</Li>
              <Li>Process payments and confirm reservations</Li>
              <Li>Send you important updates and notifications</Li>
              <Li>
                Customize your experience and provide personalized
                recommendations
              </Li>
            </ol>
          </FlexBox>
          <FlexBox direction="column" gap="0.75rem">
            <H2>Security</H2>
            <P>
              We prioritize the security of your information and employ
              industry-standard measures to protect it from unauthorized access
              or disclosure.
            </P>
          </FlexBox>
          <FlexBox direction="column" gap="0.75rem">
            <H2>Your Choices</H2>
            <P>
              You have the right to access, update, or delete your personal
              information. You can also opt-out of receiving marketing
              communications from us.
            </P>
          </FlexBox>
          <FlexBox direction="column" gap="0.75rem">
            <H2>Contact Us</H2>
            <P>
              If you have any questions or concerns about our Privacy Policy or
              how we handle your data, please contact us at{" "}
              <strong>privacy@parksthal.com</strong>.
            </P>
          </FlexBox>
          <FlexBox direction="column" gap="0.75rem">
            <H2>Changes to This Policy</H2>
            <P>
              We may update our Privacy Policy to reflect changes in our
              practices or for legal reasons. We will notify you of any
              significant updates.
            </P>
          </FlexBox>
        </InnerWrapper>
      </Wrapper>
    </Layout>
  );
};

export default PrivacyPolicy;
