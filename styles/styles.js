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
  color: #353535;
  line-height: 1;
  font-size: 1.6rem;
}

body, input, textarea, button {
  font-family: Roboto, Helvetica, sans-serif;
  font-weight: 400;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  cursor: pointer;
}

::selection {
  background-color: #999;
  color: #fff;
}

*:focus {
  outline: none;
  box-shadow: 0 0 0 0.3rem #999;
}


.modal {
  position: relative;
}

.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(119, 119, 119, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
}
`;
