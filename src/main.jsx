import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import Admin from './adminpage'
import User from './userpage'
import Owner from './owner'
import Edit from './edit'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    
  }, {
    path: "/userpage",
    element: <User />,
  },
  {
    path: "/adminpage",
    element: <Admin />,
  },
  {
    path: "/owner",
    element: <Owner />,
  },
  {
    path: "/edit/:id",
    element: <Edit />,
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
