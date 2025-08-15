import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
export default function Home() {
  return (
    <div>
      <span>Home</span>
      <br />
      <NavLink to='news'>News</NavLink>
      <NavLink to='message'>Message</NavLink>
      <Outlet/>
    </div>
  )
}
