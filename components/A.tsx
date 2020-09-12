import { BoxType, Text } from 'components/@basic';

const A: BoxType<{ href: string }> = ({ children, ...props }) => (
  <Text as="a" color="blue" {...props}>
    {children}
  </Text>
);

export default A;
