
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
import Lookbook from "./component/lookbook/LookBook";
import AboutUs from "./component/pagesnavbar/About";
import ContactUs from "./component/pagesnavbar/ContactUs";
import FAQ from "./component/pagesnavbar/FAQ";
import Wishlist from "./component/pagesnavbar/Wishlist";
import MyAccount from "./component/footer/myAccount";
import ShoppingCart from "./component/footer/ShoppingCartPage";
import ShoppingCartPage from "./component/footer/ShoppingCartPage";



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
        },
        {
          path: "/lookbook",
          element: <Lookbook />,
        },
        {
          path: "/about-us",
          element: <AboutUs />,
        },
        {
          path: "/contact-us",
          element: <ContactUs />,
        },
        {
          path: "/faq",
          element: <FAQ />,
        },
        {
          path: "/wishlist",
          element: <Wishlist />,
        },
        {
          path: "/account",
          element: <MyAccount />,
        },
        {
          path: "/cart",
          element: <ShoppingCartPage />,
        },
  

        
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
