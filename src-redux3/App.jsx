import React, { Component } from 'react'
import Header from './components/header'
import Body from './container/body'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Body/>        
      </div>
    )
  }
}
