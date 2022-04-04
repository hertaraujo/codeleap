import { GlobalStyle } from "../styles/styles";
import { setAppElement } from "react-modal";

setAppElement("#main");

function MyApp({ Component, pageProps }) {
  return (
    <div id="main">
      <GlobalStyle />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
