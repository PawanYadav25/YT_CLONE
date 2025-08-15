import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Utils/Home.jsx'
import Login from './Utils/Login.jsx'
import SignUp from './Utils/SignUp.jsx'
import Stream from './Utils/Stream.jsx'
import Channel from './Utils/Channel.jsx'
import './index.css'
import App from './App.jsx'

const apRouter = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/login',
        element: <Login/>
      },
      {
        path:'/signup',
        element: <SignUp/>
      },
      {
        path:'/stream',
        element: <Stream/>
      },
      {
        path:'/channel',
        element: <Channel/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={apRouter}/>
  </StrictMode>,
)
