import { FC } from 'react';
import { Box, Button, FlexBox, Image } from 'components/@basic';
import ContentWrapper from 'components/ContentWrapper';
import H2 from 'components/H2';

const FAQ: FC = () => (
  <Box id="faq" width="100%" bg="white">
    <ContentWrapper pt={5} pb={6}>
      <FlexBox justifyContent="center">
        <H2 mb={6} mt={5} color="black">
          FAQ
        </H2>
      </FlexBox>
    </ContentWrapper>
  </Box>
);

export default FAQ;
