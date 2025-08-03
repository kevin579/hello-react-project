import React, { Component } from 'react'
import store from './redux/store'
import Content from './container/Count/index'
export default class App extends Component {
  render() {
    return (
      <Content store = {store}/>
    )
  }
}
