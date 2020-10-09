import React, {useState, useEffect} from 'react'
import styled from "styled-components";

import DeFiArticle from "./DeFiArticle"


const URLlink = "http://localhost:8080/blog"

const BlogPostData = [ 
    {
        id: '1',
        picture: "img",
        title: "6 Reasons why DEFI is here to stay and not a fad!",
        content: "This is some middle content",
        readtime: "Oct 5, 2020 15 min read"
    },
    {
        id: '2',
        picture: "img",
        title: "6 Reasons why DEFI is here to stay and not a fad!",
        content: "",
        readtime: "Oct 5, 2020 15 min read"
    },
    {
        id: '3',
        picture: "img",
        title: "6 Reasons why DEFI is here to stay and not a fad!",
        content: "",
        readtime: "Oct 5, 2020 15 min read"
    },
    {
        id: '4',
        picture: "img",
        title: "6 Reasons why DEFI is here to stay and not a fad!",
        content: "",
        readtime: "Oct 5, 2020 15 min read"
    } 
]

const BlogPostBox = styled.div`

`

export default function Blog () {

    const [veiwingPage, setVeiwingPage] = useState(false);

    // const [pageTitle, setPageTitle] = useState("Title");
    // const [pageDate, setPageDate] = useState("Date");
    // const [pageContent, setPageContent] = useState(mainPost.content);

    // const [showLinkCopied, setShowLinkCopied] = useState("hidden");


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

                // setPageTitle(data.title);
                // setPageDate(data.date);
                // setPageContent(data.content);
                
                setVeiwingPage(true);
                window.scrollTo(0, 0)
     
              }    
            });

        return (update);
    }

    if (veiwingPage) {
        return (
            <DeFiArticle />
        )
    } else {
        return (
            <>
          Blog Stuffs
    
            {BlogPostData.map( data => (
                <BlogPostBox 
                          width="35%"
                          height="150px"
                          marginLeft="8%"
                          onClick={() =>
                            window.location = URLlink + "?pageid=" + data.id
                        } >
                        {data.img} <br />
                        {data.title} <br />
                        {data.content} <br />
                        {data.readtime} <br />

                </BlogPostBox>
            ))} 
            </>
            )
        }
    
    }