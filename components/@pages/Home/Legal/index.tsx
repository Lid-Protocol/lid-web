import { FC } from 'react';
import styled from 'styled-components';

import { Box, BoxType, FlexBox, Text } from 'components/@basic';
import ContentWrapper from 'components/ContentWrapper';
import H2 from 'components/H2';

const TextWrapper: BoxType = styled(Text)`
  p:not(:last-child) {
    margin-bottom: ${(props: any) => props.theme.space[4.5]}px;
  }
`;

const Legal: FC = () => (
  <Box id="legal" width="100%">
    <ContentWrapper pt={6} pb={6}>
      <FlexBox flexDirection="column" alignItems="center" justifyContent="center">

        <H2 mb={5}>Legal Disclaimer</H2>

        <TextWrapper maxWidth={940} textAlign="center" fontSize={1} as="div">
          <p>The information provided on this website does not constitute investment advice, financial advice, trading advice, or any other sort of advice and you should not treat any of the website&apos;s content as such. The LID team does not recommend that any cryptocurrency should be bought, sold, or held by you. Do conduct your own due diligence.</p>
          <p>By purchasing LID , you agree that you are not purchasing a security or investment and you agree to hold the team harmless and not liable for any losses or taxes you may incur. You also agree that the team is presenting the token “as is” and is not legally required to provide any support or services. You should have no expectation of any form from LID and its team.</p>
          <p>Always make sure that you are in compliance with your local laws and regulations before you make any purchase.</p>
        </TextWrapper>
      </FlexBox>
    </ContentWrapper>
  </Box>
);

export default Legal;
