import React, {useState, useEffect} from 'react'
import styled from "styled-components";
var parse = require('html-react-parser');

//Just testing to see if it would be possible to resue header and footer
const ipfsHash = "https://ipfs.io/ipfs/QmRR2QMeLmuboA5N81WE4cwXZGtix7drpVqJ1bEZdV7Pmq"

export default function IPFSpage () {

    const [htmlContent, setHtmlContent] = useState("");

    async function get_html_content () {
        let response;
        
        try {
            response = await fetch(ipfsHash)
                            .then((resp)=>{ return resp.text() })
                            .then((text)=>{ setHtmlContent(text) })
        } catch (ex) {
            console.log(ex);
        }
    }

    useEffect(() => {
        get_html_content();
    })

    var template = { __html: htmlContent };

    return (
        <>
          <div dangerouslySetInnerHTML={template} />
        </>
    )
}