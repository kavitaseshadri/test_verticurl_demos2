import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './7_navlinks/pages/Home';
import ProductsPage from './7_navlinks/pages/Products';
import ErrorPage from './7_navlinks/pages/Error';
import OrdersPage from './7_navlinks/pages/Orders';
import RootLayout from './7_navlinks/pages/Root';

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

const ReactRouterApp7 = () => {
  return (
    <div><RouterProvider router={myRoutes}></RouterProvider></div>
  )
}//this component manages the physical navigation

export default ReactRouterApp7