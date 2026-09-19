import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../ui/Container";

const Lookbook = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products?limit=30"
        );

        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // =========================
  // Product Groups
  // =========================

  const fashionProducts = products
    .filter(
      (product) =>
        product.category === "beauty" ||
        product.category === "fragrances"
    )
    .slice(0, 3);

  const lifestyleProducts = products
    .filter((product) => product.category === "furniture")
    .slice(0, 3);

  const techProducts = products
    .filter(
      (product) =>
        product.category === "laptops" ||
        product.category === "smartphones"
    )
    .slice(0, 3);

  const featuredProducts = products.slice(0, 4);

  return (
    <section className="bg-white">
      <Container>
        {/* =========================
            HERO
        ========================= */}
        <div className="grid min-h-[500px] items-center gap-10 bg-[#F7F6F2] px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:px-12 lg:py-20">
          {/* Content */}
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[4px] text-[#86BC42]">
              Style Journal
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight text-[#074E37] sm:text-5xl lg:text-6xl">
              Discover Our Lookbook
            </h1>

            <p className="mt-6 max-w-lg text-sm leading-7 text-gray-600 sm:text-base">
              Explore carefully selected products and discover new ways to
              bring style, comfort, and personality into your everyday life.
            </p>

            <Link
              to="/shop"
              className="mt-8 inline-flex bg-[#074E37] px-7 py-3 text-sm font-semibold uppercase tracking-[1px] text-white transition-colors hover:bg-[#86BC42]"
            >
              Explore Collection
            </Link>
          </div>

          {/* Hero Image */}
          <div>
            {!loading && products[0] && (
              <div className="bg-white p-4 sm:p-6">
                <img
                  src={products[0].images?.[0] || products[0].thumbnail}
                  alt={products[0].title}
                  className="h-[350px] w-full object-contain sm:h-[430px] lg:h-[500px]"
                />
              </div>
            )}
          </div>
        </div>

        {/* =========================
            INTRO
        ========================= */}
        <div className=" bg-[#074E37] py-14 text-center sm:py-20">
          <p className="text-10 font-bold uppercase tracking-[3px] text-[#86BC42]">
            Created For You
          </p>

          <h2 className="mx-auto mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Explore products through a different perspective
          </h2>

          <p className="mx-auto mt-5 text-sm leading-7 text-gray-50 sm:text-base">
            From everyday essentials to modern lifestyle products, discover
            products grouped into inspiring looks and collections.
          </p>
        </div>

        {/* =========================
            LOOK 01
        ========================= */}
        {!loading && fashionProducts.length > 0 && (
          <div className="grid items-center gap-8 py-10 lg:grid-cols-2 lg:gap-12 lg:py-16">
            {/* Image */}
            <div className="bg-[#EDE7DC] p-5 sm:p-8">
              <img
                src={
                  fashionProducts[0]?.images?.[0] ||
                  fashionProducts[0]?.thumbnail
                }
                alt={fashionProducts[0]?.title}
                className="h-[420px] w-full object-contain sm:h-[520px]"
              />
            </div>

            {/* Content */}
            <div className="px-1 sm:px-4 lg:px-6">
              <p className="text-xs font-semibold uppercase tracking-[3px] text-[#86BC42]">
                Featured Look
              </p>

              <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#074E37] sm:text-4xl lg:text-5xl">
                Everyday Essentials
              </h2>

              <p className="mt-3 text-lg font-medium text-gray-700">
                Simple pieces. Effortless style.
              </p>

              <p className="mt-5 text-sm leading-7 text-gray-500 sm:text-base">
                Discover products selected for everyday use. These versatile
                essentials are designed to fit naturally into your daily
                lifestyle.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 min-[420px]:grid-cols-3">
                {fashionProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/shop/${product.id}`}
                    className="group"
                  >
                    <div className="aspect-square bg-[#F7F6F2] p-3">
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    <h3 className="mt-3 line-clamp-1 text-sm font-medium text-gray-800">
                      {product.title}
                    </h3>

                    <p className="mt-1 text-sm font-semibold text-[#074E37]">
                      ${product.price}
                    </p>
                  </Link>
                ))}
              </div>

              <Link
                to="/shop"
                className="mt-8 inline-flex border-b border-[#074E37] pb-1 text-sm font-semibold uppercase tracking-[1px] text-[#074E37] transition-colors hover:text-[#86BC42]"
              >
                Shop The Look
              </Link>
            </div>
          </div>
        )}

        {/* =========================
            LOOK 02
        ========================= */}
        {!loading && lifestyleProducts.length > 0 && (
          <div className="grid items-center gap-8 bg-[#E8EFE8] px-5 py-10 sm:px-8 lg:grid-cols-2 lg:gap-12 lg:px-12 lg:py-16">
            {/* Content */}
            <div className="order-2 px-1 sm:px-4 lg:order-1">
              <p className="text-xs font-semibold uppercase tracking-[3px] text-[#86BC42]">
                Featured Look
              </p>

              <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#074E37] sm:text-4xl lg:text-5xl">
                Modern Living
              </h2>

              <p className="mt-3 text-lg font-medium text-gray-700">
                Comfort meets contemporary design.
              </p>

              <p className="mt-5 text-sm leading-7 text-gray-500 sm:text-base">
                Create a more comfortable and modern environment with products
                selected to complement your everyday living space.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 min-[420px]:grid-cols-3">
                {lifestyleProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/shop/${product.id}`}
                    className="group"
                  >
                    <div className="aspect-square bg-white p-3">
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    <h3 className="mt-3 line-clamp-1 text-sm font-medium text-gray-800">
                      {product.title}
                    </h3>

                    <p className="mt-1 text-sm font-semibold text-[#074E37]">
                      ${product.price}
                    </p>
                  </Link>
                ))}
              </div>

              <Link
                to="/shop"
                className="mt-8 inline-flex border-b border-[#074E37] pb-1 text-sm font-semibold uppercase tracking-[1px] text-[#074E37] transition-colors hover:text-[#86BC42]"
              >
                Shop The Look
              </Link>
            </div>

            {/* Image */}
            <div className="order-1 bg-white p-5 sm:p-8 lg:order-2">
              <img
                src={
                  lifestyleProducts[0]?.images?.[0] ||
                  lifestyleProducts[0]?.thumbnail
                }
                alt={lifestyleProducts[0]?.title}
                className="h-[420px] w-full object-contain sm:h-[520px]"
              />
            </div>
          </div>
        )}

        {/* =========================
            LOOK 03
        ========================= */}
        {!loading && techProducts.length > 0 && (
          <div className="grid items-center gap-8 py-10 lg:grid-cols-2 lg:gap-12 lg:py-16">
            {/* Image */}
            <div className="bg-[#F7F6F2] p-5 sm:p-8">
              <img
                src={techProducts[0]?.images?.[0] || techProducts[0]?.thumbnail}
                alt={techProducts[0]?.title}
                className="h-[420px] w-full object-contain sm:h-[520px]"
              />
            </div>

            {/* Content */}
            <div className="px-1 sm:px-4 lg:px-6">
              <p className="text-xs font-semibold uppercase tracking-[3px] text-[#86BC42]">
                Featured Look
              </p>

              <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#074E37] sm:text-4xl lg:text-5xl">
                Smart Lifestyle
              </h2>

              <p className="mt-3 text-lg font-medium text-gray-700">
                Technology designed for everyday life.
              </p>

              <p className="mt-5 text-sm leading-7 text-gray-500 sm:text-base">
                Explore modern technology products that combine functionality,
                performance, and a clean contemporary look.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 min-[420px]:grid-cols-3">
                {techProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/shop/${product.id}`}
                    className="group"
                  >
                    <div className="aspect-square bg-[#F7F6F2] p-3">
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    <h3 className="mt-3 line-clamp-1 text-sm font-medium text-gray-800">
                      {product.title}
                    </h3>

                    <p className="mt-1 text-sm font-semibold text-[#074E37]">
                      ${product.price}
                    </p>
                  </Link>
                ))}
              </div>

              <Link
                to="/shop"
                className="mt-8 inline-flex border-b border-[#074E37] pb-1 text-sm font-semibold uppercase tracking-[1px] text-[#074E37] transition-colors hover:text-[#86BC42]"
              >
                Shop The Look
              </Link>
            </div>
          </div>
        )}

        {/* =========================
            FEATURED PRODUCTS
        ========================= */}
        <div className="border-t border-gray-100 py-14 sm:py-20">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[3px] text-[#86BC42]">
              More Inspiration
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#074E37] sm:text-4xl">
              Featured Products
            </h2>
          </div>

          {!loading && (
            <div className="mt-10 grid grid-cols-1 gap-6 min-[420px]:grid-cols-2 sm:gap-8 lg:grid-cols-4">
              {featuredProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/shop/${product.id}`}
                  className="group"
                >
                  <div className="bg-[#F7F6F2] p-5">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="h-[260px] w-full object-contain transition-transform duration-300 group-hover:scale-105 sm:h-[300px]"
                    />
                  </div>

                  <div className="mt-4">
                    <p className="text-xs uppercase tracking-[1px] text-gray-400">
                      {product.category}
                    </p>

                    <h3 className="mt-1 line-clamp-1 text-base font-medium text-gray-800">
                      {product.title}
                    </h3>

                    <p className="mt-2 font-semibold text-[#074E37]">
                      ${product.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* =========================
            CTA
        ========================= */}
        <div className="bg-[#252A27] px-5 py-16 text-center sm:px-8 sm:py-20 mb-10">
          <p className="text-10 font-bold uppercase tracking-[3px] text-[#FFFFFF]">
            Find Your Style
          </p>

          <h2 className="mx-auto mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Ready to explore the complete collection?
          </h2>

          <p className="mx-auto mt-5  text-sm leading-7 text-gray-200 sm:text-base">
            Browse all available products and discover something that fits
            your style and everyday needs.
          </p>

          <Link
            to="/shop"
            className="mt-8 inline-flex bg-white px-8 py-3 text-sm font-bold uppercase tracking-[1px] text-[#86BC42] transition-colors hover:bg-white hover:text-black"
          >
            Shop Now
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Lookbook;