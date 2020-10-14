import { useEffect, useState } from 'react';
import { NextComponentType } from 'next';
import { AppContext, AppInitialProps, AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GA_TRACKING_ID } from '../lib/gtag';

import Head from 'next/head';
import Router from 'next/router';

import AppWrapper from 'components/AppWrapper';
import TopBar from 'components/TopBar';
import Footer from 'components/Footer';
import theme from 'styles/theme';

import 'styles/basic.css';
import 'styles/fonts.css';

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => {

  const [urlPath, setUrlPath] = useState("/");

  useEffect(() => {
    setUrlPath(Router.asPath)
  })
  
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Head>
          <meta itemProp="image" content="/static/opengraph.png" />
          <meta property="og:url" content="https://lid.sh" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Liquidity Dividends Protocol" />
          <meta
            property="og:description"
            content="Liquidity Dividends Protocol"
          />
          <meta property="og:image" content="/static/opengraph.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Liquidity Dividends Protocol" />
          <meta
            name="twitter:description"
            content="Liquidity Dividends Protocol"
          />
          <meta name="twitter:image" content="/static/opengraph.png" />
          <link rel="icon" type="image/png" href="/static/logo.png" />
          <link rel="apple-touch-icon" href="/static/logo.png" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: '${urlPath}',
              });
            `,
            }}
          />
        </Head>
        <TopBar />
        <Component {...pageProps} />
        <Footer />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;