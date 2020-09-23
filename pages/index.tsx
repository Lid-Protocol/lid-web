import { FC } from 'react';
import Head from 'next/head';

import {
  Header,
  About,
  CertifiedPresaleInfo,
  TokenDistributionSection,
  Legal,
  Roadmap,
  FAQ,
} from 'components/@pages/Home';
import Partners from 'components/@pages/Home/Partners';

const Home: FC = () => (
  <>
    <Head>
      <title>Liquidity Dividends Protocol</title>
    </Head>

    <Header />
    <About />
    <CertifiedPresaleInfo />
    <TokenDistributionSection />
    <Roadmap />
    <FAQ />
    <Partners />
    <Legal />
  </>
);

export default Home;
