import React, { Component } from 'react'

export default class index extends Component {
  render() {
    return (
      <div>
        <span className="value">Value:???</span>
        <select name="method" id="method">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="x">x</option>
        <option value="/">/</option>
        </select>
        <input type="number" />
        <button type="button" >Calculate</button>
        <button type='button' >Calculate+</button>
        </div>
    )
  }
}
