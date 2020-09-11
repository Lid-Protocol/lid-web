import { Box, BoxType, FlexBox, List } from 'components/@basic';
import FeatureCard, { FeatureCardProps } from './FeatureCard';

import securePurchasesIcon from './secure-purchases-icon.png';
import socialReferralsIcon from './social-referrals-icon.png';
import communityDrivenIcon from './community-driven-icon.png';
import licensedLIDIcon from './licensed-lid-icon.png';

const featureCards: FeatureCardProps[] = [
  {
    title: 'Secure Purchases',
    description: 'Liquidity Dividends Protocol solves the issue of Uniswap exit scamming by using standardized non-custodial presale smart contracts that lock liquidity.',
    iconSrc: securePurchasesIcon,
  },
  {
    title: 'Social Referrals',
    description: 'All buyers will pay a fee in ETH. This will go into a referral pool where 2.5% of all deposits are available to the pool. When someone uses your referral code you get 2.5% of what they deposit.',
    iconSrc: socialReferralsIcon,
  },
  {
    title: 'Community Driven',
    description: 'The LID team wanted to focus on incentivizing stakers to perform useful actions for the community by participating in a DAO. Between a transaction tax sent to the DAO fund, voting participation multiplier, and a referral program this is a truly community driven project.',
    iconSrc: communityDrivenIcon,
  },
  {
    title: 'Licensed LID',
    description: 'The Liquidity Dividends Protocol has developed new technologies for securely depositing liquidity generated via presale into Uniswap. The goal is to license this technology out to other projects which will end Exit scams..',
    iconSrc: licensedLIDIcon,
  },
];

const FeatureCardList: BoxType = ({ ...props }) => (
  <Box {...props}>
    <List display="flex" justifyContent="center" flexDirection="row" flexWrap="wrap">
      {featureCards.map(({ title, description, iconSrc }) => (
        <List.Item display="inline-block" key={iconSrc} mb={4} ml={3} mr={3}>
          <FeatureCard title={title} description={description} iconSrc={iconSrc} />
        </List.Item>
      ))}
    </List>
  </Box>
);

export default FeatureCardList;
