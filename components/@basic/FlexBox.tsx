import { FC } from 'react';
import styled from 'styled-components';
import Box, { BoxType } from './Box';

const FlexBox: BoxType & { Spacer: FC } = styled(Box)`
  display: flex;
`;

FlexBox.Spacer = () => <Box marginRight="auto" />;

export default FlexBox;
