import { FC } from 'react';
import Head from 'next/head';

import {
  Header,
  About,
  CertifiedPresaleInfo,
  TokenDistributionSection,
  Legal,
} from 'components/@pages/Home';

const Home: FC = () => (
  <>
    <Head>
      <title>Liquidity Dividends Protocol</title>
    </Head>

    <Header />
    <About />
    <CertifiedPresaleInfo />
    <TokenDistributionSection />
    <Legal />
  </>
);

export default Home;
