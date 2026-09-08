import React from 'react'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './component/layout/RootLayout';
import Home from './component/pages/Home';
import Shop from './shop/shop';

const App = () => {

  const router = createBrowserRouter([
  {
    path: "/",
      Component: RootLayout,
      children: [
     
        {
          index: true,
          Component: Home,
        },
        {
          path: "/shop",
          element: Shop,
        },
        {
          path: "/shop/:category",
          element: <shop />,
        },
        
   ]
  },
]);
  return (
    <RouterProvider router={router} />
  )
}

export default App
