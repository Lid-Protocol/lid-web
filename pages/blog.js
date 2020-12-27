import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { BlogData } from '../lib/blog';
import DeFiArticle from './DeFiArticle';

// Stored this info on IPFS
// https://ipfs.io/ipfs/QmRCPhUfc6tWRpkJrPk7kE2jSUAVLxTUjNHnEti2NbRpba

const Container = styled.div`
  background-color: white;
  font-family: Gotham, sans-serif;
`;

const HeaderContainer = styled.div`
  padding-top: 50px;
  padding-left: 10%;
  padding-bottom: 35px;

  h2 {
    padding-bottom: 15px;
  }
`;

const BlogPostBox = styled.div`
  border: 2px solid #e4e4e4;
  margin-top: 20px;
  margin-left: 10%;
  margin-right: 20px;
  color: black;
  background-color: white;
  display: inline-block;
  padding: 15px;
  width: 80%;

  &:hover {
    cursor: pointer;
  }

  h2 {
    padding-bottom: 18px;
  }

  p {
    color: #a1a7b0;
  }

  img {
    float: left;
    padding-right: 25px;
  }
`;

export default function Blog() {
  const [veiwingPage, setVeiwingPage] = useState(false);
  const [ipfsHash, setIpfsHash] = useState('');
  const [readTime, setReadTime] = useState('');
  const [title, setTitle] = useState('');

  function updatePageById(id) {
    BlogData.map((data) => {
      if (data.id == id) {
        setVeiwingPage(true);
        setIpfsHash(data.ipfsHash);
        setReadTime(data.readtime);
        setTitle(data.title);
        window.scrollTo(0, 0);
      }
    });
  }

  useEffect(() => {
    async function load_data() {
      var Temp = window.location.href.split('=');
      var id = Temp[1];

      if (id) {
        updatePageById(parseInt(id, 10));
      }
    }

    load_data();
  }, []);

  if (veiwingPage) {
    return (
      //Pass ID or IPFS hash to render in given blog post
      <>
        <DeFiArticle title={title} Read_Time={readTime} IPFShash={ipfsHash} />
      </>
    );
  } else {
    return (
      <>
        <HeaderContainer>
          <h2>LID Offical Blog</h2>
          <p>Check out our latest blog posts and updates</p>
        </HeaderContainer>
        <Container>
          <h2
            style={{
              color: 'grey',
              paddingLeft: '10%',
              paddingTop: '30px',
            }}
          >
            Latest Article
          </h2>
          {BlogData.map((data, index) => (
            <BlogPostBox
              width="35%"
              key={index}
              height="150px"
              marginLeft="8%"
              onClick={() =>
                (window.location = window.location.href + '?pageid=' + data.id)
              }
            >
              {data.picture && (
                <img src={data.picture} height="204px" width="290px" />
              )}

              <h2> {data.title} </h2>

              <p style={{ paddingBottom: '45px' }}> {data.content} </p>

              <p> {data.readtime} </p>
            </BlogPostBox>
          ))}
          <div style={{ paddingBottom: '100px' }} />
        </Container>
        <div style={{ marginTop: '50px' }} />
      </>
    );
  }
}
