import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import "../styles/globals.scss";

import postsBoolReducer from "../features/bool";
import postsReducer from "../features/posts";
import { AuthProvider } from "../hooks/useAuth";

import type { AppProps } from "next/app";

// Reduxストア
const store = configureStore({
  reducer: {
    booleanValue: postsBoolReducer,
    posts: postsReducer,
  },
});

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AuthProvider>
  );
}

export default MyApp;
