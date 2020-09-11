import styled from 'styled-components';
import Box, { BoxType } from './Box';

const Image: BoxType<{ alt?: string }> = styled(Box)``;

Image.defaultProps = {
  as: 'img',
  border: 0,
  flexShrink: 0,
};

export default Image;
