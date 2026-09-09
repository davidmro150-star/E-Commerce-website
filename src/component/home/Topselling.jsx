
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const TopSelling = () => {
  // ================= ALL PRODUCTS =================

  const [allProducts, setAllProducts] = useState([]);

  // ================= LOADING & ERROR =================

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ================= CART =================

  const [cartItems, setCartItems] = useState([]);

  // ================= VISIBLE PRODUCT COUNT =================

  // Initially show 5 products
  const [visibleCount, setVisibleCount] = useState(5);

  // ================= FETCH PRODUCTS =================

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://dummyjson.com/products?limit=0"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        /*
          DummyJSON does not provide actual sales numbers.

          So we use rating as a ranking signal
          for Top Selling Products.
        */

        const sortedProducts = [...(data.products || [])].sort(
          (a, b) => b.rating - a.rating
        );

        // Store all products
        setAllProducts(sortedProducts);
      } catch (error) {
        console.error(error);

        setError("Unable to load top selling products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // ================= VISIBLE PRODUCTS =================

  /*
    visibleCount controls how many products are displayed.

    5  → first 5 products
    10 → first 10 products
    20 → first 20 products
    30 → first 30 products
  */

  const visibleProducts = allProducts.slice(
    0,
    visibleCount
  );

  // ================= VIEW ALL (+10) =================

  const handleViewAll = () => {
    setVisibleCount((previousCount) => {
      /*
        First click:

        5 → 10
      */

      if (previousCount === 5) {
        return Math.min(10, allProducts.length);
      }

      /*
        After that:

        10 → 20
        20 → 30
        30 → 40
        etc.
      */

      return Math.min(
        previousCount + 10,
        allProducts.length
      );
    });
  };

  // ================= VIEW LESS (-10) =================

  const handleViewLess = () => {
    setVisibleCount((previousCount) => {
      /*
        40 → 30
        30 → 20
        20 → 10
        10 → 5

        Math.max() prevents going below 5.
      */

      return Math.max(previousCount - 10, 5);
    });
  };

  // ================= ADD TO CART =================

  const handleAddToCart = (product) => {
    setCartItems((previousItems) => {
      const existingProduct = previousItems.find(
        (item) => item.id === product.id
      );

      // If product already exists
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

      // If product doesn't exist
      return [
        ...previousItems,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  // ================= BUTTON CONDITIONS =================

  /*
    View All should appear when
    there are still more products.
  */

  const canViewMore =
    visibleCount < allProducts.length;

  /*
    View Less should appear when
    more than the initial 5 products are visible.
  */

  const canViewLess = visibleCount > 5;

  return (
    <section className="bg-white">
      <div
        className="
          mx-auto
          w-full
          max-w-[1200px]
          px-4

          sm:px-5

          md:px-6

          lg:px-8
        "
      >
        {/* ================= HEADER ================= */}

        <div
          className="
            flex
            items-center
            justify-between
            pt-8
            pb-5

            sm:pt-10
            sm:pb-6

            md:pt-12
            md:pb-7

            lg:pt-12
            lg:pb-6
          "
        >
          {/* ================= TITLE ================= */}

          <h2
            className="
              font-jost
              text-sm
              font-medium
              uppercase
              tracking-wide
              text-[#222222]

              sm:text-base

              md:text-[17px]
            "
          >
            Top Selling Products
          </h2>

          {/* ================= VIEW BUTTONS ================= */}

          {!loading && allProducts.length > 5 && (
            <div
              className="
                flex
                items-center
                gap-3

                sm:gap-4
              "
            >
              {/* ================= VIEW LESS ================= */}

              {canViewLess && (
                <button
                  type="button"
                  onClick={handleViewLess}
                  className="
                    flex
                    items-center
                    gap-1
                    font-jost
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-wide
                    text-[#555555]
                    transition-colors
                    duration-200
                    hover:text-[#86BC42]

                    sm:text-xs
                  "
                >
                  {/* Left Arrow */}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="
                      h-3
                      w-3
                      rotate-180
                    "
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L10.94 10 7.23 6.29a.75.75 0 111.06-1.06l4.24 4.24a.75.75 0 010 1.06l-4.24 4.24a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>

                  View Less
                </button>
              )}

              {/* ================= VIEW ALL ================= */}

              {canViewMore && (
                <button
                  type="button"
                  onClick={handleViewAll}
                  className="
                    flex
                    items-center
                    gap-1
                    font-jost
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-wide
                    text-[#555555]
                    transition-colors
                    duration-200
                    hover:text-[#86BC42]

                    sm:text-xs
                  "
                >
                  View All

                  {/* Right Arrow */}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="
                      h-3
                      w-3
                    "
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L10.94 10 7.23 6.29a.75.75 0 111.06-1.06l4.24 4.24a.75.75 0 010 1.06l-4.24 4.24a.75.75 0 011.06-1.06l4.24 4.24a.75.75 0 010 1.06l-4.24 4.24a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              )}
            </div>
          )}
        </div>

        {/* ================= CART MESSAGE ================= */}

        {cartItems.length > 0 && (
          <div
            className="
              mb-4
              rounded-sm
              border
              border-[#e5eadf]
              bg-[#f7faf3]
              px-3
              py-2
              font-jost
              text-[10px]
              text-[#074E37]

              sm:text-[11px]
            "
          >
            {cartItems.length} product
            {cartItems.length > 1 ? "s" : ""} added to cart
          </div>
        )}

        {/* ================= LOADING ================= */}

        {loading && (
          <div
            className="
              grid
              grid-cols-2
              gap-3
              pb-10

              sm:grid-cols-2
              sm:gap-4
              sm:pb-11

              md:grid-cols-3
              md:gap-4
              md:pb-12

              lg:grid-cols-4
              lg:gap-5
              lg:pb-14

              xl:grid-cols-5
            "
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="
                  min-w-0
                  overflow-hidden
                  border
                  border-[#eeeeee]
                  bg-white
                "
              >
                {/* IMAGE SKELETON */}

                <div
                  className="
                    h-[135px]
                    w-full
                    animate-pulse
                    bg-[#eeeeee]

                    sm:h-[145px]

                    md:h-[155px]

                    lg:h-[165px]

                    xl:h-[175px]
                  "
                />

                {/* TEXT SKELETON */}

                <div className="space-y-2 p-3">
                  <div
                    className="
                      h-2
                      w-1/3
                      animate-pulse
                      bg-[#eeeeee]
                    "
                  />

                  <div
                    className="
                      h-3
                      w-4/5
                      animate-pulse
                      bg-[#eeeeee]
                    "
                  />

                  <div
                    className="
                      h-3
                      w-1/2
                      animate-pulse
                      bg-[#eeeeee]
                    "
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ================= ERROR ================= */}

        {!loading && error && (
          <div
            className="
              mb-10
              rounded-sm
              border
              border-red-100
              bg-red-50
              px-4
              py-8
              text-center
            "
          >
            <p className="font-jost text-sm text-red-500">
              {error}
            </p>

            <button
              type="button"
              onClick={() => window.location.reload()}
              className="
                mt-3
                rounded-sm
                bg-[#074E37]
                px-4
                py-2
                font-jost
                text-xs
                font-medium
                text-white
              "
            >
              Try Again
            </button>
          </div>
        )}

        {/* ================= PRODUCTS ================= */}

        {!loading && !error && (
          <>
            <div
              className="
                grid
                grid-cols-2
                gap-3
                pb-10

                sm:grid-cols-2
                sm:gap-4
                sm:pb-11

                md:grid-cols-3
                md:gap-4
                md:pb-12

                lg:grid-cols-4
                lg:gap-5
                lg:pb-14

                xl:grid-cols-5
              "
            >
              {visibleProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>

            {/* ================= PRODUCT COUNT ================= */}

            {allProducts.length > 5 && (
              <div className="pb-8 text-center">
                <p
                  className="
                    font-jost
                    text-[11px]
                    text-[#777777]
                  "
                >
                  Showing{" "}
                  <span className="font-medium text-[#222222]">
                    {visibleProducts.length}
                  </span>{" "}
                  of{" "}
                  <span className="font-medium text-[#222222]">
                    {allProducts.length}
                  </span>{" "}
                  products
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default TopSelling;

