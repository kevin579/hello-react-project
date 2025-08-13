import React, { Component, createContext } from 'react'

const MyContext = createContext();
export default class App extends Component {
  state = {name:'A'}
  render() {
    const {Provider}  = MyContext;
    return (
      <div>
      <span>A</span>
      <Provider value={this.state}>
        <B render={(name)=><C name = {name}/>}/>
      </Provider>
      
      </div>
    )
  }
}

class B extends Component{
  render(){
    const name = 'hello'
    return(
      <div>
      <span>B</span>
      {this.props.render(name)}
      </div>
    )
  }
}

class C extends Component{
  static contextType = MyContext;
  render(){
    console.log(this.props.name);
    return(
      <div>C</div>
    )
  }
}