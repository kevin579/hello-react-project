import React, { Component } from 'react';
import store from '../redux/store';
// import { add } from '../redux/reducers/configItem';
export default class Header extends Component {
  constructor(props){
    super(props)
    this.input = React.createRef();
  }
  render() {
    
    return (
      <div>
        <input type="text" placeholder="Enter item" ref = {this.input} />
        <button onClick={this.send}>Submit</button>
      </div>
    );
  }

  send = ()=>{
    const item = this.input.current.value;
    console.log('send');
    // store.dispatch(add(item))
    store.dispatch({type:'configItem/add',payload:item})
  }
}
