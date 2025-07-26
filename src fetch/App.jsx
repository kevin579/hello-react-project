import React, { Component } from 'react'
// import axios from 'axios'
import Search from './components/Search/index'
import Body from './components/Body/index'
export default class App extends Component {
  render() {
    return (
      <div>
        <Search/>
        <Body/>
      </div>
    )
  }

}
