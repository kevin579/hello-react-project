import React, { Component } from 'react'
import News from '../News/index'
import Message from '../Message/index'
import {Route,Switch,NavLink} from 'react-router-dom'

export default class index extends Component {
  render() {
    return (
      <div className='container'>
        <span>Home</span>

        <div className="list-group">
          <NavLink className="list-group-item" to='/home/message'>Message</NavLink>
          <NavLink className="list-group-item" to='/home/news'>News</NavLink>
        </div>
        


        <Switch>
          <Route path='/home/message' component={Message}></Route>
          <Route path='/home/news' component={News}></Route>
        </Switch>
      </div>
    )
  }
}
