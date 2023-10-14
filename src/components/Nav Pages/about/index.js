import styled from "styled-components";

import Layout from "@layout";
import bg from "../assets/bg.svg";
import { H1, H2, P } from "@common/Text";
import { FlexBox } from "@common/FlexBox";
import { PRIMARY_100, WHITE } from "@colors";

const Wrapper = styled(FlexBox)`
  background-image: url(${bg.src});
  background-size: 25%;
`;

const InnerWrapper = styled(FlexBox)``;

const About = () => {
  return (
    <Layout title="ParkSthal: About">
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
          <H1>About Us</H1>
          <FlexBox direction="column" gap="0.75rem">
            <H2>Welcome to ParkSthal</H2>
            <P>
              At ParkSthal, we are passionate about simplifying urban living
              through convenient parking solutions. Our goal is to make parking
              stress-free and accessible, so you can focus on what truly matters
              to you.
            </P>
          </FlexBox>
          <FlexBox direction="column" gap="0.75rem">
            <H2>Our Mission</H2>
            <P>
              At ParkSthal, our mission is clear: to revolutionize the way you
              park. We aim to tackle the challenges of urban congestion and
              limited parking spaces by providing a seamless parking booking
              experience. Whether you&apos;re a driver in search of a spot or a
              parking space owner looking to optimize your assets, ParkSthal is
              here to make your life easier.
            </P>
          </FlexBox>
          <FlexBox direction="column" gap="0.75rem">
            <H2>Who We Are</H2>
            <P>
              The ParkSthal team consists of dedicated individuals who
              understand the frustrations of parking in crowded cities. Founded
              by <em>Mratunjya Shankhdhar</em>, our team brings together a
              diverse range of expertise in technology and urban planning. What
              inspired us to create ParkSthal was the desire to create positive
              change in urban mobility.
            </P>
          </FlexBox>
          <FlexBox direction="column" gap="0.75rem">
            <H2>What We Offer</H2>
            <P>
              <strong>Smart Parking Booking:</strong> With ParkSthal, you can
              effortlessly find, book, and pay for parking spaces with just a
              few taps on your smartphone.
              <br />
              <br />
              <strong>Real-Time Availability:</strong> We provide real-time
              information on available parking spaces, ensuring you never waste
              time searching for a spot.
              <br />
              <br />
              <strong>Support for Parking Space Owners:</strong> If you own
              parking spaces, ParkSthal offers a platform to efficiently manage
              and monetize your assets.
            </P>
          </FlexBox>
          <FlexBox direction="column" gap="0.75rem">
            <H2>Why Choose Us</H2>
            <P>
              What sets ParkSthal apart is our commitment to user-friendly
              design, reliability, and customer satisfaction. Our easy-to-use
              app, cutting-edge technology, and dedication to making parking
              hassle-free make us your ideal parking companion.
            </P>
          </FlexBox>
          <FlexBox direction="column" gap="0.75rem">
            <H2>Join Us on Our Journey</H2>
            <P>
              We invite you to join us on our mission to transform urban
              parking. Stay updated on the latest parking tips, news, and
              exclusive offers by subscribing to our newsletter. Follow us on
              social media to become part of our community of parking
              enthusiasts.
            </P>
          </FlexBox>
          <FlexBox direction="column" gap="0.75rem">
            <H2>Contact Us</H2>
            <P>
              Have questions or feedback? We&apos;d love to hear from you!
              Contact our friendly team at
              <strong> contact.parksthal@gmail.com </strong>
            </P>
          </FlexBox>
          <FlexBox direction="column" gap="0.75rem">
            <H2>Thank You for Choosing ParkSthal!</H2>
            <P>
              We&apos;re grateful for your trust in ParkSthal. Explore our app,
              discover parking made simple, and experience the convenience of
              stress-free parking in the city.
            </P>
          </FlexBox>
          <FlexBox direction="column" gap="0.75rem">
            <H2>Testimonials</H2>
            <P>
              Here&apos;s what some of our satisfied users have to say about
              their experience with ParkSthal:
              <br />
              <br />- &quot;ParkSthal has made my daily commute so much easier.
              I never worry about finding a parking spot anymore!&quot; - Dummy
              User 2
              <br />
              <br />- &quot;As a parking space owner, ParkSthal has helped me
              maximize my revenue while providing a great service to
              drivers.&quot; - Dummy User 2
            </P>
          </FlexBox>
          <FlexBox direction="column" gap="0.75rem">
            <H2>Our Team</H2>
            <P>
              Meet the minds behind ParkSthal:
              <br />
              <br />- <em>Mratunjya Shankhdhar</em>, Founder & CEO: With over 2
              years of experience in Health Tech as Frontend Developer,
              <em>Mratunjya Shankhdhar</em> is a visionary leader passionate
              about improving urban mobility. He founded ParkSthal with the goal
              of making city parking more accessible and efficient.
            </P>
          </FlexBox>
          <FlexBox direction="column" gap="0.75rem">
            <H2>Our History</H2>
            <P>
              ParkSthal began its journey in 2023 with a vision to transform
              parking in cities. We&apos;ve overcome challenges and are excited
              about the future of urban mobility.
            </P>
          </FlexBox>
          <FlexBox direction="column" gap="0.75rem">
            <H2>FAQs</H2>
            <P>
              <strong>Q: How does ParkSthal work?</strong>
              <br />
              A: ParkSthal provides a user-friendly mobile app that allows you
              to search for available parking spaces, make reservations, and pay
              securely.
              <br />
              <br />
              <strong>Q: Is my payment information safe with ParkSthal?</strong>
              <br />
              A: Absolutely. We prioritize security, and your payment
              information is encrypted and stored securely.
              <br />
              <br />
              <strong>Q: Can I list my parking space on ParkSthal?</strong>
              <br />
              A: Yes, we welcome parking space owners to join our platform. You
              can list your spaces and start earning from them.
            </P>
          </FlexBox>
        </InnerWrapper>
      </Wrapper>
    </Layout>
  );
};

export default About;
