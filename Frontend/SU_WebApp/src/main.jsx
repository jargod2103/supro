import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider,Route,Link} from 'react-router-dom'
import Offer from './Page2/offer.jsx'
import Contact from './Page3/contact.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/offer",
    element:<Offer/>
  },
  {
    path:"/Contact",
    element:<Contact/>
  }
   
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
