import React, { Component } from 'react';

export default class Item extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <span>Item: {this.props.text}</span>
      </div>
    );
  }
}
