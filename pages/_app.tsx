import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import Head from "next/head";
import { AppProps } from "next/app";

import { Header } from "../components/Header";
import { theme } from "../theme";

import "macro-css";
import "../styles/globals.scss";
import { Provider } from "react-redux";
import { wrapper } from "../redux/store";
import { FC } from "react";

const App: FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <>
      <Head>
        <title>RJournal</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap" />
      </Head>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <Header />
          <Component {...props.pageProps} />
        </Provider>
      </MuiThemeProvider>
    </>
  );
};

export default App;
