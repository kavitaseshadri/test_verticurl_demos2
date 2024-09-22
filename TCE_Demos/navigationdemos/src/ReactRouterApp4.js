import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './4_layout_wrapper/pages/Home'
import ProductsPage from './4_layout_wrapper/pages/Products'
import OrdersPage from './4_layout_wrapper/pages/Orders'
import RootLayout from './4_layout_wrapper/pages/Root'

const myRoutes = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductsPage /> },
      { path: '/orders', element: <OrdersPage /> },

    ],
  }
]);//route definitions

const ReactRouterApp4 = () => {
  return (
    <div><RouterProvider router={myRoutes}></RouterProvider></div>
  )
}//this component manages the physical navigation

export default ReactRouterApp4