import React, { useState, useEffect } from 'react'

export default function IPFSpage({ ipfsHash }) {

    const ipfsPageHash = `https://ipfs.io/ipfs/${ipfsHash}`

    const [htmlContent, setHtmlContent] = useState("");

    async function get_html_content() {
        let response;

        try {
            response = await fetch(ipfsPageHash)
                .then((resp) => { return resp.text() })
                .then((text) => { setHtmlContent(text) })
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