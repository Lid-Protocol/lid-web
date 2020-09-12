import { FC } from 'react';
import { isMobile } from 'react-device-detect';
import { Box, FlexBox, Image } from 'components/@basic';
import ContentWrapper from 'components/ContentWrapper';
import H2 from 'components/H2';

import LaunchImage from 'public/images/roadmap-launch-icon.png';
import TimeLine, { TagLine } from './TimeLine';

const Roadmap: FC = () => {
  const roadmaps = [
    {
      date: 'July 2020',
      events: [
        'Website and social media launch',
        'Presale launch',
        'LID Protocal official launch',
      ],
    },
    {
      date: 'August 2020',
      events: [
        'Staking live',
        'Lid Certified Presale live',
        'Early Access LID Staker incentives live',
      ],
    },
    {
      date: 'September 2020',
      events: [
        'Establish DAO Fund',
        'Update website',
        'Standardized Model for LID Certified Presales',
        'LID available on additional dexes',
      ],
    },
    {
      date: 'October 2020',
      events: [
        'Additional LID Staker incentives',
        'DAO Fund votes for the future of LID',
        'Future partnerships',
        'Automated portal for LID Certified Presales',
        'LID can be used to purchase during LID Certified Presale',
      ],
    },
  ];

  return (
    <Box width="100%">
      <ContentWrapper pt={5} pb={6}>
        <FlexBox
          flexDirection="column"
          justifyContent="center"
          alignItems={['flex-start', 'center']}
        >
          <H2 mb={6} mt={5}>
            Roadmap
          </H2>
          <FlexBox
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            marginLeft={[-10, 0]}
          >
            <TagLine />
            <Image width="40px" height="40px" src={LaunchImage} />
            <TagLine />
          </FlexBox>

          {roadmaps.map((roadmap) => (
            <TimeLine
              key={roadmap.date}
              date={roadmap.date}
              events={roadmap.events}
            />
          ))}
        </FlexBox>
      </ContentWrapper>
    </Box>
  );
};

export default Roadmap;
