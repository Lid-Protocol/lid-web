import { Box } from 'components/@basic';
import { BoxProps } from 'components/@basic/Box';
import ContentWrapper from 'components/ContentWrapper';
import headerImage from './header-background.png';

const Wrapper = ({ children, ...props }: BoxProps) => (
  <Box
    paddingBottom={[6, 7]}
    background={`url(${headerImage})`}
    backgroundSize={['cover', '100% auto', '90% auto']}
    backgroundRepeat="no-repeat"
    backgroundPosition={['center bottom', 'center bottom 15%']}
    {...props}
  >
    <ContentWrapper>
      <Box marginX="auto">
        {children}
      </Box>
    </ContentWrapper>
  </Box>
);

export default Wrapper;
