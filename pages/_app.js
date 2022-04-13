import { GlobalStyle } from "../styles/styles";

import { Provider } from "react-redux";
import { store } from "../redux";

function MyApp({ Component, pageProps }) {
  return (
    <div id="main">
      <GlobalStyle />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}

export default MyApp;
