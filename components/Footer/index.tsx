import { FC } from 'react';
import { Box, BoxType, Image, List, Text } from 'components/@basic';
import ContentWrapper from 'components/ContentWrapper';

import discordIcon from './discord.png';
import telegramIcon from './telegram.png';
import twitterIcon from './twitter.png';
import mediumIcon from './medium.png';
import githubIcon from './github.png';

const socialLinks = [
  {
    title: 'Discord',
    href: 'https://discord.gg/r4CDyEnUAm',
    iconSrc: discordIcon,
  },
  {
    title: 'Telegram',
    href: 'https://t.me/LIDProtocol',
    iconSrc: telegramIcon,
  },
  {
    title: 'Twitter',
    href: 'https://twitter.com/lid_protocol',
    iconSrc: twitterIcon,
  },
  {
    title: 'Medium',
    href: 'https://medium.com/@LIDProtocol',
    iconSrc: mediumIcon,
  },
  {
    title: 'GitHub',
    href: 'https://github.com/lid-protocol',
    iconSrc: githubIcon,
  },
];

const SocialLinksList: BoxType = ({ ...props }) => (
  <Box {...props}>
    <List
      display="flex"
      justifyContent="center"
      flexDirection="row"
      flexWrap="wrap"
    >
      {socialLinks.map(({ title, href, iconSrc }) => (
        <List.Item display="inline-block" key={iconSrc} mb={4} ml={3} mr={3}>
          <Box
            bg="socialBackground"
            width={[32, 40]}
            height={[32, 40]}
            borderRadius="50%"
          >
            <a href={href} target="_blank" rel="noopener noreferrer">
              <Image height="100%" width="100%" src={iconSrc} alt={title} />
            </a>
          </Box>
        </List.Item>
      ))}
    </List>
  </Box>
);

const Footer: FC = () => (
  <ContentWrapper id="footer" as="footer" mb={5}>
    <SocialLinksList mb={5} />

    <Text display="block" textAlign="center" fontSize={2} color="gray" py={4.5}>
      &copy; 2021 Liquidity Dividends Protocol. All rights reserved.
    </Text>
  </ContentWrapper>
);

export default Footer;
