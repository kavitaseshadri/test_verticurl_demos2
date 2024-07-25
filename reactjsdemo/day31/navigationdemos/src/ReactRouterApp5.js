import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './5_error_route/pages/Home'
import ProductsPage from './5_error_route/pages/Products'
import OrdersPage from './5_error_route/pages/Orders'
import ErrorPage from './5_error_route/pages/Error'
import RootLayout from './5_error_route/pages/Root'

const myRoutes = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductsPage /> },
      { path: '/orders', element: <OrdersPage /> },
    ],
  }
]);//route definitions

const ReactRouterApp5 = () => {
  return (
    <div><RouterProvider router={myRoutes}></RouterProvider></div>
  )
}//this component manages the physical navigation

export default ReactRouterApp5