import { FC ,useState ,useEffect } from 'react';
import Head from 'next/head';

import {
  Header,
  About,
  Legal,
} from 'components/@pages/Home';

export default function Home (): any {
    return (
      <>
        <Head>
          <title>Liquidity Dividends Protocol</title>
        </Head>

        <Header />
        <About />
        <Legal />
      </>
    )
}


