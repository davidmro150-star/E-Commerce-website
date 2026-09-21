import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Heart, ShoppingBag, Trash2 } from "lucide-react";
import Container from "../ui/Container";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const savedWishlist = JSON.parse(
      localStorage.getItem("wishlist") || "[]"
    );

    setWishlist(savedWishlist);
  }, []);

  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter(
      (item) => item.id !== id
    );

    setWishlist(updatedWishlist);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );
  };

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <Container>

        {/* Hero */}
        <div className="rounded-3xl bg-[#252A27] px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#86BC42]">
            Wishlist
          </p>

          <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            Products you love.
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#D1D5D2] sm:text-base">
            Save your favorite products and easily find them again whenever
            you are ready to shop.
          </p>
        </div>

        {/* Wishlist */}
        {wishlist.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 lg:grid-cols-4">

            {wishlist.map((product) => (
              <div
                key={product.id}
                className="rounded-2xl border border-[#E5E8E5] bg-[#F7F6F2] p-4"
              >
                <div className="flex h-56 items-center justify-center rounded-xl bg-white p-4">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="pt-5">
                  <h2 className="line-clamp-1 text-base font-semibold text-[#252A27]">
                    {product.title}
                  </h2>

                  <p className="mt-2 text-lg font-semibold text-[#074E37]">
                    ${product.price}
                  </p>

                  <div className="mt-4 flex gap-2">

                    <Link
                      to={`/shop/${product.id}`}
                      className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#074E37] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#86BC42] hover:text-[#252A27]"
                    >
                      <ShoppingBag size={16} />
                      View
                    </Link>

                    <button
                      type="button"
                      onClick={() => removeFromWishlist(product.id)}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9DED9] bg-white text-[#252A27] hover:border-red-300 hover:text-red-500"
                    >
                      <Trash2 size={17} />
                    </button>

                  </div>
                </div>
              </div>
            ))}

          </div>
        ) : (
          <div className="mt-10 rounded-3xl bg-[#F7F6F2] px-6 py-16 text-center sm:py-20">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E8EFE8] text-[#074E37]">
              <Heart size={28} />
            </div>

            <h2 className="mt-6 text-2xl font-semibold text-[#252A27]">
              Your wishlist is empty.
            </h2>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#626A65]">
              Start exploring products and save your favorites here.
            </p>

            <Link
              to="/shop"
              className="mt-6 inline-flex rounded-full bg-[#074E37] px-6 py-3 text-sm font-medium text-white hover:bg-[#86BC42] hover:text-[#252A27]"
            >
              Start Shopping
            </Link>

          </div>
        )}

      </Container>
    </section>
  );
};

export default Wishlist;