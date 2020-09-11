import styled from 'styled-components';
import Box, { BoxType } from './Box';

const List: BoxType & { Item: BoxType } = styled(Box)`
`;

List.defaultProps = {
  as: 'ul',
  color: 'offWhite',
};

List.Item = styled(Box)`
  list-style: none;
`;

List.Item.defaultProps = {
  as: 'li',
};

export default List;
