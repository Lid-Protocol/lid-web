import { FC, useState } from 'react';

import { Box, Text, Button, FlexBox, Image, List } from 'components/@basic';
import ContentWrapper from 'components/ContentWrapper';
import A from 'components/A';
import H2 from 'components/H2';
import H3 from 'components/H3';

import { colors } from 'styles/theme';

import SubmitForm from '../SubmitForm';

import certifiedLabelImage from './certified-label.png';
import LIDCertifiedLogoImage from './lid-certified-logo.png';

const Header: FC = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <ContentWrapper>
        <SubmitForm isOpen={modalIsOpen} closeModal={closeModal} />

        <FlexBox
          flexDirection={['column-reverse', 'column-reverse', 'row']}
          mt={5}
          pt={4}
          marginX="auto"
        >
          <Box mr={[0, 0, 5]}>
            <FlexBox
              alignItems={['center']}
              flexDirection="column"
              fontSize={3}
              mt={5}
              pb={[4, 2]}
              maxWidth={['auto', 'auto', 490]}
              fontWeight={500}
              lineHeight="1.5em"
            >
              <H2
                textAlign={['center', 'center', 'left']}
                mb={3.5}
                maxWidth={360}
                alignSelf={['inherit', 'inherit', 'flex-start']}
              >
                LID Protocol Certified Presale Application
              </H2>

              <Text width={1} as="p" mt={5} mb={5} lineHeight="1.5em">
                Raising funds for your project can be a daunting task - with
                investor uncertainty a major factor, a solution was needed to
                change the DEX Presale landscape - that solution, is LID
                Certified Presales. LID Certified Presales takes advantage of
                the resale process with the Initial Liquidity Offering (ILO)
                model. Offering a secure Initial Liquidity Offering (ILO)
                presale to your potential investors is the first major step you
                can take in improving your presale success.
              </Text>

              <Text width={1} as="p">
                Please email <A href="mailto:team@lid.sh">team@lid.sh</A> to
                submit an application for a LID protocol certified presale.
              </Text>

              <Button
                as="button"
                variant="gradient"
                mt={5}
                mr={4}
                mb={[4, 0]}
                alignSelf={['inherit', 'inherit', 'flex-start']}
                onClick={openModal}
                // href="mailto:team@lid.sh"
              >
                Submit Application
              </Button>
            </FlexBox>
          </Box>

          <FlexBox.Spacer />

          <FlexBox
            justifyContent="center"
            alignItems="center"
            width={['auto', 'auto', 360]}
          >
            <Image
              src={certifiedLabelImage}
              maxWidth={['80%', 'auto']}
              maxHeight={[200, 240, 'auto']}
            />
          </FlexBox>

          <FlexBox.Spacer />
        </FlexBox>

        <Box maxWidth={640} fontWeight={500} mt={[5.5, 5.5, 6.5]}>
          <H3 mb={4.5}>How LID Certified Presale Works</H3>
          <Text lineHeight="1.5em" as="p">
            With a LID Certified Presale you&apos;re able to ensure the ETH
            raised during presale is trustlessly locked into a Smart Contract.
            Another advantage is the ability to customize the token distribution
            rate over a specified length of time. 5% flat in ETH raised, 1% of
            the project&apos;s native take goes directly to LID stakers.
          </Text>
        </Box>

        <FlexBox
          mt={[6, 6, 6.5]}
          flexDirection={['column-reverse', 'row']}
          fontWeight={500}
        >
          <Box>
            <H3 mb={4.5}>Benefits of a LID-Certified Presale</H3>
            <Text
              maxWidth={380}
              fontWeight="bold"
              fontSize={[6, 7, 8]}
              lineHeight="1.4em"
              as="p"
            >
              LID certification is the perfect win-win solution for your project
              — and your investors.
            </Text>
          </Box>

          <FlexBox
            ml={[0, 5, 8]}
            mt={[5.5, 5, 5]}
            mb={[5.5, 0, 0]}
            justifyContent="center"
            alignItems="center"
            width={['auto', 240]}
          >
            <Image
              src={LIDCertifiedLogoImage}
              maxWidth={['80%', 'auto']}
              maxHeight={[140, 130]}
            />
          </FlexBox>
        </FlexBox>
      </ContentWrapper>

      <Box
        p={4}
        pb={6}
        background={colors.lightBlueGradient}
        mt={5}
        mb={5.5}
        boxShadow={`inset 0 50px 0 ${colors.darkBlue}`}
      >
        <ContentWrapper>
          <FlexBox
            flexDirection="column"
            maxWidth={['auto', 'auto', 680]}
            marginX="auto"
            padding={5}
            background="white"
            borderRadius="2px"
            boxShadow="0 1px 9px 3px rgba(0, 0, 0, .2)"
          >
            <List color="offBlack" fontWeight={500}>
              <List.Item mb={4.5}>
                Verifiable SC (Smart Contract) for your investors and team
                members to see.
              </List.Item>
              <List.Item mb={4.5}>
                A presale dApp to direct your investors to, that connects to
                your main website.
              </List.Item>
              <List.Item mb={4.5}>
                Time released token distribution; assists with minimizing the
                risks of large dumps at conclusion of presale.
              </List.Item>
              <List.Item mb={4.5}>
                Ability to customize presale method, from Hard Cap amount to
                bonding curve.
              </List.Item>
              <List.Item mb={4.5}>
                Presale referral rewards program; potential to make your project
                and presale go viral.
              </List.Item>
              <List.Item mb={4.5}>
                With the verification and implementation of the LID Certified
                Presale, your anonymity can remain intact.
              </List.Item>
              <List.Item>
                Having the LID Protocol brand backing your presale.
              </List.Item>
            </List>
          </FlexBox>
        </ContentWrapper>
      </Box>
    </>
  );
};

export default Header;
