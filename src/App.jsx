import React from 'react'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './component/layout/RootLayout';
import Home from './component/pages/Home';

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
        
        
   ]
  },
]);
  return (
    <RouterProvider router={router} />
  )
}

export default App
