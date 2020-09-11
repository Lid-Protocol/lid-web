import { Box, BoxType } from './@basic';

const ContentWrapper: BoxType = ({ children, ...props }) => (
  <Box marginX={[5, 6]} {...props}>
    <Box marginX="auto" maxWidth="maxContentWidth">
      {children}
    </Box>
  </Box>
);

export default ContentWrapper;
