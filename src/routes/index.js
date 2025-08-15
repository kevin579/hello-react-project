// import { useRoutes } from "react-router-dom"
import About from "../components/About"
import Home from "../components/Home"
import News from "../components/News"
import Message from "../components/Message"
import Detail from "../components/Detail"

import { Navigate } from "react-router-dom"

const table =  [
    {
      path:'/about',
      element:<About/>
    },
    {
      path:'/home',
      element:<Home/>,
      children:[
        {
          path:'news',
          element:<News/>
        },
        {
          path:'message',
          element:<Message/>,
          children:[
            {
              path:'detail',
              element:<Detail/>
            }
          ]
        }
      ]
    },
    {
      path:'/',
      element:<Navigate to="/about"/>
    }
  ]

export default table