import React, {Component} from 'react';
import css, {insertRule} from 'next/css';
import {Container} from 'muicss/react';

// Custom components
import Header from '../components/header';

insertRule('html, body {margin: 0, padding: 0}');

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
