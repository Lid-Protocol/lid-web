import { FC } from 'react';
import { Box, BoxType, Image, List, Text } from 'components/@basic';
import ContentWrapper from 'components/ContentWrapper';

import discordIcon from './discord.png';
import telegramIcon from './telegram.png';
import twitterIcon from './twitter.png';
import mediumIcon from './medium.png';
import redditIcon from './reddit.png';
import githubIcon from './github.png';
import peepethIcon from './peepeth.png';
import mastodonIcon from './mastodon.png';

const socialLinks = [
  {
    title: 'Discord',
    href: '#',
    iconSrc: discordIcon,
  },
  {
    title: 'Telegram',
    href: '#',
    iconSrc: telegramIcon,
  },
  {
    title: 'Twitter',
    href: '#',
    iconSrc: twitterIcon,
  },
  {
    title: 'Medium',
    href: '#',
    iconSrc: mediumIcon,
  },
  {
    title: 'Reddit',
    href: '#',
    iconSrc: redditIcon,
  },
  {
    title: 'GitHub',
    href: '#',
    iconSrc: githubIcon,
  },
  {
    title: 'Peepeth',
    href: '#',
    iconSrc: peepethIcon,
  },
  {
    title: 'Mastodon',
    href: '#',
    iconSrc: mastodonIcon,
  },
];

const SocialLinksList: BoxType = ({ ...props }) => (
  <Box {...props}>
    <List display="flex" justifyContent="center" flexDirection="row" flexWrap="wrap">
      {socialLinks.map(({ title, href, iconSrc }) => (
        <List.Item display="inline-block" key={iconSrc} mb={4} ml={3} mr={3}>
          <Box bg="socialBackground" width={[32, 40]} height={[32, 40]} borderRadius="50%">
            <a href={href}>
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
      &copy; 2020 Liquidity Dividends Protocol. All rights reserved.
    </Text>

  </ContentWrapper>
);

export default Footer;
