import Head from 'next/head';
import React from 'react';

const SEOHead = ({ title, metaDesc, metaKeywords, metaCanonical }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={metaDesc} />
            <meta name="keywords" content={metaKeywords} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="canonical" href={metaCanonical} />
        </Head>
    );
};

export default SEOHead;