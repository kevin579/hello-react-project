import React, { Component } from 'react'
import {NavLink,Route,Switch,Redirect} from 'react-router-dom'
import About from './component/About/index'
import Home from './component/Home/index'

import MyNavLink from './Item/MyNavLink'


export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <div >
          <h1>Hello</h1>
          {/* <a href="./about.html">About</a>
          <br />
          <a href="./home.html">Home</a> */}
          <div className="list-group">
            {/* <NavLink className="list-group-item" to = "/about">About</NavLink>
            <NavLink className="list-group-item" to = "/home">Home</NavLink> */}
            <MyNavLink to = '/about'>About</MyNavLink>
            <MyNavLink to = '/home'>Home</MyNavLink>
          </div>
            
          
          
        </div>
        
        <div>
        <Switch>
          <Route path="/about" component={About}></Route>
          <Route path="/home" component={Home}></Route>
          <Redirect to ="/home"/>
        </Switch>
          
        </div>   
      </div>
    )
  }
}
