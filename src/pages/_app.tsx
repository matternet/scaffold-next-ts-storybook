import React from 'react';
import NextApp from 'next/app';
import NProgress from 'nprogress';
import Router from 'next/router';
import Head from 'next/head';
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';
import theme from '../theme';

Router.events.on('routeChangeStart', url => {
  // eslint-disable-next-line no-console
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

class App extends NextApp {
  render() {
    const { Component } = this.props;

    return (
      <>
        <Head>
          {/* Import CSS for nprogress */}
          <link rel="stylesheet" type="text/css" href="/nprogress.css" />
        </Head>
        <ThemeProvider theme={theme}>
          <CSSReset />
          <ColorModeProvider>
            <Component />
          </ColorModeProvider>
        </ThemeProvider>
      </>
    );
  }
}

export default App;
