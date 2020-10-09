import React, {useState, useEffect} from 'react'
import styled from "styled-components";

import front_image from './splash.jpeg'
import mainLogo from '../components/TopBar/main-logo.png'

//Turns into a div for the html
const BlogPageWrapper = styled.div`

    color: black;
    background-color: white;
    padding-left: ${props => props.padding};
    padding-right: ${props => props.padding};
    font-family: Gotham, sans-serif;

    p {
        padding-top: 30px;
        line-height: 1.8;
     }

     h1{
         padding-bottom: 20px;
     }

     h2 {
         padding-top: 30px;
         font-size: 18px;
     }

`

const HeaderContainer = styled.div`

    padding-top: 50px;
    padding-left: 7%;
    padding-bottom: 35px;

    h2 {
        padding-bottom: 15px;
    }

`

const BlueLineBox = styled.div`

    border-left: 1px solid #0c65EB;

`

const ImageWrapper = styled.div`

`

//Make into html file that is upload to IPFS
export default function DeFiArticle ( {publish_date} ) {

    const [padding, setPadding] = useState("20%")

    useEffect(() => {
        if (window.innerWidth > 999) {
            setPadding("20%")
        } else {
            setPadding("7%");
        }
    })
    
 return (
  <>
    <HeaderContainer>
        <h2>LID Offical Blog</h2>

        <p>Check out our latest blog posts and updates</p>
    </HeaderContainer>


    <BlogPageWrapper padding={padding}>
        
        <div Style="padding-top: 45px;">
            <img src={mainLogo} 
                height="35px;"/>
            <p Style="margin-left: 55px;
                      margin-top: -78px;
                      margin-bottom: 20px;
                      ">LID Protocol
                      <p Style="margin-top: -30px;
                                color: #9e9e9e;
                                font-size: 15px;
                                "> Oct 5, 2020 13 min read </p>
            </p>
            
        </div>

        <h1 Style="color: #474747"> 6 Reasons why DEFI is here to stay and not a fad! </h1>

        <img src={front_image} 
                display= "block"
                margin-left="10px;"
                padding-top="20px;"
                width="100%"
                />

        <p>
            Speculation on the permanency of DEFI and the frenzy around it has left those around for
            the ICO debacle a few years ago with the uncanny feeling that, this too shall pass and,
            with as big a bang that may mean, a lot of people will be hurt in the explosion and others 
            damaged by the inevitable shrapnel. 
        </p>
        

        <p>
            To the contrary. We at LID believe that the excitement around DEFI is just the start of a 
            galactic big bang that is going to launch blockchain and crypto onto an entirely different 
            planet. And LID will be there to help you colonize that new planet with our LID protocol.
            We have forecast the trajectory of this new universe and we are going to make sure we 
            and mitigate the risks associated with inhabiting the new world of DEFI. 
        </p>

        <div Style="border-left: 3px solid #1C9EF7;
                    font-style: italic;
                    padding-left: 10px;
                    margin-top: 20px;"
                    >
        <p Style="padding-top: 0px;"> 
            “If you think DEFI will have a smaller impact on ETH than ICOs, you aren't paying attention. The ICO boom showcased Ethereum's ability to perform one financial service: early-stage capital formation. DEFI will showcase Ethereum's ability to perform all financial services.”
            Chris Burniske, Placeholder
        </p>
        </div>

        <p> So, these are our reasons why we think DEFI is here to stay; </p>

        <h2> 1.) An explosion of products that will enhance planet DEFI </h2>

        <p>
            Obviously, we think it is products like LID that are enhancing the decentralized finance network but 
            there are some other interesting DEFI stars to look out for – check them out here.
        </p>

        <p>
            The little colony we are creating on planet DEFI does not want a return to the dreaded uncertainty of 
            ICOs and so, like a lot of the other DEFI starts, we are making sure this time that there is
            an effort to ensure sustainability on the planet. We have noticed from our community involvement 
            in DEFI projects, especially our own, that all decisions are directed at ensuring that the DEFI
            space is one where those willing to play, do so responsibly. 
        </p>

        <h2> 2.) Pro-active sustainability – not just an afterthought </h2>

        <p>
            Obviously, a safe colony with a stronger hold on its territory, clean air, great infrastructure, 
            and willing participants within that colony means that the DEFI planet is going to become more 
            populated. Who would not want to dabble in this high potential space without having some assurances?
            We know that the general blockchain and crypto population have grown weary of scamming and 
            rug-pulls and they are not outlaws wanting to take advantage but rather are keen to leverage 
            DEFI for the long term. We are passionate about this and adamant to build our LID colony only 
            with those on the same page!
        </p>


        <h2> 3.) Uncertain times and the cost-effectiveness of DEFI products </h2>

        <p>
            Need we mention the impact of COVID19. Not again, yes someone has to mention it, even though 
            we are all tired of it. COVID19 has brought forth major economic impact and financial 
            uncertainty- no one saw it coming and that means the cost effectiveness of blockchain and DEFI 
            looks even more appealing.  Centralized finance options just don’t and won’t suit the new normal 
            moving forward.
        </p>

        <p> 
            Even mainstream institutional giants are venturing into DEFI. The most unlikely organizations 
            and communities are more likely to branch out into unknown territories when the one they are 
            in is expensive and high maintenance. 
        </p>

        <p>
            According to an article in Entrepreneur Magazine, a DEFI renaissance is in our midst with 
            stablecoins rising in popularity and the fact that DEFI token values have increased by 200 percent.  
        </p>

        <p>
            Why not consider a different future with a clean slate even if that means venturing onto 
            lanet DEFI? 
        </p>

        <h2> 4.) Community is King! </h2>

        <p>
            As we have mentioned, our community and of course, all the LID founders are not interested in 
            rogue, opportunistic nomads disrupting the colony we are constructing. We do not want any 
            outlaws playing on our turf and giving the new planet a bad name. At LID, we see huge potential 
            for DEFI through carefully managed, secure, and locked-in liquidity pools. 
        </p>

        <p>
            The LID colony, as we like to call it, is completely decentralized. Everyone has a say and the 
            LID founders are part of that community. We believe the LID colony’s strength lies in its leaders 
            being active within the community but not necessarily as directors of the community. Our absolute 
            belief in decentralization and the integrity of the product we have developed means that we are 
            anonymous. We want the community and the product to lead the way. 
        </p>


        <h2> 5.) An ever-increasing pool of talent </h2>

        <p> 
            Mass unemployment because of Covid19 (yes we mentioned it again) not only means diversifying 
            investment options but also a surge in the development of online talent as people diversify their 
            skills in this new online, homebound world we live in. People are looking to start or grow their 
            own businesses – entrepreneurship is rife and according to crypto expert and successful blockchain
            entrepreneur, Alexander Salnikov:
        </p>

        <div Style="border-left: 3px solid #1C9EF7;
                    font-style: italic;
                    padding-left: 10px;
                    margin-top: 20px;"
                    >
        <p Style="padding-top: 0px;"> 
            “It’s not just about putting together protocols and interfaces. What we need in that the 
            DeFi space has more talented and motivated entrepreneurs. Opportunities for businesses to 
            generate profit will attract more talent and encourage further developments which are 
            beneficial for both the protocols and their interfaces.” 
        </p>
        </div>

        <h2> 6.) Decentralization means agility and flexibility and we are all about that! </h2>

        <p>
            The LID product, as with most products operating in the DEFI space, “plays” nicely with others! 
            We are a friendly people – a great colony that is adaptable and compatible with other 
            decentralized blockchain applications. As you can see, we work with Uniswap and this is the basis 
            of all DEFI. We are built as “money legos’” and can be combined easily to create programmable and
            agile applications through our open technology. 
        </p>

        <p>
            So, we are super excited about the settlement we are building and growing on Planet DEFI and see
            no reason why you shouldn’t launch your flight to join us on Planet DEFI and if you are one of 
            those DEFI stars or entrepreneurs taking advantage of this space, let’s see if we can play Lego 
            together! DEFI is here to stay and so is the LID colony and so are its so-called Lidians, so check 
            out more information on our website or join our very active community on Telegram. 
        </p>
        <div Style= "padding-bottom: 100px" />
    </BlogPageWrapper>
    <div Style="margin-top: 50px;" />
  </>
    );
}