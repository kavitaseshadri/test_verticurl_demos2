import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './ReactRouterApp1.css';
import HomePage from './2_alternative_route_setup/pages/Home';
import ProductsPage from './2_alternative_route_setup/pages/Products';

//create a router
//it manages navigation in your application
//how-it looks at the url and renders the appropriate page/component
const myRouter = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/products', element: < ProductsPage /> }
]);//route definitions

const ReactRouterApp2 = () => {
  return (
    <RouterProvider router={myRouter}></RouterProvider>
  )
}

export default ReactRouterApp2