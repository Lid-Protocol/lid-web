import { FC } from 'react';
import styled from 'styled-components';
import { colors } from 'styles/theme';

import H2 from 'components/H2';
import { Box, Button, FlexBox } from 'components/@basic';
import ContentWrapper from 'components/ContentWrapper';

import FeatureCardList from './FeatureCardList';

const DownloadBtn = styled(Button)``;

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

        <FeatureCardList marginTop={5.5} marginX="auto" width="100%" />
      </FlexBox>
    </ContentWrapper>
  </Box>
);

export default About;
