import styled from "styled-components";

import Layout from "@layout";
import bg from "../assets/bg.svg";
import { H1, H2, P } from "@common/Text";
import { FlexBox } from "@common/FlexBox";
import { PRIMARY_100, WHITE } from "@colors";

const ExternalWrapper = styled(FlexBox)`
  background-image: url(${bg.src});
  background-size: 25%;
`;

const Wrapper = styled(FlexBox)``;

const Contact = () => {
  return (
    <Layout title="ParkSthal: Contact">
      <ExternalWrapper minHeigth="" bgColor={PRIMARY_100} flex="1">
        <Wrapper
          width="86.67%"
          maxWidth="75rem"
          margin="0 auto"
          padding="2rem 2rem 5rem"
          gap="1.5rem"
          wrapMobile="wrap"
          justifyMobile="flex-start"
          paddingMobile="1.5rem 1.5rem 2.5rem"
          direction="column"
          bgColor={WHITE}
          widthMobile="96%"
        >
          <H1>Contact Us</H1>
          <FlexBox direction="column" gap="0.75rem">
            <H2>Have Questions or Feedback?</H2>
            <P>
              We&apos;d love to hear from you! Contact our friendly team at
              <strong> contact.parksthal@gmail.com </strong> for inquiries,
              feedback, or collaborations.
            </P>
          </FlexBox>
          <FlexBox direction="column" gap="0.75rem">
            <H2>Stay Connected</H2>
            <P>
              Follow us on social media to stay updated on the latest parking
              tips, news, and exclusive offers. Join our community of parking
              enthusiasts!
            </P>
          </FlexBox>
          <FlexBox direction="column" gap="0.75rem">
            <H2>Join Our Team</H2>
            {/* TODO: Add Career Page Link */}
            <P>
              Are you passionate about urban mobility and want to be part of our
              team? Check out our Career Page for job opportunities and
              internships.
            </P>
          </FlexBox>
          <FlexBox direction="column" gap="0.75rem">
            <H2>Media Inquiries</H2>
            <P>
              For media inquiries or interview requests, please contact
              <strong> media.parksthal@gmail.com</strong>. We&apos;re happy to
              provide information and insights on urban parking and mobility.
            </P>
          </FlexBox>
        </Wrapper>
      </ExternalWrapper>
    </Layout>
  );
};

export default Contact;
