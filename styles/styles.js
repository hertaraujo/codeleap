import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
}

body {
  -webkit-font-smoothing: antialiased;
  font-family: Roboto, Helvetica, sans-serif;
  color: #353535;
  font-weight: 400;
  line-height: 1;
  font-size: 1.6rem;
}

a {
  color: inherit;
  text-decoration: none;
}

::selection {
  background-color: #999;
  color: #fff;
}

*:focus {
  outline: none;
  box-shadow: 0 0 0 0.3rem #999;
}
`;
