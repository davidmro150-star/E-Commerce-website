import React from "react";

import Navbar from "../layout/Navbar";
import Banner from "../home/Banner";
import SupportFeatures from "../home/SupportFeatures";
import Categories from "../home/categories";
import Products from "../home/Products";
import TopSelling from "../home/Topselling";

const Home = () => {
  return (
    <>
    

      <Banner />

      <SupportFeatures />
      <Products/>

      <Categories />
      <TopSelling/>
    </>
  );
};

export default Home;