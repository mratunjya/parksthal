import { REM } from "next/font/google";
import { createGlobalStyle } from "styled-components";

import {
  PRIMARY_500,
  TERTIARY_300,
  TERTIARY_900,
  SECONDARY_300,
  SECONDARY_500,
  SECONDARY_800,
  WHITE,
} from "@colors";

const font = REM({
  preload: true,
  display: "swap",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const GlobalStyles = createGlobalStyle`
  :root {
    --swiper-navigation-color: ${PRIMARY_500} !important;
  }

  /* Global CSS rules */
  html,
  body {
    ${font.style};
    color: ${SECONDARY_800};
    background-color: ${WHITE};
  }

  *::selection {
    color: ${WHITE};
    background-color: ${SECONDARY_800};
  }

  input {
    color: ${SECONDARY_500};
    border-bottom: 2px solid ${PRIMARY_500};
  }

  input:disabled {
    border: 2px solid;
    border-color: ${TERTIARY_900};
    background-color: ${TERTIARY_300};
  }

  input:focus {
    border: 2px solid ${PRIMARY_500};
  }

  input::placeholder {
    color: ${SECONDARY_300};
  }

  input::-ms-input-placeholder {
    color: ${SECONDARY_300};
  }

  .Toastify__toast-body {
    ${font.style};
  }

  .Toastify__toast-theme--colored.Toastify__toast--success {
    background-color: ${PRIMARY_500};
  }
`;

export default GlobalStyles;
