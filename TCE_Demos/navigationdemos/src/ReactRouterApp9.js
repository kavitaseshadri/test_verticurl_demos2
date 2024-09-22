import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './9_dynamic_routes/pages/Home';
import ProductsPage from './9_dynamic_routes/pages/Products';
import ErrorPage from './9_dynamic_routes/pages/Error';
import OrdersPage from './9_dynamic_routes/pages/Orders';
import ProductDetail from './9_dynamic_routes/pages/ProductDetail';
import RootLayout from './9_dynamic_routes/pages/Root';

const myRoutes = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductsPage /> },
      { path: '/products/:productId', element: <ProductDetail /> },
      { path: '/orders', element: <OrdersPage /> },
      { path: '/orders/:orderId', element: <OrdersPage /> },
    ],
  }
]);//route definitions

const ReactRouterApp9 = () => {
  return (
    <div><RouterProvider router={myRoutes}></RouterProvider></div>
  )
}//this component manages the physical navigation

export default ReactRouterApp9