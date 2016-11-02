import React from 'react';
import {Container} from 'muicss/react';

// Custom components
import Header from '../components/header';
import Form from '../components/form';

const title = (
  <title>Contact</title>
);

export default () => (
  <div>
    <Header appendToHead={title} />

    <Container>
      <h1>Contact</h1>
      <p>This contact page has a form in it. But it's still basic.</p>

      <Form />
    </Container>
  </div>
);
