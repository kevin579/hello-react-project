import React, { Component } from 'react'
import store from './store'
export default class App extends Component {
  render() {
    return (
      <div>
        <span>Value:{store.getState()}</span>
        <button type='button' onClick={this.increase}>Click</button>
        <button type='button' onClick={this.async}>Async</button>
      </div>
    )
  }

  increase = ()=>{
    store.dispatch({type:'+',value:1})
  }

  async = ()=>{
    store.dispatch(this.asycnAction({type:'+',value:1},1000))
  }

  asycnAction = (data,time)=>{
    console.log(time);
    return (dispatch)=>{
      setTimeout(()=>{store.dispatch(this.increase)},time)
  }
}
}
