import styled from 'styled-components';
import Box, { BoxType } from './Box';

const Button: BoxType<{ variant: string, href?: string }> = styled(Box)`
  text-transform: uppercase;
`;

Button.defaultProps = {
  as: 'a',
  href: '#',
  flexGrow: 0,
  border: '1px solid transparent',
  padding: '10px 22px 9px',
  display: 'inline-block',
  fontSize: 14,
  fontWeight: 500,
  lineHeight: '1em',
  flexShrink: 0,
  borderRadius: 40,
};

export default Button;
