import React, {useState, useEffect} from 'react'
import styled from "styled-components";

const ipfsHash = "https://ipfs.io/ipfs/QmW4fJAqcsnv8Ln4qcNmYVWHaPNk9sspd67jtz9U12tKTJ"


export default function IPFSpage () {

    async function get_html_content () {
        let response;
        
        try {
            response = await fetch(ipfsHash)
                            .then((resp)=>{ return resp.text() })
                            .then((text)=>{ console.log(text) })
        } catch (ex) {
            console.log(ex);
        }
    }

    useEffect(() => {
        get_html_content();
    })

    return (
        <>
            Plz work
        </>
    )

}