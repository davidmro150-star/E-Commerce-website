
import React from "react";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./component/layout/RootLayout";
import Home from "./component/pages/Home";
import Shop from "./shop/shop";
import JournalPage from "./component/journal/JournalPage";
import Collection from "./component/collection/Collection";



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
          path: "shop",
          element: <Shop />,
        },

        {
          path: "shop/:category",
          element: <Shop />,
        },
        {
          path: "/journal",
          element: <JournalPage />,
        },
        {
          path: "/collection",
          element: <Collection />,
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
