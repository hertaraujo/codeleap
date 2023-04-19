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

  /* 1em = 16px | 1320px - xem */
  @media (min-width: 82.5em) {
    /* 16px = 1rem | 10px - 62.5% | 14px - 87.5% */
    font-size: 87.5%;
  }
  /* 1em = 16px | 500px - xem | 31,25 */  
  @media (max-width: 31.25em) {
    /* 16px = 1rem | 10px - 62.5% | 9px - 56.25% */
    font-size: 56.25%;
  }
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
  border: none;
  background-color: transparent;
}

::selection {
  background-color: #c8d5f7;
  color: #fff;
}

*:focus {
  outline: none;
  box-shadow: 0 0 0 0.2rem #c8d5f7;
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
