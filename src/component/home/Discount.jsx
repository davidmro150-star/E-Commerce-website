import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Container from "../ui/Container";

const Discount = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const productsPerPage = 4;

  // =========================
  // Fetch Discount Products
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
        setProducts(discountProducts.slice(0, productsPerPage));
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
  // Add To Cart
  // =========================
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

  // =========================
  // Next Products
  // =========================
  const handleNext = () => {
    const nextPage = currentPage + 1;

    const startIndex = nextPage * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    if (startIndex >= allProducts.length) {
      return;
    }

    const nextProducts = allProducts.slice(startIndex, endIndex);

    setProducts(nextProducts);
    setCurrentPage(nextPage);
  };

  // =========================
  // Previous Products
  // =========================
  const handlePrevious = () => {
    if (currentPage === 0) {
      return;
    }

    const previousPage = currentPage - 1;

    const startIndex = previousPage * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    const previousProducts = allProducts.slice(startIndex, endIndex);

    setProducts(previousProducts);
    setCurrentPage(previousPage);
  };

  // =========================
  // Pagination
  // =========================
  const totalPages = Math.ceil(
    allProducts.length / productsPerPage
  );

  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage >= totalPages - 1;

  return (
    <section className="bg-white">
    <Container>
    <div
          className="px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14 lg:px-0lg:py-16">
          

          {/*Section Heading */}

    <div className="mb-8">
          <p
          className=" mb-2 text-sm  font-medium text-gray-500 sm:text-base"
           >
          Special Offers
          </p>

          <h2 className="text-2xl font-semibold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
              
            Discount Products

          </h2>
          </div>

          {/*  Loading */}

          {loading && (
            
    <div className="  grid  grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
    "
    >
   {Array.from({ length: 4 }).map((_, index) => (
       
  <div
     key={index}
     className=" h-[356px] w-full animate-pulse rounded-xl bg-gray-100
     "
      />
      ))}
      </div>
      )}

          {/*  Error */}

          {!loading && error && (

   <div className=" rounded-lg  bg-red-50  px-5 py-6 text-center text-red-600 ">
           {error}
            </div>
          )}

          {/* Products */}

          {!loading && !error && (
            <>
              {/*
                  DESKTOP VERSION
                  Exactly 5 columns
                  Banner + 4 Products
                  Each = 255px × 356px
              */}

     <div className="relative hidden lg:block">
                <div className="grid grid-cols-[255px_255px_255px_255px_255px] gap-5 " >
                  

                  {/* Banner */}

    <div
          className=" h-[356px] w-[255px] rounded-xl bg-[#86BC42]">
    <div
          className=" flex h-full  w-full flex-col items-center justify-cente  bg-[#074E37] px-6 text-center "
          >
          <span
           className=" mb-3 text-sm font-medium text-[#86BC42]" >
                        Special Offer

          </span>

          <h3
               className="text-2xl font-semibold leading-tight text-[#86BC42] ">
                
                        Get Up To

        <br />
                  50% Off
        </h3>

        <p
        className=" mt-3 text-sm text-[#86BC42] " >
                Limited time discount
        </p>
        </div>
        </div>

                  {/* Product 1*/}

           {products[0] && (
                    
          <div className="h-[356px] w-[255px]">
           <ProductCard
                      product={products[0]}
                      onAddToCart={handleAddToCart}
                      />
                      </div>
                      )}

                  {/* Product 2 */}

           {products[1] && (
          <div className="h-[356px] w-[255px]">
              <ProductCard
                  product={products[1]}
                  onAddToCart={handleAddToCart}
                />
                </div>
               )}

                  {/*  Product 3 */}

         {products[2] && (
         <div className="h-[356px] w-[255px]">
              <ProductCard
                product={products[2]}
                onAddToCart={handleAddToCart}
              />
              </div>
              )}

                  {/* Product 4 */}

        {products[3] && (
        <div className="h-[356px] w-[255px]">
            <ProductCard
              product={products[3]}
              onAddToCart={handleAddToCart}
            />
            </div>
           )}
           </div>

                {/*
                    PREVIOUS BUTTON

                    Position:
                    After Banner + Product 1

                    255 + 20 + 255 = 530px
                */}

     <button
        type="button"
        onClick={handlePrevious}
        disabled={isFirstPage}
        className={`absolute left-[530px] top-1/2 z-20 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2  items-center  justify-center rounded-full  border bg-white text-lg shadow-md transition
    

       ${isFirstPage
         ? "cursor-not-allowed opacity-40"
        : "cursor-pointer  hover:bg-[#86BC42] hover:text-white"
        }
        `}
        >
        ←
        </button>

                {/*
                    NEXT BUTTON

                    Position:
                    After Product 4
                */}

     <button
        type="button"
        onClick={handleNext}
        disabled={isLastPage}
        className={`absolute  right-[-20px]  top-1/2 z-20  flex  h-10  w-10 -translate-y-1/2 items-center justify-center  rounded-full  border bg-white  text-lg  shadow-md transition

       ${isLastPage
        ? "cursor-not-allowed opacity-40"
        : "cursor-pointer   hover:bg-[#86BC42] hover:text-white"
        }
        `}
        >
                  →
        </button>
        </div>

              {/*TABLET VERSION*/}

   <div className="hidden md:block lg:hidden">
         <div
         className="grid grid-cols-2 gap-5 " >
                  {products.map((product) => (
                  <div
                  key={product.id}
                  className="
                    min-w-0
                  "
                >
               <ProductCard
                        product={product}
                        onAddToCart={handleAddToCart}
                       />
                       </div>
                  ))}
              </div>

                {/* Tablet Buttons */}

   <div
      className=" mt-6 flex items-center justify-center gap-4" >
          <button
              type="button"
              onClick={handlePrevious}
              disabled={isFirstPage}
              className={` flex h-10 w-10 items-center justify-center  rounded-full border bg-white shadow-sm transition

              ${isFirstPage
                ? "cursor-not-allowed opacity-40"
                : "hover:bg-gray-100"
              }
             `}
             >
            ←
           </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={isLastPage}
              className={` flex h-10 w-10 items-center  justify-center  rounded-full  border  bg-white shadow-sm transition

                ${isLastPage
                  ? "cursor-not-allowed opacity-40"
                  : "hover:bg-gray-100"
                }
                `}
                >
                    →
                </button>
                </div>
                </div>

              {/* MOBILE VERSION */}

    <div className="block md:hidden">
                <div className="grid grid-cols-1 gap-5">
                {products.map((product) => (
                <div key={product.id} className="w-full">
                <ProductCard
                product={product}
                onAddToCart={handleAddToCart}
                 />
                </div>
                ))}
                </div>

                {/* Mobile Buttons */}

     <div className="mt-6 flex items-center justify-center  gap-4 " >
         <button
          type="button"
          onClick={handlePrevious}
          disabled={isFirstPage}
          className={`flex h-10  w-10 items-center justify-center  rounded-full border bg-white shadow-sm transition

          ${isFirstPage
            ? "cursor-not-allowed opacity-40"
            : "hover:bg-gray-100"
           }
          `}
          >
          ←
          </button>

         <button
              type="button"
              onClick={handleNext}
              disabled={isLastPage}
              className={` flex h-10 w-10 items-center justify-center rounded-full border bg-white shadow-sm transition

              ${isLastPage
                ? "cursor-not-allowed opacity-40"
                : "hover:bg-gray-100"
                }
              `}
             >
            →
          </button>
                  
          </div>
          </div>
          </>
          )}
          
    </div>
    </Container>
    </section>
  );
};

export default Discount;