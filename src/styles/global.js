import { REM } from "next/font/google";
import { createGlobalStyle } from "styled-components";

import { SECONDARY_800, WHITE } from "@colors";

const font = REM({
  preload: true,
  display: "swap",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const GlobalStyles = createGlobalStyle`
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
`;

export default GlobalStyles;
