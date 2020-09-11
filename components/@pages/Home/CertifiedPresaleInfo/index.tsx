import { FC } from 'react';

import { Box, Button, FlexBox, Image, Text } from 'components/@basic';
import H2 from 'components/H2';
import ContentWrapper from 'components/ContentWrapper';

import PresaleImage from './presale-image.png';

const CertifiedPresaleInfo: FC = () => (
  <ContentWrapper pt={5} pb={5.5} mt={[0, 5]} mb={[0, 0]}>
    <FlexBox justifyContent="center" flexWrap="wrap">

      <Box id="presale" maxWidth={['150px', '240px', '240px']} mr={[4, 6]} mb={[5.5, 5.5, 0]}>
        <Image width="100%" height="auto" src={PresaleImage} />
      </Box>

      <Box>
        <H2>LID Certified Presale</H2>

        <Text fontSize={3} mt={[4]} pb={[4, 2]} as="p" maxWidth="390px" fontWeight="500" lineHeight="1.5em">
          LID Certified Presale offers the most
          secure method for new projects to do
          Initial Liquidity Offerings in the DeFi space.
          LID Protocol deploys automated, non-custodial
          smart contracts that trustlessly lock liquidity
          raised through LID presale dApps.
        </Text>

        <FlexBox justifyContent={['center', 'initial']}>
          <Button variant="white" mt={5} mr={4} mb={[4, 0]}>
            Learn More
          </Button>
        </FlexBox>
      </Box>

    </FlexBox>
  </ContentWrapper>
);

export default CertifiedPresaleInfo;
