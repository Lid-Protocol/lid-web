import { FlexBox, Box, BoxType, Image, Text } from 'components/@basic';

export interface FeatureCardProps {
  title: string;
  description: string;
  iconSrc: string;
}

const FeatureCard: BoxType<FeatureCardProps> = ({ title, description, iconSrc, ...props }) => (
  <Box color="offBlack" height="100%" maxWidth={400} p={4.5} bg="white" borderRadius="3px" {...props}>

    <FlexBox flexDirection="column" alignItems={['center', 'center', 'initial']}>

      <Box bg="lightBlue" width="54px" height="54px" borderRadius="50%">
        <Image width="100%" height="100%" src={iconSrc} />
      </Box>

      <Text as="h3" fontWeight="bold" fontSize={3} mt={4} mb={[4, 4, 3]}>
        {title}
      </Text>

    </FlexBox>

    <Text lineHeight="1.6em" fontSize={2}>
      {description}
    </Text>

  </Box>
);

export default FeatureCard;
