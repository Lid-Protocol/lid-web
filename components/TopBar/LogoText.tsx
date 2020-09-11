import { BoxProps } from 'components/@basic/Box';
import { Text } from 'components/@basic';

const LogoText = (props: BoxProps) => (
  <Text
    as="h1"
    fontWeight="bold"
    fontSize={2}
    style={{
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
    }}
    {...props}
  >
    <Text display={['none', 'block']}>Liquidity Dividends Protocol</Text>
    <Text fontSize={7} display={['block', 'none']}>LID</Text>
  </Text>
);

export default LogoText;
