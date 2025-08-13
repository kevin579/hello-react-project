import React, { Component, lazy, Suspense } from 'react'
import {NavLink,Route} from 'react-router-dom'
// import About from './component/About/index'
// import Home from './component/Home/index'
// import 
const Home = lazy(()=> import('./component/Home/index'))
const About = lazy(()=> import('./component/About/index'))
const Func = lazy(()=> import('./component/Func/index'))
export default class App extends Component {
  render() {
    return (
      <div>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/func'>Func</NavLink>
        <Suspense fallback={<h1>Loading...........</h1>}>
          <Route path='/about' component={About}></Route>
          <Route path='/home' component={Home}></Route>
          <Route path='/func' component={Func}></Route>
        </Suspense>
        
      </div>
    )
  }
}
