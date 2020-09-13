import { FC } from 'react';
import { Box, Image, FlexBox, Button } from 'components/@basic';
import ContentWrapper from 'components/ContentWrapper';

import HorizontalMenu from './HorizontalMenu';
import VerticalMenu from './VerticalMenu';
import LogoText from './LogoText';
import logoImage from './main-logo.png';

const TopBar: FC = () => (
  <Box bg="darkBlue" marginTop={5}>
    <ContentWrapper>
      <FlexBox alignItems="center" marginX="auto">
        <Button
          href="/"
          variant=""
          display="flex"
          alignItems="center"
          padding={[0]}
        >
          <Image src={logoImage} height={[36, 26]} width={[36, 26]} mr={3} />

          <LogoText ml={1} />
        </Button>

        <FlexBox.Spacer />

        <Box display={['none', 'none', 'block']}>
          <HorizontalMenu />
        </Box>

        <Box display={['block', 'block', 'none']}>
          <VerticalMenu />
        </Box>
      </FlexBox>
    </ContentWrapper>
  </Box>
);

export default TopBar;
