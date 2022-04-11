import { GlobalStyle } from "../styles/styles";

import { Provider } from "react-redux";
import { store } from "../redux";

import { ErrorBoundary } from "../components/error/ErrorBoundary";

function MyApp({ Component, pageProps }) {
  return (
    <div id="main">
      <GlobalStyle />
      <Provider store={store}>
        {/* <ErrorBoundary> */}
        <Component {...pageProps} />
        {/* </ErrorBoundary> */}
      </Provider>
    </div>
  );
}

export default MyApp;
