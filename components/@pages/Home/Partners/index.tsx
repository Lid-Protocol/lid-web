import React from 'react';
import { colors } from 'styles/theme';

import H2 from 'components/H2';
import { Box, FlexBox, Image } from 'components/@basic';
import ContentWrapper from 'components/ContentWrapper';

import AskboBarImage from './AskboBar.png';
import DEXToolsImage from './DEXTools.png';
import XFIImage from './XFI.png';
import QuillAuditImage from './QuillAudits.png';
import TUSDImage from './TUSD.png'

const Partners: React.FC = () => (
  <Box
    id="partners"
    background={colors.lightBlueGradient}
    py={5}
  >
    <ContentWrapper pt={4}>
      <FlexBox flexDirection="column" alignItems="center" flexWrap="wrap">
        <H2 marginBottom={4}>Partners</H2>
        <FlexBox
          flexDirection={['column', 'column', 'row']}
          flexWrap="wrap"
          alignItems="center"
          mt={[0, 5.5]}
        >
          <Box maxWidth={['300px', '300px', '300px', '300px']} mb="2rem">
            <Image width="70%" height="auto" src={AskboBarImage} />
          </Box>
          <Box maxWidth={['300px', '300px', '300px', '300px']} mb="2rem">
            <Image width="70%" height="auto" src={DEXToolsImage} />
          </Box>
          <Box maxWidth={['300px', '300px', '300px', '300px']} mb="2rem">
            <Image width="70%" height="auto" src={XFIImage} />
          </Box>
          <Box maxWidth={['300px', '300px', '300px', '300px']} mb="2rem">
            <Image width="70%" height="auto" src={QuillAuditImage} />
          </Box>
          <Box maxWidth={['300px', '300px', '300px', '300px']} mb="2rem">
            <Image width="70%" height="auto" src={TUSDImage} />
          </Box>
        </FlexBox>
      </FlexBox>
    </ContentWrapper>
  </Box>
);

export default Partners;
