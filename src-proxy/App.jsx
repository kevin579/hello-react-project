import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  render() {
    return (
      <div>
        <button type='button' onClick = {this.getInfo}>Click to get info</button>
      </div>
    )
  }
  getInfo = ()=>{
    axios.get('/api1/students/1').then(
        response => console.log('success',response.data),
        error => console.log('error:',error)
    )
  }
}
