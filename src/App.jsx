import React from 'react'
import {NavLink,useRoutes} from 'react-router-dom'
import table from './routes/index' 
 

export default function App() {
  const routes = useRoutes(table)
  return (
    <div>
      <h1>Hello</h1>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/home'>Home</NavLink>


      {routes}
      <h2>Bye</h2>
    </div>
  )
}
