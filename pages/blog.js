import React, {useState, useEffect} from 'react'
import styled from "styled-components";

import IpfsPageTest from './ipfsPageTest'
import DeFiArticle from './DeFiArticle'

import front_image from './splash.jpeg'

const URLlink = "http://localhost:8080/blog"

const BlogPostData = [ 
    {
        id: '1',
        picture: front_image,
        title: "6 Reasons why DEFI is here to stay and not a fad!",
        content: "This is some middle content",
        readtime: "Oct 5, 2020 15 min read",
        ipfsHash: ""
    },
    {
        id: '2',
        picture: "img",
        title: "6 Reasons why DEFI is here to stay and not a fad!",
        content: "",
        readtime: "Oct 5, 2020 15 min read",
        ipfsHash: ""
    },
    {
        id: '3',
        picture: "img",
        title: "6 Reasons why DEFI is here to stay and not a fad!",
        content: "",
        readtime: "Oct 5, 2020 15 min read",
        ipfsHash: ""
    },
    {
        id: '4',
        picture: "img",
        title: "6 Reasons why DEFI is here to stay and not a fad!",
        content: "",
        readtime: "Oct 5, 2020 15 min read",
        ipfsHash: ""
    } 
]

const Container = styled.div`
    background-color: white;
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

    border: 1px solid grey;
    margin-bottom: 30px;
    margin-top: 30px;
    margin-left: 120px;
    margin-right: 20px;
    color: black;
    background-color: white;
    display: inline-block;
    padding: 15px;
    width: 80%;
    
    img {
        float: left;
        padding-right: 25px;
    }

`

export default function Blog () {

    const [veiwingPage, setVeiwingPage] = useState(false);

    useEffect(() => {
        var Temp = window.location.href.split("=");
        var id = Temp[1];

        if (id) {
            updatePageById(parseInt(id, 10))
        }
    }, [])

    function updatePageById(id){
        var update = BlogPostData.map(function (data) {
            if (data.id == id) {        
                setVeiwingPage(true);
                window.scrollTo(0, 0)
              }    
            });
    }

    if (veiwingPage) {
        return (
            <>
                <DeFiArticle />
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
            {BlogPostData.map( data => (
                <BlogPostBox 
                          width="35%"
                          height="150px"
                          marginLeft="8%"
                          onClick={() =>
                            window.location = URLlink + "?pageid=" + data.id
                        } >
                        <img src={data.picture} 
                             height="174px"
                             />
                        
                        <h2> {data.title} </h2>

                        <p> {data.content} </p> 

                        {data.readtime} 

                </BlogPostBox>
            ))} 
            </Container>
            </>
        )
    }
}