import { FC } from 'react';
import { Box, Button, FlexBox, Image } from 'components/@basic';
import ContentWrapper from 'components/ContentWrapper';
import H2 from 'components/H2';
import FAQCard from './FAQCard';

const FAQ: FC = () => (
  <Box id="faq" width="100%" bg="white">
    <ContentWrapper pt={5} pb={6}>
      <FlexBox
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <H2 mb={6} mt={5} color="black">
          FAQs
        </H2>

        <FAQCard
          title="How do the presale referrals work?"
          body={
            <p>
              When purchasing tokens during a presale event, there is a fee of
              2.5% applied to purchasing transactions. If someone uses your
              presale referral code, you get the 2.5% fee paid by them! However,
              your original 2.5% fee must still be covered. These referral fees
              are paid in ETH at the conclusion of the presale event.
            </p>
          }
        />
        <FAQCard
          title="What if I’m past the presale stage?"
          body={
            <p>
              We still encourage community involvement and word of mouth through
              referrals post launch. The same fee and referral structure of the
              Presale applies to all post-launch investments. Want a massive
              win? Refer a whale!
            </p>
          }
        />
        <FAQCard
          title="How does LID Staking work?"
          body={
            <p>
              There is a 2% tax applied to certain transactions in the LID
              Ecosystem. Transactions that are taxed at 2% are Uniswap sells,
              Unstaking LID from the Staking Program, and LID transfers between
              wallets. This amount of 2% is then distributed amongst those who
              are staking LID tokens.
            </p>
          }
        />

        <FAQCard
          title="How to Stake LID?"
          body={
            <>
              <p>
                Staking LID is as easy as pressing some buttons on a webpage!
              </p>
              <br />
              <ul>
                <li>Head over to our Staking dApp https://stake.lid.sh</li>
                <li>
                  Connect your applicable Web3 Wallet (such as MetaMask) to the
                  staking page
                </li>
                <li>Follow buttons to ‘Stake’ field</li>
                <li>
                  Please note: There is a one time registration fee of 400 LID,
                  or 200 LID if someone uses your Staking Referral code.
                </li>
              </ul>
            </>
          }
        />

        <FAQCard
          title="What is Locked Liquidity?"
          body={
            <>
              <p>
                Uniswap is rife with a certain type of scam – the “rug pull” –
                in which liquidity placed in the liquidity pool is removed from
                unsuspecting traders and investors, thereby rendering their
                purchased tokens valueless. These individuals use this malicious
                intent to get away with ETH funds, often quite substantial in
                amount.
              </p>
              <br />
              <p>
                Liquidity Dividends Protocol, through LID Certified Presales,
                has created innovative technology that puts in place automated
                steps to ensure presale raised funds and tokens are locked into
                Liquidity Pools on Uniswap.
              </p>
              <br />
              <p>
                Once the presale timer has ended, the LID Certified Presale
                Smart Contract then automatically mints the liquidity pool
                tokens and begins burning them. Through this process, the
                liquidity is locked into Uniswap permanently, and is
                untouchable.
              </p>
            </>
          }
        />
        <FAQCard
          title="What is the point of licensing?"
          body={
            <>
              <p>
                Liquidity Dividends Protocol developed several unique innovative
                technologies for automatically depositing liquidity generated
                via a Presale Event directly into Uniswap. Along with Liquidity
                Locking, LID Certified Presales also places allocations such as
                Team Tokens under strict time locks. Conceptually, these
                technologies are designed to reduce risk, increase funds raised,
                and to put an end to exit scams. Through licensing, prospective
                projects have a ‘one stop shop’ service to get their project off
                the ground.
              </p>
              <br />
              <p>
                LID Certified Presales does the Presale Smart Contract hard
                work, so you don’t have to.
              </p>
            </>
          }
        />
        <FAQCard
          title="LID Presales sounds great, how do I purchase a presale?"
          body={
            <p>
              Presale events held through the LID Certified Presale service
              offering are announced through our various social channels; simply
              follow us on our socials, and when a presale event is held, follow
              the links to that presales purchase page. Easy!
            </p>
          }
        />
      </FlexBox>
    </ContentWrapper>
  </Box>
);

export default FAQ;
