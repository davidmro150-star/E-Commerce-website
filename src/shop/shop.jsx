import React from "react";
import { useParams } from "react-router-dom";
import Products from "../home/Products";

const Shop = () => {
  const { category } = useParams();

  return (
    <main>
      <Products selectedCategory={category || "all"} />
    </main>
  );
};

export default Shop;