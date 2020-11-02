import styled from 'styled-components';
import Box, { BoxType } from './Box';

const Input: BoxType & { Item: BoxType } = styled(Box)``;

Input.defaultProps = {
  as: 'input',
};

export default Input;
