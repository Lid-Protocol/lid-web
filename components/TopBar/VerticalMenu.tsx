import { FC, useState } from 'react';
import styled from 'styled-components';
import { Box, Image, List, FlexBox } from 'components/@basic';

import hamburgImage from './hamburg.png';
import closeImage from './close.png';

export const menuItems = Object.entries({
  About: '/#about',
  FAQ: '/#faq',
  Socials: '/#footer'
});

const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: black;
  width: 100vw;
  min-height: 100vh;
  padding: 5%;
  z-index: 1;
`;

const ImageWrapper = styled(Image)``;

const VerticalMenu: FC = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Box variant="black">
      {!isOpen && (
        <ImageWrapper
          src={hamburgImage}
          width={[20]}
          onClick={() => setOpen(true)}
        />
      )}
      {isOpen && (
        <MenuWrapper>
          <FlexBox justifyContent="flex-end">
            <ImageWrapper
              src={closeImage}
              width={[15]}
              onClick={() => setOpen(false)}
            />
          </FlexBox>
          <List fontSize={3} fontWeight={500}>
            {menuItems.map(([label, href]) => (
              <List.Item key={href} mb={4}>
                <a href={href} onClick={() => setOpen(false)}>
                  {label}
                </a>
              </List.Item>
            ))}
          </List>
        </MenuWrapper>
      )}
    </Box>
  );
};

export default VerticalMenu;
