import { FC } from 'react';
import Head from 'next/head';
import SubmitForm from 'components/@pages/SubmitForm';

// import {} from 'components/@pages/Application';

const Application: FC = () => (
  <>
    <Head>
      <title>
        Certified Presale Application | Liquidity Dividends Protocol
      </title>
    </Head>

    <SubmitForm />
  </>
);

export default Application;
