import { BoxType, Text } from 'components/@basic';

const H2: BoxType = ({ children, ...props }) => (
  <Text fontSize={8} as="h2" {...props}>
    {children}
  </Text>
);

export default H2;
