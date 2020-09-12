import { FC, ReactNode, useState } from 'react';
import styled from 'styled-components';
import { Box, BoxType, Button, FlexBox, Image } from 'components/@basic';
import { colors } from 'styles/theme';

interface IFAQCard {
  title: string;
}

const TitleWrapper = styled(Box)`
  cursor: pointer;
  transition-duration: 70ms;
  &:hover { opacity: .9 }
  &:active { opacity: .8 }
`;

const Collapse = styled.div`
  overflow: hidden;
  height: ${(props: any) => (props.isOpen ? 'auto' : '0px')};
  cursor: default;
  li {
    list-style-type: circle;
    list-style-position: inside;
  }
`;

const FAQCard: BoxType<IFAQCard> = ({ title, children, ...props }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Box id="faq card" width="100%" mb={[3]} {...props}>
      <TitleWrapper as="a" display="block" background={colors.lightBlueGradient} px={[17, 25]} py={[3, 13]} onClick={() => setOpen(!isOpen)}>
        <FlexBox
          justifyContent="space-between"
          fontWeight={[500]}
          fontSize={[18, 22]}
        >
          <p>{`Q. ${title}`}</p>
          <FlexBox alignItems="center" justifyContent="center">
            <p>{isOpen ? '-' : '+'}</p>
          </FlexBox>
        </FlexBox>
      </TitleWrapper>

      <Collapse isOpen={isOpen}>
        <Box
          fontSize={[16, 20]}
          color="black"
          border="1px solid"
          borderColor="blue"
          px={[17, 34]}
          py={[16, 27]}
        >
          {children}
        </Box>
      </Collapse>
    </Box>
  );
};

export default FAQCard;
