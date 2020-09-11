import styled from 'styled-components';
import Box, { BoxType } from './Box';

const Text: BoxType = styled(Box)``;

Text.defaultProps = {
  as: 'span',
  color: 'inherit',
};

export default Text;
