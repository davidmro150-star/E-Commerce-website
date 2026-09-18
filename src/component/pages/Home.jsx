import React from "react";

import Navbar from "../layout/Navbar";
import Banner from "../home/Banner";
import SupportFeatures from "../home/SupportFeatures";

import Products from "../home/Products";
import TopSelling from "../home/Topselling";
import Discount from "../home/Discount";
import LatestBlog from "../home/LatestBlogs";
import WhatsApp from "../home/WhatsApp";
import Categories from "../home/Categories";



const Home = () => {
  return (
    <>


      <Banner />
      <SupportFeatures />
      <Products />
      <Categories/>
   
      <TopSelling />
      <Discount />
      <LatestBlog />
    <WhatsApp/>
    </>
  );
};

export default Home;