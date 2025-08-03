import React, { Component } from 'react'
import {increment, incrementPro } from './redux/reducer'
import { connect } from 'react-redux'
class App extends Component {

  render() {
    
    const {count,increment,incrementPro} = this.props; 
    return (
      <div>
        <span className="value">Value:{count}</span>
        <select name="method" id="method">
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="x">x</option>
          <option value="/">/</option>
        </select>
        <input type="number" />
        <button type="button" onClick={()=>{increment()}}>Calculate</button>
        <button type='button' onClick = {()=>{incrementPro(5)}}>Calculate+</button>
      </div>
    )
  }


}

const mapStateToPros = (state)=>({
  count: state.counter.value
})

const mapDispatchToProps = {
  increment,
  incrementPro,
};

export default connect(mapStateToPros,mapDispatchToProps)(App)


