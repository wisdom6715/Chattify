import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Routes } from 'react-router-dom'
import { useState } from 'react'
import App from './App'
import Background from '../Components/Background'
import Chatwindow from '../Components/Chatwindow'
import styles from '../Components/body.module.css'
import Logo from '../Components/Logo'


const router=createBrowserRouter([
  {
    path: '/',  
    element: <App />,
    errorElement: <div>Error 404</div>
  },
  {
    path:'/login',
    element: <Background />
  },
  {
    path:'/chats',
    element: <Chatwindow />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
