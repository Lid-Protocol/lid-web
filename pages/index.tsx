import { FC ,useState ,useEffect } from 'react';
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

export default function Home (): any {
  
  const [isBlog, setIsBlog] = useState(false);

  function check_blogPage() {
    var Temp = window.location.href.split("#");

    if (Temp[1] == "blog"){
      setIsBlog(true);
    }

    console.log(Temp[1])
  }

  useEffect(() => {
    check_blogPage();
  })

  if (isBlog) {
    return (
      <>
        <Head>
          <title>Liquidity Dividends Protocol</title>
        </Head>

        <p>
          Hello World
        </p>

      </>
    )
  } else {
    return (
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
    )
  }
}

