import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Auth from './components/home/home'
import Signup from './components/signup/signup'
import Login from './components/login/Login'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import HomeComp from './HomeComponent/Home.jsx'
import ResumeApp from './resume/resumeApp.jsx'
import TodoApp from './todo/todoApp.jsx'
import NotesApp from './Notes/notesApp.jsx'


import SignupAuth from './Auth/SignupAuth.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <HomeComp />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "signup",
        element: <Signup />
      },
      {
        path: "homecomponent",
        element: <HomeComp />
      },
      {
        path: "resumeApp",
        element: <ResumeApp />
      },
      {
        path: "todoApp",
        element: <TodoApp />
      },
      {
        path: "notesApp",
        element: <NotesApp />
      },
     
      {
        path: "SignupAuth",
        element: <SignupAuth />
      },
      
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
