import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './6_css_module_style/pages/Home';
import ProductsPage from './6_css_module_style/pages/Products';
import ErrorPage from './6_css_module_style/pages/Error';
import OrdersPage from './6_css_module_style/pages/Orders';
import RootLayout from './6_css_module_style/pages/Root';

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

const ReactRouterApp6 = () => {
  return (
    <div><RouterProvider router={myRoutes}></RouterProvider></div>
  )
}//this component manages the physical navigation

export default ReactRouterApp6