
import React from "react";
import { useParams } from "react-router-dom";
import Products from "../component/home/Products";

import Banner from "./Banner";

const Shop = () => {
  const { category } = useParams();

  return (

   
    <main>
      <Banner />
      <Products selectedCategory={category || "all"} />
    
    </main>
  );
};

export default Shop;
