import { FC } from 'react';
import Head from 'next/head';
import { Main } from 'components/@pages/PresaleApplication';

// import {} from 'components/@pages/Application';

const Application: FC = () => (
  <>
    <Head>
      <title>Certified Presale Application | Liquidity Dividends Protocol</title>
    </Head>

    <Main />
  </>
);

export default Application;
