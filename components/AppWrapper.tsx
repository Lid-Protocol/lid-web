import React from 'react';
import { Box } from 'components/@basic';

const AppWrapper: React.FC = ({ children }) => (
  <Box color="offWhite">
    {children}
  </Box>
);

export default AppWrapper;
