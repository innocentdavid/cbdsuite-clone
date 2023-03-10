import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

type Props = {}

class Document extends NextDocument<Props> {
    render() {
        return (
            <Html>
                <Head>
                    <link href="https://fonts.cdnfonts.com/css/poppins" rel="stylesheet" />
                    <link href="https://fonts.cdnfonts.com/css/montserrat" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;700&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default Document