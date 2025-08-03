import React, { Component } from 'react'

export default class index extends Component {
  render() {
    const {value,add,subtract} = this.props;
    return (
      <div>
        <span className="value">Value:{value}</span>
        <select name="method" id="method">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="x">x</option>
        <option value="/">/</option>
        </select>
        <input type="number" />
        <button type="button" onClick={add}>Calculate</button>
        <button type='button' onClick={() =>subtract()}>Calculate+</button>
        </div>
    )
  }
}
