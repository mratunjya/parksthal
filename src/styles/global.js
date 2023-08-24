import { createGlobalStyle } from 'styled-components';
import { SECONDARY_800, WHITE } from "@colors";

const GlobalStyles = createGlobalStyle`
  /* Global CSS rules */
  html,
  body {
    color: ${SECONDARY_800};
    background-color: ${WHITE};
  }

  *::selection {
    background-color: ${SECONDARY_800};
    color: ${WHITE};
  }
`;

export default GlobalStyles;
