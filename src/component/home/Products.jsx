
import React, { useEffect, useMemo, useState } from "react";
import Container from "../ui/Container";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [cartItems, setCartItems] = useState([]);

  // ================= ACTIVE FILTER =================
  const [activeFilter, setActiveFilter] = useState("Best Sellers");

  // ================= FILTER OPTIONS =================
  const filterOptions = [
    "Best Sellers",
    "Most Popular",
    "Best 20",
    "Best Rated",
  ];

  // ================= FETCH PRODUCTS =================
  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "https://dummyjson.com/products?limit=100"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();

      setProducts(data.products || []);
    } catch (error) {
      console.error("Product fetch error:", error);

      setError("Unable to load products. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // ================= ADD TO CART =================
  const handleAddToCart = (product) => {
    setCartItems((previousItems) => {
      const existingProduct = previousItems.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return previousItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...previousItems,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  // ================= TOTAL CART ITEMS =================
  const totalCartItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // ================= FILTER PRODUCTS =================
  const filteredProducts = useMemo(() => {
    if (!products.length) {
      return [];
    }

    switch (activeFilter) {
      // --------------------------------
      // BEST SELLERS
      // --------------------------------
      case "Best Sellers":
        return [...products]
          .sort(
            (a, b) =>
              (b.stock || 0) - (a.stock || 0)
          )
          .slice(0, 10);

      // --------------------------------
      // MOST POPULAR
      // --------------------------------
      case "Most Popular":
        return [...products]
          .sort(
            (a, b) =>
              (b.rating || 0) - (a.rating || 0)
          )
          .slice(0, 10);

      // --------------------------------
      // BEST 20
      // --------------------------------
      case "Best 20":
        return [...products]
          .sort(
            (a, b) =>
              (b.discountPercentage || 0) -
              (a.discountPercentage || 0)
          )
          .slice(0, 20);

      // --------------------------------
      // BEST RATED
      // --------------------------------
      case "Best Rated":
        return [...products]
          .sort(
            (a, b) =>
              (b.rating || 0) - (a.rating || 0)
          )
          .slice(0, 10);

      default:
        return products.slice(0, 10);
    }
  }, [products, activeFilter]);

  return (
    <section>
      <Container>

        {/* ================= SECTION HEADER ================= */}
        <div
          className="
            mb-5
            flex
            flex-col
            gap-4

            sm:mb-6

            md:mb-7
            md:flex-row
            md:items-end
            md:justify-between
          "
        >

          {/* TITLE */}
          <div>
            <p
              className="
                mb-1
                text-[9px]
                font-semibold
                uppercase
                tracking-[1.5px]
                text-[#86BC42]

                sm:text-[10px]
              "
            >
              Our Products
            </p>

            <h2
              className="
                text-[16px]
                font-bold
                uppercase
                tracking-wide
                text-[#333333]

                sm:text-[18px]

                md:text-[20px]
              "
            >
              Featured Products
            </h2>
          </div>

          {/* ================= FILTER OPTIONS ================= */}
          <div
            className="
              flex
              w-full
              gap-1
              overflow-x-auto
              pb-1
              scrollbar-hide

              md:w-auto
              md:gap-2
            "
          >
            {filterOptions.map((option) => {
              const isActive = activeFilter === option;

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => setActiveFilter(option)}
                  className={`
shrink - 0
rounded - sm
border
px - 2.5
py - 1.5
text - [9px]
font - medium
uppercase
tracking - wide
transition - all
duration - 200

sm: px - 3
sm: py - 2
sm: text - [10px]

                    ${
  isActive
    ? "border-[#86BC42] bg-[#86BC42] text-white"
    : "border-[#dddddd] bg-white text-[#555555] hover:border-[#86BC42] hover:text-[#074E37]"
}
`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= CART STATUS ================= */}
        {totalCartItems > 0 && (
          <div
            className="
              mb-4
              rounded-sm
              border
              border-[#e4eadf]
              bg-[#f7faf3]
              px-3
              py-2
              text-[10px]
              text-[#074E37]

              sm:text-[11px]
            "
          >
            {totalCartItems} product
            {totalCartItems > 1 ? "s" : ""} added to cart
          </div>
        )}

        {/* ================= LOADING ================= */}
        {loading && (
          <div
            className="
              grid
              grid-cols-2
              gap-3

              sm:grid-cols-2
              sm:gap-4

              md:grid-cols-3
              md:gap-4

              lg:grid-cols-4
              lg:gap-5

              xl:grid-cols-5
              xl:gap-5
            "
          >
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="
                  overflow-hidden
                  rounded-sm
                  border
                  border-[#eeeeee]
                  bg-white
                "
              >
                <div
                  className="
                    h-[145px]
                    animate-pulse
                    bg-[#eeeeee]

                    sm:h-[155px]

                    md:h-[165px]

                    lg:h-[175px]

                    xl:h-[185px]
                  "
                />

                <div className="space-y-2 p-3">
                  <div className="h-2 w-1/3 animate-pulse bg-[#eeeeee]" />

                  <div className="h-3 w-4/5 animate-pulse bg-[#eeeeee]" />

                  <div className="h-3 w-1/2 animate-pulse bg-[#eeeeee]" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ================= ERROR ================= */}
        {!loading && error && (
          <div
            className="
              rounded-sm
              border
              border-red-100
              bg-red-50
              px-4
              py-8
              text-center
            "
          >
            <p className="text-sm text-red-500">
              {error}
            </p>

            <button
              type="button"
              onClick={fetchProducts}
              className="
                mt-3
                rounded-sm
                bg-[#074E37]
                px-4
                py-2
                text-xs
                font-medium
                text-white
                transition-colors
                hover:bg-[#063d2c]
              "
            >
              Try Again
            </button>
          </div>
        )}

        {/* ================= PRODUCTS ================= */}
        {!loading && !error && (
          <>
            {/* ACTIVE FILTER */}
            <div className="mb-3 flex items-center justify-between">
              <p
                className="
                  text-[10px]
                  font-medium
                  text-[#777777]

                  sm:text-[11px]
                "
              >
                Showing{" "}
                <span className="font-semibold text-[#074E37]">
                  {activeFilter}
                </span>
              </p>

              <span
                className="
                  text-[9px]
                  text-[#999999]

                  sm:text-[10px]
                "
              >
                {filteredProducts.length} products
              </span>
            </div>

            {/* PRODUCT GRID */}
            <div
              className="
                grid
                grid-cols-2
                gap-3

                sm:grid-cols-2
                sm:gap-4

                md:grid-cols-3
                md:gap-4

                lg:grid-cols-4
                lg:gap-5

                xl:grid-cols-5
                xl:gap-5
              "
            >
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </>
        )}

      </Container>
    </section>
  );
};

export default Products;

