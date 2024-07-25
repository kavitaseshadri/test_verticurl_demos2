import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './ReactRouterApp1.css';
import HomePage from './1_route_setup/pages/Home';

//create a router
//it manages navigation in your application
//how-it looks at the url and renders the appropriate page/component
const myRouter = createBrowserRouter([
  { path: '/', element: <HomePage /> }
]);//route definitions

const ReactRouterApp1 = () => {
  return (
    <RouterProvider router={myRouter}></RouterProvider>
  )
}

export default ReactRouterApp1