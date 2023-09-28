import { REM } from "next/font/google";
import { createGlobalStyle } from "styled-components";

import { SECONDARY_800, WHITE } from "@colors";

const font = REM({ subsets: ["latin"] });

const GlobalStyles = createGlobalStyle`
  /* Global CSS rules */
  html,
  body {
    color: ${SECONDARY_800};
    background-color: ${WHITE};
    ${font.style};
  }

  *::selection {
    background-color: ${SECONDARY_800};
    color: ${WHITE};
  }
`;

export default GlobalStyles;
