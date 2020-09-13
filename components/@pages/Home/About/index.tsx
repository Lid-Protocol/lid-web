import { FC } from 'react';
import { colors } from 'styles/theme';

import H2 from 'components/H2';
import { Box, Button, FlexBox } from 'components/@basic';
import ContentWrapper from 'components/ContentWrapper';

import FeatureCardList from './FeatureCardList';

const About: FC = () => (
  <Box
    id="about"
    boxShadow={`inset 0 -110px 0 ${colors.darkBlue}`}
    background={colors.lightBlueGradient}
    py={5}
  >
    <ContentWrapper pt={4}>
      <FlexBox flexDirection="column" alignItems="center" flexWrap="wrap">
        <H2 marginBottom={4}>Main Features</H2>

        <Button
          variant="white"
          href="https://ec5fa088-d20c-4213-b3a7-aec249c6d6e0.filesusr.com/ugd/e22d12_8dced0a3b4fc452490975d37ee933615.pdf"
        >
          Download Whitepaper
        </Button>

        <FeatureCardList marginTop={5.5} marginX="auto" width="100%" />
      </FlexBox>
    </ContentWrapper>
  </Box>
);

export default About;
