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
import FerrumNetworkImage from './FerrumNetwork.png';

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
          <a href="https://askobar-network.com/">
            <Box maxWidth={['300px', '300px', '300px', '300px']} mb="2rem" textAlign={['center', 'left']} pt={['20px', '0']}>
              <Image width="70%" height="auto" src={AskboBarImage} />
            </Box>
          </a>
          <a href="https://www.dextools.io/">
            <Box maxWidth={['300px', '300px', '300px', '300px']} mb="2rem" textAlign={['center', 'left']} pt={['20px', '0']}>
              <Image width="70%" height="auto" src={DEXToolsImage} />
            </Box>
          </a>
          <a href="https://audits.quillhash.com/">
            <Box maxWidth={['300px', '300px', '300px', '300px']} mb="2rem" textAlign={['center', 'left']} pt={['20px', '0']}>
              <Image width="70%" height="auto" src={QuillAuditImage} />
            </Box>
          </a>
          <a href="https://www.trusttoken.com/">
            <Box maxWidth={['200px', '200px', '200px', '200px']} mb="2rem" textAlign={['center', 'left']} pt={['20px', '0']}>
              <Image width="70%" height="auto" src={TUSDImage} />
            </Box>
          </a>
          <a href="https://ferrum.network/">
            <Box maxWidth={['500px', '500px', '500px', '500px']} mb="2rem" ml="-6%" textAlign={['center', 'left']} pt={['20px', '0']}>
              <Image width="70%" height="auto" src={FerrumNetworkImage} />
            </Box>
          </a>
        </FlexBox>
      </FlexBox>
    </ContentWrapper>
  </Box>
);

export default Partners;
