// main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import SignUpComponent from './Components/SignUpComponent.jsx'

import { Route , RouterProvider , createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import SignIn from './Components/SignIn';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element = {<SignUpComponent/>}/>
    <Route path='SignIn'element = {<SignIn/>}/>
    </>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)