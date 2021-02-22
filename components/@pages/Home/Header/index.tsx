import { FC } from 'react';
import { Box, Text, Button } from 'components/@basic';
import H2 from 'components/H2';
import Wrapper from './Wrapper';

const Header: FC = () => (
  <Wrapper mt={6} pt={4}>
    <H2>Welcome to LID</H2>

    <Text
      fontSize={3}
      mt={[5, 5]}
      pb={[4, 2]}
      as="p"
      maxWidth="390px"
      fontWeight="500"
      lineHeight="1.5em"
    >
      The LID token by Liquidity Dividends Protocol allows stakers to earn
      rewards from bots trading on Uniswap while gaining exposure
      to the wide variety of assets paired against LID as locked liquidity.
    </Text>

    <Box mt={5}>
      <Button variant="gradient" mb={[4, 0]} href="https://stake.lid.eth.link/">
        Staking Dapp
      </Button>

      <Button
        ml={4}
        variant="outline"
        href="https://penguinswap.eth.link/#/swap?inputCurrency=0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2&outputCurrency=0x0417912b3a7AF768051765040A55BB0925D4DDcF"
      >
        PenguinSwap
      </Button>

      <Button ml={4} variant="outline" href="https://liftoff.eth.link">
        LiftOff Dapp
      </Button>
    </Box>
  </Wrapper>
);

export default Header;
