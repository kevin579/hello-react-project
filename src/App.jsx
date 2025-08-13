import React from 'react'
import {NavLink,Routes,Route,Navigate,useRoutes,Outlet} from 'react-router-dom'
import table from './routes/index' 
// import About from './components/About'
// import Home from './components/Home'

export default function App() {
  const routes = useRoutes(table)
  return (
    <div>
      <h1>Hello</h1>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/home'>Home</NavLink>

      
      {/* <Routes>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/' element={<Navigate to='/about'></Navigate>}></Route>
      </Routes> */}
      {/* {routes} */}
      <Outlet/>
      <h2>Bye</h2>
    </div>
  )
}
