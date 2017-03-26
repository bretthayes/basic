import React, {Component} from 'react';
import {Container} from 'muicss/react';

// Custom components
import Header from '../components/header';

const title = (
  <title>Home</title>
);

export default () => (
  <div>
    <Header appendToHead={title} />

    <Container>
      <h1>Home</h1>
      <p>Welcome to a basic website.</p>
    </Container>
  </div>
);
