import React, { useEffect, useState } from "react";
import Container from "../ui/Container";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.slice(0, 5));
      })
      .catch((error) => {
        console.log("Category fetch error:", error);
      });
  }, []);

  return (
    <section className="w-full bg-[#F7F5EE]">
      <Container>
        {/* Section Header */}
        <div className="flex items-center justify-between pt-8 pb-5 sm:pt-10 sm:pb-6 md:pt-12 md:pb-7 lg:pt-12 lg:pb-6">
          <h2 className="font-jost text-sm font-medium uppercase tracking-wide text-[#222222] sm:text-base md:text-[17px]">
            Shop by Category
          </h2>

          <Link
            to="/shop"
            className="font-jost text-[10px] font-medium uppercase text-[#555555] transition-colors duration-200 hover:text-[#86BC42] sm:text-xs"
          >
            View All
          </Link>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 gap-3 pb-10 sm:grid-cols-3 sm:gap-4 sm:pb-11 md:grid-cols-4 md:gap-5 md:pb-12 lg:grid-cols-5 lg:gap-5 lg:pb-14">
          {categories.map((category) => (
            <Link
              key={category.slug}
              to={`/shop/${category.slug}`}
              className="group min-w-0 text-center outline-none"
            >
              {/* Category Box */}
              <div className="flex aspect-square w-full items-center justify-center rounded-sm bg-white transition-all duration-300 group-hover:bg-[#eaf4df]">
                <div className="px-3 text-center">
                  <p className="font-jost text-sm font-medium capitalize text-[#074E37] transition-colors duration-200 group-hover:text-[#86BC42] sm:text-base md:text-lg">
                    {category.name}
                  </p>

                  <p className="mt-1 text-[9px] text-[#888888] sm:text-[10px]">
                    Shop Now
                  </p>
                </div>
              </div>

              {/* Category Name */}
              <h3 className="mt-3 font-jost text-[11px] font-medium capitalize text-[#333333] transition-colors duration-200 group-hover:text-[#86BC42] sm:text-xs md:mt-4 md:text-sm">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Categories;