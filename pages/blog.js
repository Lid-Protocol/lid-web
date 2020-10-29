import React, { useState, useEffect } from 'react'
import styled from "styled-components";

import DeFiArticle from './DeFiArticle'

// Stored this info on IPFS 
// https://ipfs.io/ipfs/QmRCPhUfc6tWRpkJrPk7kE2jSUAVLxTUjNHnEti2NbRpba
const BlogData = [
    {
        id: '5',
        picture: "https://ipfs.io/ipfs/QmQSht8a4GeDoJ29uDXL7F7e5Foihf6sEpNZR1wR4wxLuf",
        title: "Can Locking Liquidity be a Profitable Way to Earn Crypto",
        content: "Liquidity in any financial market is important, but perhaps more so in crypto markets. And in narrower Defi markets, where the participants are fewer, liquidity is crucially at play, yet so fragile. Without the depth of liquidity, sudden, and large movements can sway asset prices so quickly that it no longer becomes predictable enough for safe or reliable trading.",
        readtime: "Oct 29, 2020 11 min read",
        ipfsHash: "Qme8HsTtykvqi6JHtmSzzNYe72r1uDRpC7LPns988YM5Nd"
    },
    {
        id: '4',
        picture: "https://ipfs.io/ipfs/QmPP6mRDDXiEBKU2yntcdabMGT8Tfr7XeFMooM1mxqJ4A7",
        title: "Could DeFi eclipse traditional finance?",
        content: "DeFi is more than just a buzz word or acronym. Decentralized finance is a revolution that is set to usher in a new age in finance. So at LID we hereby pose the question - could DeFi actually overtake traditional finance? ",
        readtime: "Oct 26, 2020 9 min read",
        ipfsHash: "QmSA6Dn5VzvLjPhW7Eu9nr7x3BqLawnFP8P8wYm285s9Dg"
    },
    {
        id: '0',
        picture: "https://ipfs.io/ipfs/QmW1nJJTcQMRJ5HuRAg55dEcEfTeFPbL8XAA6KFKCYc5bM",
        title: "Introducing LIFTOFF: The first fully automated “LVO” launchpad in DeFi",
        content: "TUSD pools will be expanded as additional liquidity is scaled by TrustToken onto Uniswap as well, providing further price stability. The additional LID pools will benefit all Lidians  into the future as EVERY  project that launches on LIFTOFF will be locking more LID thus bringing upward growth.",
        readtime: "Oct 21, 2020 8 min read",
        ipfsHash: "QmQ1PQo1BjWFrbkUAYKdKzEUVkVsXitZHJgiYWXgTMPcBj"
    },
    {
        id: '1',
        picture: "https://ipfs.io/ipfs/QmYEJW5kdGWs54C2KdYkT1x6iJ14RTwaU3GKRvkXRNBc4A",
        title: "LID Protocol | Multi – Channel Network – Community Voting & Project AMA",
        content: "Multi-Channel Network is focused on bringing about world-class circular ecosystem aimed at providing access to the right partnership, plan flexibility and project start-up holistic sustainability.",
        readtime: "Oct 16, 2020 11 min read",
        ipfsHash: "QmZN8sbjcPoisvZRaoWd7nMsSGQDY2MLhkiVwPcBaujhzv"
    },
    {
        id: '2',
        picture: "https://ipfs.io/ipfs/QmPCX9TyMb4GQLAsdZ5uKRmVTbdqiHA2h5pqaZbEkMxMhh",
        title: "Integrity and Safety a Way Back for Sustainable Defi",
        content: "When reports surfaced in late September that a group of crypto influencers had conspired to defraud unsuspecting Defi investors, social media and CryptoTwitter spun into a backlash, pouring scorn and vitriol on those participating in the leaked Telegram chats.",
        readtime: "Oct 15, 2020 10 min read",
        ipfsHash: "QmNR4pTKWg38vSiZJ2dkKUuwgDACHytpraCCsvZ21yWpVh"
    },
    {
        id: '3',
        picture: "https://ipfs.io/ipfs/QmW7AzrgnpAEB2mW8i4Piozu6R38kdS6DAPkifarkTWLd2",
        title: "6 Reasons why DEFI is here to stay and not a fad!",
        content: "We at LID believe that the excitement around DEFI is just the start of a galactic big bang that is going to launch blockchain and crypto onto an entirely different planet. And LID will be there to help you colonize that new planet with our LID protocol. We have forecast the trajectory of this new universe and we are going to make sure we and mitigate the risks associated with inhabiting the new world of DEFI.",
        readtime: "Oct 5, 2020 13 min read",
        ipfsHash: "QmUPXLrbCyMryPhnKfanj5pNhu9PkxQPMBK21tNCXzH218"
    }
]

const Container = styled.div`
    background-color: white;
    font-family: Gotham, sans-serif
`

const HeaderContainer = styled.div`

    padding-top: 50px;
    padding-left: 10%;
    padding-bottom: 35px;

    h2 {
        padding-bottom: 15px;
    }
`

const BlogPostBox = styled.div`

    border: 2px solid #E4E4E4;
    margin-top: 20px;
    margin-left: 10%;
    margin-right: 20px;
    color: black;
    background-color: white;
    display: inline-block;
    padding: 15px;
    width: 80%;

    &:hover{
        cursor: pointer;
    }

    h2 {
        padding-bottom: 18px;
    }

    p{
        color: #A1A7B0;
    }
    
    img {
        float: left;
        padding-right: 25px;
    }

`

export default function Blog() {

    const [veiwingPage, setVeiwingPage] = useState(false);
    const [ipfsHash, setIpfsHash] = useState("");
    const [readTime, setReadTime] = useState("");

    const [ListOfPost, setListOfPost] = useState(BlogData);
    const [dataLoaded, setDataloaded] = useState(false);

    //Weird loading bug with state when switching to articles (using static data for now) 
    //However reads in data successfully
    async function get_list_of_post() {
        let response;

        const ipfsHash = "https://ipfs.io/ipfs/QmRf1qvB9rJRyLznWhX93TnsiCRtVXPQQKxdMon2WLb67H";

        try {
            response = await fetch(ipfsHash)
                .then(res => res.json())
                .then(data => setListOfPost(data))
            setDataloaded(true);
        } catch (ex) {
            console.log(ex);
        }
    }

    function updatePageById(id) {
        BlogData.map(data => {
            if (data.id == id) {
                setVeiwingPage(true);
                setIpfsHash(data.ipfsHash);
                setReadTime(data.readtime)
                window.scrollTo(0, 0);
            }
        })
    }

    useEffect(() => {

        async function load_data() {

            // Update to check IndexDB instead
            // if (!dataLoaded) {
            //     await get_list_of_post();
            // }

            var Temp = window.location.href.split("=");
            var id = Temp[1];

            if (id) {
                updatePageById(parseInt(id, 10))
            }
        }

        load_data();
    }, [])

    if (veiwingPage) {
        return (
            //Pass ID or IPFS hash to render in given blog post
            <>
                <DeFiArticle Read_Time={readTime}
                    IPFShash={ipfsHash} />
            </>
        )
    } else {
        return (
            <>
                <HeaderContainer>
                    <h2>LID Offical Blog</h2>
                    <p>Check out our latest blog posts and updates</p>
                </HeaderContainer>
                <Container>
                    <h2 Style="color: grey;
                       padding-left: 10%;
                       padding-top: 30px;">Latest Article</h2>
                    {BlogData.map(data => (
                        <BlogPostBox
                            width="35%"
                            height="150px"
                            marginLeft="8%"
                            onClick={() =>
                                window.location = window.location.href + "?pageid=" + data.id
                            } >
                            <img src={data.picture}
                                height="204px"
                                width="290px"
                            />

                            <h2> {data.title} </h2>

                            <p Style="padding-bottom: 45px;"> {data.content} </p>

                            <p> {data.readtime} </p>

                        </BlogPostBox>
                    ))}
                    <div Style="padding-bottom: 100px" />
                </Container>
                <div Style="margin-top: 50px;" />
            </>
        )
    }
}