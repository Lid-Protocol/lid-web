import { Box, BoxType, FlexBox, List } from 'components/@basic';
import FeatureCard, { FeatureCardProps } from './FeatureCard';

import securePurchasesIcon from './secure-purchases-icon.png';
import socialReferralsIcon from './social-referrals-icon.png';
import communityDrivenIcon from './community-driven-icon.png';
import licensedLIDIcon from './licensed-lid-icon.png';

const featureCards: FeatureCardProps[] = [
  {
    title: 'Decentralization',
    description: 'Liquidity Dividends Protocol provides a fully complete and operational decentralized liquidity service without any central third parties who promote or maintain the LID token.',
    iconSrc: securePurchasesIcon,
  },
  {
    title: 'Diversification',
    description: 'LID tokens are paired against a wide variety of microcap tokens as locked liquidity on Uniswap providing holders with full exposure to this entire suite of cryptoassets.',
    iconSrc: socialReferralsIcon,
  },
  {
    title: 'Bots Pay Stakers',
    description: 'LID stakers earn a 1.9% fee from each transaction as arbitration bots balance the various pairs on Uniswap. These arbitration bots are run by third parties who may not even know of LID.',
    iconSrc: communityDrivenIcon,
  },
  {
    title: 'Audited',
    description: 'The Liquidity Dividends Protocol technology has been audited by Halborn, the same security firm which services Coinbase, Bancor, and Stellar.',
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
