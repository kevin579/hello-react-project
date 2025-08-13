// import { useRoutes } from "react-router-dom"
import About from "../components/About"
import Home from "../components/Home"
import { Navigate } from "react-router-dom"

const table =  [
    {
      path:'/about',
      element:<About/>
    },
    {
      path:'/home',
      element:<Home/>
    },
    {
      path:'/',
      element:<Navigate to={<About/>}/>
    }
  ]

export default table