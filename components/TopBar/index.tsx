import { FC } from 'react';
import { Box, Image, FlexBox } from 'components/@basic';
import ContentWrapper from 'components/ContentWrapper';

import HorizontalMenu from './HorizontalMenu';
import LogoText from './LogoText';
import logoImage from './main-logo.png';

const TopBar: FC = () => (
  <Box bg="darkBlue" marginTop={5}>
    <ContentWrapper>
      <FlexBox alignItems="center" marginX="auto">

        <Image src={logoImage} height={[36, 26]} width={[36, 26]} mr={3} />
        <LogoText ml={1} />

        <FlexBox.Spacer />

        <Box display={['none', 'none', 'block']}>
          <HorizontalMenu />
        </Box>

      </FlexBox>
    </ContentWrapper>
  </Box>
);

export default TopBar;
