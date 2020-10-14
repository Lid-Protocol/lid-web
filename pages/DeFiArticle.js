import React, {useState, useEffect} from 'react'
import styled from "styled-components";

import mainLogo from '../components/TopBar/main-logo.png'
import IPFSpage from './ipfsPageTest';

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
    padding-left: ${props => props.padding};
    padding-bottom: 35px;

    h2 {
        padding-bottom: 15px;
    }

`

const BlueLineBox = styled.div`
    border-left: 1px solid #0c65EB;
`

//Pass the article IDs IPFS hash into the IFPS page generator.
export default function DeFiArticle ( {Read_Time, IPFShash} ) {

    const [padding, setPadding] = useState("20%");
    const [subHeaderPadding, setSubHeaderPadding] = useState("20%")

    useEffect(() => {
        if (window.innerWidth > 999) {
            setPadding("20%");
            setSubHeaderPadding("20%");
        } else {
            setPadding("7%");
            setSubHeaderPadding("7%");
        }
    })
    
 return (
  <>
    <HeaderContainer padding={subHeaderPadding}>
        <h2>LID Offical Blog</h2>

        <p>Check out our latest blog posts and updates</p>
    </HeaderContainer>

    <BlogPageWrapper padding={padding}>
        <div Style="padding-top: 45px;">
            <img src={mainLogo} 
                height="35px;"/>
            <p Style="margin-left: 55px;
                      margin-top: -78px;
                      margin-bottom: 20px
                      ">LID Protocol
                      <p Style="margin-top: -30px;
                                color: #9e9e9e;
                                font-size: 15px;
                                "> {Read_Time}</p>
            </p>     
        </div>
       <IPFSpage ipfsHash={IPFShash} />
    </BlogPageWrapper>
    <div Style="margin-top: 50px;" />
  </>
    );
}