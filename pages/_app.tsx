import { NextComponentType } from 'next';
import { AppContext, AppInitialProps, AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import AppWrapper from 'components/AppWrapper';
import TopBar from 'components/TopBar';
import Footer from 'components/Footer';
import theme from 'styles/theme';

import 'styles/basic.css';
import 'styles/fonts.css';

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <AppWrapper>
      <TopBar />
      <Component {...pageProps} />
      <Footer />
    </AppWrapper>
  </ThemeProvider>
);

export default App;
