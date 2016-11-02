import React from 'react';
import Head from 'next/head';

// Custom components
import Nav from './nav';

export default (props) => (
  <div>
    <Head>
      <link rel="stylesheet" href="//cdn.muicss.com/mui-0.9.3/css/mui.min.css" />
      {props.appendToHead}
    </Head>

    <Nav />
  </div>
);
