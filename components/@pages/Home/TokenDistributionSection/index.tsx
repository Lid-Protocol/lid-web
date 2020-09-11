import { FC } from 'react';
import { Box, Button, FlexBox, Image } from 'components/@basic';
import ContentWrapper from 'components/ContentWrapper';

import DistributionDonutImage from './distribution-donut.png';
import DistributionDonutList from './distribution-list.png';

const TokenDistributionSection: FC = () => (
  <Box id="tokenomics" width="100%" bg="white">
    <ContentWrapper pt={[6, 4.5]} pb={6}>
      <FlexBox justifyContent="center">
        <FlexBox flexDirection={['column', 'column', 'row']} justifyContent="center" flexWrap="wrap" mt={[0, 5.5]}>

          <Box width={['100%']} maxWidth={['300px', '300px', '300px', '320px']} mr={[0, 0, 6, 7]} mb={[6.5, 5.5, 0]}>
            <Image width="100%" height="auto" src={DistributionDonutList} />
            <Button variant="gradient" mt={5}>Smart contract</Button>
          </Box>

          <Box width={['100%']} maxWidth={['300px', '300px', '300px', '320px']} mr={0} mb={[5.5, 5.5, 0]}>
            <Image width="100%" height="auto" src={DistributionDonutImage} />
          </Box>

        </FlexBox>
      </FlexBox>
    </ContentWrapper>
  </Box>
);

export default TokenDistributionSection;
