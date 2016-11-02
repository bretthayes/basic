import React, {Component} from 'react';
import {Button, Input} from 'muicss/react';

export default class Form extends Component {
  sayHello = (e) => {
    e.preventDefault();

    const value = document.getElementById('name').value;

    alert(`Hello ${value}!`);
  }

  render() {
    return (
      <form style={{marginTop: 50}}>
        <Input type="text" hint="Your name..." floatingLabel={true} id="name" />
        <Button color="primary" onClick={this.sayHello}>Submit</Button>
      </form>
    )
  }
}
