import React, { useState } from "react";

import Navbar from "../home/Navbar";
import Banner from "../home/Banner";
import SupportFeatures from "../home/SupportFeatures";

import Products from "../home/Products";
import Categories from "../home/categories";
import ProductCard from "../home/ProductCard";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <>
      <Navbar />

      <Banner />

      <SupportFeatures />
      <Products
      <div>
        <ProductCard/>
      </div>

    
    </>
  );
};

export default Home;