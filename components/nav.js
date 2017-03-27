import React from 'react';
import Link from 'next/link';
import {Appbar, Button, Container, Row, Col} from 'muicss/react';

export default () => (
  <Appbar className="mui--appbar-height mui--appbar-line-height" style={{textAlign: 'center', backgroundColor: '#e07474'}}>
    <Container fluid={true}>
      <Row>
        <Col xs={12} sm={4}>
          <Link href="/">
            <Button>Home</Button>
          </Link>
        </Col>

        <Col xs={12} sm={4}>
          <Link href="/about">
            <Button>About</Button>
          </Link>
        </Col>

        <Col xs={12} sm={4}>
          <Link href="/contact">
            <Button>Contact</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  </Appbar>
);
