import { BoxType, Text } from 'components/@basic';

const H2: BoxType = ({ children, ...props }) => (
  <Text lineHeight="1.4em" fontSize={8} as="h2" {...props}>
    {children}
  </Text>
);

export default H2;
