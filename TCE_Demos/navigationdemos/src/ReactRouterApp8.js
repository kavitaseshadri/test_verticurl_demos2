import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './8_navigating_programatically/pages/Home';
import ProductsPage from './8_navigating_programatically/pages/Products';
import ErrorPage from './8_navigating_programatically/pages/Error';
import OrdersPage from './8_navigating_programatically/pages/Orders';
import RootLayout from './8_navigating_programatically/pages/Root';

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

const ReactRouterApp8 = () => {
  return (
    <div><RouterProvider router={myRoutes}></RouterProvider></div>
  )
}//this component manages the physical navigation

export default ReactRouterApp8