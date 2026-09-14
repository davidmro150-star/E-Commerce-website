
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Container from "../ui/Container";

const Discount = () => {
  // =========================
  // STATES
  // =========================
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  // Show 4 products at a time
  const productsPerPage = 4;

  // =========================
  // FETCH DISCOUNT PRODUCTS
  // =========================
  useEffect(() => {
    const fetchDiscountProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://dummyjson.com/products?limit=20"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        // Sort products by highest discount
        const discountProducts = [...(data.products || [])].sort(
          (a, b) => b.discountPercentage - a.discountPercentage
        );

        setAllProducts(discountProducts);

        setProducts(
          discountProducts.slice(0, productsPerPage)
        );

        setCurrentPage(0);
      } catch (error) {
        console.error(error);
        setError("Unable to load discount products.");
      } finally {
        setLoading(false);
      }
    };

    fetchDiscountProducts();
  }, []);

  // =========================
  // ADD TO CART
  // =========================
  const handleAddToCart = (product) => {
    setCartItems((previousItems) => {
      const existingProduct = previousItems.find(
        (item) => item.id === product.id
      );

      // Product already exists
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

      // New product
      return [
        ...previousItems,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  // =========================
  // NEXT PRODUCTS
  // =========================
  const handleNext = () => {
    const nextPage = currentPage + 1;

    const startIndex = nextPage * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    // Stop if there are no more products
    if (startIndex >= allProducts.length) {
      return;
    }

    const nextProducts = allProducts.slice(
      startIndex,
      endIndex
    );

    setProducts(nextProducts);
    setCurrentPage(nextPage);
  };

  // =========================
  // PREVIOUS PRODUCTS
  // =========================
  const handlePrevious = () => {
    // Already on first page
    if (currentPage === 0) {
      return;
    }

    const previousPage = currentPage - 1;

    const startIndex = previousPage * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    const previousProducts = allProducts.slice(
      startIndex,
      endIndex
    );

    setProducts(previousProducts);
    setCurrentPage(previousPage);
  };

  // =========================
  // PAGINATION
  // =========================
  const totalPages = Math.ceil(
    allProducts.length / productsPerPage
  );

  const isFirstPage = currentPage === 0;

  const isLastPage =
    currentPage >= totalPages - 1;

  // =========================
  // RETURN
  // =========================
  return (
    <section className="bg-white">
      <Container>
        <div
          className="
            px-4
            py-10
            sm:px-6
            sm:py-12
            md:px-8
            md:py-14
            lg:px-0
            lg:py-16
          "
        >

          {/* =========================
              SECTION HEADING
          ========================= */}
          <div className="mb-8">
            <p
              className="
                mb-2
                text-sm
                font-medium
                text-gray-500
                sm:text-base
              "
            >
              Special Offers
            </p>

            <h2
              className="
                text-2xl
                font-semibold
                leading-tight
                text-gray-900
                sm:text-3xl
                lg:text-4xl
              "
            >
              Discount Products
            </h2>
          </div>

          {/* =========================
              LOADING
          ========================= */}
          {loading && (
            <div
              className="
                grid
                grid-cols-1
                gap-5
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4
              "
            >
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="
                    h-[356px]
                    w-full
                    animate-pulse
                    rounded-xl
                    bg-gray-100
                  "
                />
              ))}
            </div>
          )}

          {/* =========================
              ERROR
          ========================= */}
          {!loading && error && (
            <div
              className="
                rounded-lg
                bg-red-50
                px-5
                py-6
                text-center
                text-red-600
              "
            >
              {error}
            </div>
          )}

          {/* =========================
              PRODUCTS
          ========================= */}
          {!loading && !error && (
            <>
              {/* 
                RESPONSIVE GRID

                Mobile:
                1 column

                Small:
                2 columns

                Tablet:
                3 columns

                Desktop:
                Banner + 4 products
              */}

              <div className="

    grid
    grid-cols-1
    min-[400px]:grid-cols-2
    md:grid-cols-5
    gap-3
    md:gap-4
    lg:gap-5
  "

              >
                {/* =========================
      DISCOUNT BANNER
  ========================= */}

                <div
                  className="
      flex
      min-w-0
      w-full
      min-h-[220px]
      rounded-xl
      bg-[#074E37]

      sm:min-h-[240px]
      md:min-h-[260px]
      lg:min-h-[300px]
      xl:min-h-[330px]
      2xl:min-h-[356px]
    "
                >
                  <div
                    className="
        flex
        h-full
        w-full
        min-w-0
        flex-col
        items-center
        justify-center
      
        px-2
        text-center

        sm:px-3
        md:px-2
        lg:px-3
        xl:px-4
      "
                  >
                    {/* SPECIAL OFFER */}

                    <span
                      className="
          mb-2
          text-[10px]
          font-medium
          text-[#86BC42]

          sm:text-[11px]

          md:mb-1
          md:text-[8px]

          lg:mb-2
          lg:text-[10px]

          xl:text-xs

          2xl:mb-3
          2xl:text-sm
        "
                    >
                      Special Offer
                    </span>

                    {/* TITLE */}

                    <h3
                      className="
          text-base
          font-semibold
          leading-tight
          text-[#86BC42]

          sm:text-lg

          md:text-xs

          lg:text-base

          xl:text-xl

          2xl:text-2xl
        "
                    >
                      Get Up To
                      <br />
                      50% Off
                    </h3>

                    {/* DESCRIPTION */}

                    <p
                      className="
          mt-2
          text-[8px]
          text-[#86BC42]

          sm:text-[9px]

          md:mt-1
          md:text-[7px]

          lg:mt-2
          lg:text-[9px]

          xl:text-xs

          2xl:mt-3
          2xl:text-sm
        "
                    >
                      Limited time discount
                    </p>
                  </div>
                </div>

                {/* =========================
      PRODUCTS
  ========================= */}

                {products.slice(0, 4).map((product) => (
                  <div
                    key={product.id}
                    className="
        min-w-0
        w-full
      "
                  >
                    <ProductCard
                      product={product}
                      onAddToCart={handleAddToCart}
                    />
                  </div>
                ))}
              </div>
              


              {/* =========================
                  NAVIGATION BUTTONS
              ========================= */}

              
              {/* =========================
    NAVIGATION BUTTONS
========================= */}

              <div className="mt-6 flex w-full items-center justify-center gap-3 sm:gap-4">

                {/* PREVIOUS */}
                <button
                  type="button"
                  onClick={handlePrevious}
                  disabled={isFirstPage}
                  aria-label="Previous products"
                  className={`
      flex
      h-10
      w-10
      shrink-0
      items-center
      justify-center
      rounded-full
      border
      border-gray-200
      bg-white
      text-lg
      shadow-sm
      transition
      duration-200

      ${isFirstPage
                      ? "cursor-not-allowed opacity-40"
                      : "cursor-pointer hover:bg-[#86BC42] hover:text-white"
                    }
    `}
                >
                  ←
                </button>

                {/* NEXT */}
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={isLastPage}
                  aria-label="Next products"
                  className={`
      flex
      h-10
      w-10
      shrink-0
      items-center
      justify-center
      rounded-full
      border
      border-gray-200
      bg-white
      text-lg
      shadow-sm
      transition
      duration-200

      ${isLastPage
                      ? "cursor-not-allowed opacity-40"
                      : "cursor-pointer hover:bg-[#86BC42] hover:text-white"
                    }
    `}
                >
                  →
                </button>

              </div>
              

  </>
  )}
  </div>
  </Container>
  </section>
  );
};

export default Discount;

