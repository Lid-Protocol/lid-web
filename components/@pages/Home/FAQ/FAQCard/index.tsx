import { FC, useState } from 'react';
import styled from 'styled-components';
import { Box, Button, FlexBox, Image } from 'components/@basic';

interface IFAQCard {
  title: string;
  body: Array<JSX.Element> | JSX.Element;
}

const TitleWrapper = styled(Box)`
  background: linear-gradient(to right, #3dbbfa, #246b8f);
`;

const Collapse = styled.div`
  overflow: hidden;
  height: ${(props: any) => (props.isOpen ? 'auto' : '0px')};
  li {
    list-style-type: circle;
    list-style-position: inside;
  }
`;

const FAQCard: FC<IFAQCard> = ({ title, body }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Box id="faq card" width="100%" mb={[3]}>
      <TitleWrapper px={[17, 25]} py={[3, 13]} onClick={() => setOpen(!isOpen)}>
        <FlexBox
          justifyContent="space-between"
          fontWeight={[500]}
          fontSize={[18, 22]}
        >
          <p>{`Q. ${title}`}</p>
          <p>{isOpen ? '-' : '+'}</p>
        </FlexBox>
      </TitleWrapper>

      <Collapse isOpen={isOpen}>
        <Box
          fontSize={[16, 20]}
          color="black"
          border="1px solid #366EF8"
          px={[17, 34]}
          py={[16, 27]}
        >
          {body}
        </Box>
      </Collapse>
    </Box>
  );
};

export default FAQCard;
