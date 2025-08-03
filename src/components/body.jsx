import React, { Component } from 'react';
import Item from './item';

export default class Body extends Component {
  render() {
    console.log(this.props);
    let { items } = this.props;
    items = items || []

    return (
      <div>
        {items.map((item, index) => (
          <Item key={index} text={item} />
        ))}
      </div>
    );
  }
}
