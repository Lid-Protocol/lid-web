import { BoxType, Text } from 'components/@basic';

const H3: BoxType = ({ children, ...props }) => (
  <Text
    color="blue"
    fontWeight={500}
    lineHeight="1.4em"
    fontSize={3}
    as="h3"
    style={{ textTransform: 'uppercase' }}
    {...props}
  >
    {children}
  </Text>
);

export default H3;
