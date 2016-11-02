import React from 'react';
import {Container} from 'muicss/react';

// Custom components
import Header from '../components/header';

const title = (
  <title>About</title>
);

export default () => (
  <div>
    <Header appendToHead={title} />

    <Container>
      <h1>About</h1>
      <p>This website is so basic.</p>
    </Container>
  </div>
);
