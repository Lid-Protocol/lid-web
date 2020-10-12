import React, {useState, useEffect} from 'react'
import styled from "styled-components";

import IpfsPageTest from './ipfsPageTest'
import DeFiArticle from './DeFiArticle'

// Stored this info on IPFS 
// https://ipfs.io/ipfs/QmRf1qvB9rJRyLznWhX93TnsiCRtVXPQQKxdMon2WLb67H
const BlogData = [
    {
        id : '1',
        picture : "front_image",
        title : "6 Reasons why DEFI is here to stay and not a fad!",
        content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        readtime : "Oct 5, 2020 13 min read",
        ipfsHash : ""
    },
    {
        id : '2',
        picture : "front_image",
        title : "6 Reasons why DEFI is here to stay and not a fad!",
        content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        readtime : "Oct 5, 2020 13 min read",
        ipfsHash : ""
    },
    {
        id : '3',
        picture : "front_image",
        title : "6 Reasons why DEFI is here to stay and not a fad!",
        content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        readtime : "Oct 5, 2020 13 min read",
        ipfsHash : ""
    },
    {
        id : '4',
        picture : "front_image",
        title : "6 Reasons why DEFI is here to stay and not a fad!",
        content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        readtime : "Oct 5, 2020 13 min read",
        ipfsHash : ""
    },
    {
        id : '5',
        picture : "front_image",
        title : "6 Reasons why DEFI is here to stay and not a fad!",
        content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        readtime : "Oct 5, 2020 13 min read",
        ipfsHash : ""
    }
]

const Container = styled.div`
    background-color: white;
    font-family: Gotham, sans-serif
`

const HeaderContainer = styled.div`

    padding-top: 50px;
    padding-left: 100px;
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

export default function Blog () {

    const [veiwingPage, setVeiwingPage] = useState(false);
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

    function updatePageById(id){

        {BlogData.map(data => { 
            console.log(data);
            if (data.id == id) {        
                setVeiwingPage(true);
                window.scrollTo(0, 0)
              }    
        })};

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
                <DeFiArticle publis_date="Oct 5, 2020 13 min read" />
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
                       padding-left: 120px;
                       padding-top: 30px;">Latest Article</h2>
            {BlogData.map( data => (
                <BlogPostBox 
                          width="35%"
                          height="150px"
                          marginLeft="8%"
                          onClick={() =>
                            window.location = window.location.href + "?pageid=" + data.id
                        } >
                        <img src="https://ipfs.io/ipfs/QmW7AzrgnpAEB2mW8i4Piozu6R38kdS6DAPkifarkTWLd2"
                             height="205px"
                             />
                        
                        <h2> {data.title} </h2>

                        <p Style="padding-bottom: 45px;"> {data.content} </p> 

                        <p> {data.readtime} </p> 

                </BlogPostBox>
            ))} 
            <div Style= "padding-bottom: 100px" />
            </Container>
            <div Style="margin-top: 50px;" />
            </>
        )
    }
}