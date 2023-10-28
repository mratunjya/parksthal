import "@styles/globals.css";

import Head from "next/head";
import { useRouter } from "next/router";
import { ImCross } from "react-icons/im";
import GlobalStyles from "@GlobalStyles";
import { useEffect, useState } from "react";
import NextNProgress from "nextjs-progressbar";
import isPropValid from "@emotion/is-prop-valid";
import { SessionProvider } from "next-auth/react";
import styled, { StyleSheetManager } from "styled-components";
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io";

import { PRIMARY_500 } from "@colors";
import { FlexBox } from "@common/FlexBox";
import PageLoader from "@common/PageLoader";
import CommonLink from "@common/CommonLink";
import { SECONDARY_200, SECONDARY_500, WHITE } from "@colors";

const BackAndForthWrapper = styled(FlexBox)``;

const BackwardButton = styled(FlexBox)`
  &:hover {
    transform: scale(1.1);
    svg {
      transform: scale(1.5);
    }
  }
`;

const ForwardBtn = styled(FlexBox)`
  &:hover {
    transform: ${(props) => !props.disabled && "scale(1.1)"};
    cursor: ${(props) => props.disabled && "not-allowed"};
    svg {
      transform: ${(props) => !props.disabled && "scale(1.5)"};
    }
  }
`;

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const router = useRouter();
  const [routes, setRoutes] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const goBack = () => {
    setRoutes((prevRoutes) => {
      return prevRoutes?.length > 0
        ? [...prevRoutes, router.asPath]
        : [router.pathname];
    });
    router.back();
  };

  const goForward = () => {
    if (routes.length > 0) {
      const toForward = routes[routes.length - 1];
      setRoutes((prevRoutes) => {
        prevRoutes?.pop();
        return [...prevRoutes];
      });
      router.push(toForward);
    }
  };

  useEffect(() => {
    let scrollTimeout;
    const handleScroll = () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      setIsHidden(true);
      scrollTimeout = setTimeout(() => {
        setIsHidden(false);
      }, 350);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isLoaded ? (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyles />
      <NextNProgress
        height={3}
        stopDelayMs={200}
        color={PRIMARY_500}
        startPosition={0.3}
        showOnShallow={true}
      />
      <SessionProvider session={session}>
        <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
          <Component {...pageProps} />
          <BackAndForthWrapper
            left="50%"
            gap="0.75rem"
            radius="2rem"
            bottom="1.5rem"
            bgColor={WHITE}
            position="fixed"
            padding="0.5rem 0.75rem"
            transform="translateX(-50%)"
            opacity={isHidden ? "0" : "1"}
            border={`1px solid ${SECONDARY_200}`}
          >
            <BackwardButton
              onClick={goBack}
              ratio="1"
              width="2rem"
              radius="50%"
              height="2rem"
              align="center"
              cursor="pointer"
              padding="0.5rem"
              justify="center"
              border={`1px solid ${SECONDARY_200}`}
            >
              <IoMdArrowRoundBack size="100%" color={SECONDARY_500} />
            </BackwardButton>
            <FlexBox
              flex="1"
              width="1px"
              radius="2px"
              margin="4px 0"
              bgColor={SECONDARY_200}
            />
            {routes.length === 0 ? (
              <ForwardBtn
                onClick={goForward}
                ratio="1"
                width="2rem"
                radius="50%"
                height="2rem"
                align="center"
                cursor="pointer"
                padding="0.5rem"
                justify="center"
                disabled={routes.length === 0}
                border={`1px solid ${SECONDARY_200}`}
              >
                <ImCross color={SECONDARY_500} size="70%" />
              </ForwardBtn>
            ) : (
              <CommonLink href={routes[routes.length - 1]}>
                <ForwardBtn
                  onClick={goForward}
                  ratio="1"
                  width="2rem"
                  radius="50%"
                  align="center"
                  cursor="pointer"
                  padding="0.5rem"
                  justify="center"
                  disabled={routes.length === 0}
                  border={`1px solid ${SECONDARY_200}`}
                >
                  <IoMdArrowRoundForward size="100%" color={SECONDARY_500} />
                </ForwardBtn>
              </CommonLink>
            )}
          </BackAndForthWrapper>
        </StyleSheetManager>
      </SessionProvider>
    </>
  ) : (
    <PageLoader />
  );
}
