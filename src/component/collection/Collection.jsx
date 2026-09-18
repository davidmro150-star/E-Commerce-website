
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../ui/Container";

const categoryData = [
  {
    name: "Groceries",
    slug: "groceries",
  },
  {
    name: "Mobile",
    slug: "smartphones",
  },
  {
    name: "Beauty",
    slug: "beauty",
  },
  {
    name: "Motor Bike",
    slug: "motorcycle",
  },
  {
    name: "Laptops",
    slug: "laptops",
  },
  {
    name: "Furniture",
    slug: "furniture",
  },
  {
    name: "Fragrances",
    slug: "fragrances",
  },
  {
    name: "Mens Shirts",
    slug: "mens-shirts",
  },
];

const PRODUCTS_PER_PAGE = 10;

const Collection = () => {
  const [selectedCategory, setSelectedCategory] = useState("groceries");
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [loading, setLoading] = useState(false);

  const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      try {
        const skip = (currentPage - 1) * PRODUCTS_PER_PAGE;

        const response = await fetch(
          `https://dummyjson.com/products/category/${selectedCategory}?limit=${PRODUCTS_PER_PAGE}&skip=${skip}`
        );

const data = await response.json();

setProducts(data.products);
setTotalProducts(data.total);
      } catch (error) {
  console.error("Failed to fetch products:", error);
  setProducts([]);
  setTotalProducts(0);
} finally {
  setLoading(false);
}
    };

fetchProducts();
  }, [selectedCategory, currentPage]);

const handleCategoryChange = (slug) => {
  setSelectedCategory(slug);
  setCurrentPage(1);
};

return (
  <section className="w-full bg-white">
    {/* Collection Header */}
    <div className="w-full bg-[#F7F5EE]">
    <Container>
        <div className="flex items-center justify-between py-8 sm:py-10 md:py-12">
        <h1 className="font-jost text-lg font-medium uppercase text-[#222222] sm:text-xl md:text-2xl">
        Collection
        </h1>

        <p className="font-jost text-xs text-[#777777] sm:text-sm">
            {totalProducts} Products
        </p>
        </div>
    </Container>
    </div>

    {/* Category Navigation */}
    <Container>
    <div className="border-b border-[#E5E5E5] py-5 sm:py-6">
    <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:gap-x-7 md:gap-x-8 lg:gap-x-10">
          {categoryData.map((category) => (
          <button
          key={category.slug}
          type="button"
          onClick={() => handleCategoryChange(category.slug)}
          className={`font-jost text-xs font-medium uppercase tracking-wide transition-colors duration-200 sm:text-sm ${selectedCategory === category.slug
          ? "text-[#074E37]"
          : "text-[#777777] hover:text-[#86BC42]"
          }`}
          >
          {category.name}
          </button>
          ))}
        </div>
      </div>
    </Container>

    {/* Products */}
    <Container>
    <div className="py-8 sm:py-10 md:py-12">
      {/* Product Count */}
        <div className="mb-6 flex items-center justify-between">
        <h2 className="font-jost text-sm font-medium uppercase text-[#222222] sm:text-base">
        {categoryData.find(
        (category) => category.slug === selectedCategory
        )?.name}
        </h2>

        <p className="font-jost text-[11px] text-[#888888] sm:text-xs">
        Showing {products.length} of {totalProducts}
        </p>
        </div>

        {/* Loading */}
        {loading && (
        <div className="flex min-h-[300px] items-center justify-center">
        <p className="font-jost text-sm text-[#777777]">
        Loading products...
        </p>
        </div>
        )}

        {/* Product Grid */}
        {!loading && products.length > 0 && (
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 min-[400px]:grid-cols-2 lg:grid-cols-5 sm:gap-x-5 sm:gap-y-10">
          {products.map((product) => (
          <Link
          key={product.id}
          to={`/shop/product/${product.id}`}
          className="group"
          >
          {/* Product Image */}
          <div className="flex aspect-square w-full items-center justify-center rounded-sm bg-[#F7F5EE] p-5 sm:p-7 md:p-8">
          <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
          </div>

                {/* Product Information */}
          <div className="pt-3 sm:pt-4">
          <h3 className="line-clamp-2 font-jost text-xs font-medium text-[#222222] transition-colors duration-200 group-hover:text-[#86BC42] sm:text-sm">
          {product.title}
          </h3>

          <div className="mt-2 flex items-center justify-between gap-2">
          <p className="font-jost text-sm font-medium text-[#074E37] sm:text-base">
           ${product.price}
          </p>

          <p className="font-jost text-[10px] text-[#888888] sm:text-xs">
          {product.rating}
          </p>
          </div>
          </div>
          </Link>
          ))}
          </div>
          )}

        {/* No Products */}
        {!loading && products.length === 0 && (
          <div className="flex min-h-[300px] items-center justify-center">
          <p className="font-jost text-sm text-[#777777]">
          No products found.
          </p>
          </div>
          )}

        {/* Pagination */}
        {!loading && totalPages > 1 && (
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:mt-12">
        {Array.from({ length: totalPages }, (_, index) => {
        const pageNumber = index + 1;

        return (
                <button
                key={pageNumber}
                type="button"
                onClick={() => setCurrentPage(pageNumber)}
                className={`flex h-9 min-w-9 items-center justify-center px-3 font-jost text-xs transition-all duration-200 sm:h-10 sm:min-w-10 ${currentPage === pageNumber
                ? "bg-[#074E37] text-white"
                : "border border-[#DDDDDD] text-[#555555] hover:border-[#074E37] hover:text-[#074E37]"
                }`}
                >
                {pageNumber}
                </button>
                );
                })}
               </div>
               )}
    </div>
    </Container>
    </section>
);
};

export default Collection;
