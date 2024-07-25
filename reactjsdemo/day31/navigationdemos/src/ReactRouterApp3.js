import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './ReactRouterApp1.css';
import HomePage from './3_adding_links/pages/Home';
import ProductsPage from './3_adding_links/pages/Products';
import OrdersPage from './3_adding_links/pages/Orders';

//create a router
//it manages navigation in your application
//how-it looks at the url and renders the appropriate page/component
const myRouter = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/products', element: < ProductsPage /> },
  { path: '/orders', element: < OrdersPage /> }
]);//route definitions

const ReactRouterApp3 = () => {
  return (
    <RouterProvider router={myRouter}></RouterProvider>
  )
}

export default ReactRouterApp3