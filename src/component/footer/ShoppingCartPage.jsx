import React from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  ArrowRight,
  Trash2,
  Minus,
  Plus,
} from "lucide-react";
import Container from "../ui/Container";

const ShoppingCartPage = () => {
  const cartItems = [];

  return (
    <section className="bg-[#F7F6F2] py-10 sm:py-14 lg:py-20">
      <Container>
        {/* Header */}
        <div className="text-center">
          <p className="font-jost text-sm font-medium uppercase tracking-[0.2em] text-[#86BC42]">
            Shopping Cart
          </p>

          <h1 className="mt-3 font-jost text-3xl font-semibold text-[#252A27] sm:text-4xl lg:text-5xl">
            Your Shopping Cart
          </h1>

          <p className="mx-auto mt-4 max-w-2xl font-jost text-sm leading-6 text-[#252A27]/60 sm:text-base">
            Review your selected products before proceeding to checkout.
          </p>
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart */
          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-[#E5E5DF] bg-white px-5 py-12 text-center sm:mt-14 sm:px-8 sm:py-16">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E8EFE8] text-[#074E37]">
              <ShoppingCart size={28} />
            </div>

            <h2 className="mt-6 font-jost text-2xl font-semibold text-[#252A27]">
              Your cart is empty
            </h2>

            <p className="mx-auto mt-3 max-w-md font-jost text-sm leading-6 text-[#252A27]/60 sm:text-base">
              You haven't added any products to your shopping cart yet.
              Explore our collection and find something you love.
            </p>

            <Link
              to="/shop"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#074E37] px-7 py-3.5 font-jost text-sm font-semibold text-white transition hover:bg-[#86BC42] hover:text-[#252A27]"
            >
              Continue Shopping
              <ArrowRight size={17} />
            </Link>
          </div>
        ) : (
          /* Cart Items */
          <div className="mt-10 grid grid-cols-1 gap-6 lg:mt-14 lg:grid-cols-[1fr_360px]">
            <div className="rounded-2xl bg-white p-4 sm:p-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-5 border-b border-gray-100 py-5 first:pt-0 last:border-b-0 last:pb-0 sm:flex-row sm:items-center"
                >
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="h-24 w-24 rounded-xl object-cover"
                  />

                  <div className="flex-1">
                    <h3 className="font-jost font-semibold text-[#252A27]">
                      {item.title}
                    </h3>

                    <p className="mt-1 font-jost text-sm text-[#074E37]">
                      ${item.price}
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-4 sm:justify-normal">
                    <div className="flex items-center rounded-full border border-gray-200">
                      <button className="p-2">
                        <Minus size={15} />
                      </button>

                      <span className="px-3 font-jost text-sm">1</span>

                      <button className="p-2">
                        <Plus size={15} />
                      </button>
                    </div>

                    <button className="text-red-500 transition hover:text-red-700">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="h-fit rounded-2xl bg-white p-5 sm:p-7">
              <h2 className="font-jost text-xl font-semibold text-[#252A27]">
                Order Summary
              </h2>

              <div className="mt-6 space-y-4 border-b border-gray-100 pb-5">
                <div className="flex justify-between font-jost text-sm text-[#252A27]/60">
                  <span>Subtotal</span>
                  <span>$0.00</span>
                </div>

                <div className="flex justify-between font-jost text-sm text-[#252A27]/60">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
              </div>

              <div className="flex justify-between py-5">
                <span className="font-jost font-semibold text-[#252A27]">
                  Total
                </span>

                <span className="font-jost font-semibold text-[#074E37]">
                  $0.00
                </span>
              </div>

              <button className="w-full rounded-full bg-[#074E37] px-6 py-3.5 font-jost text-sm font-semibold text-white transition hover:bg-[#86BC42] hover:text-[#252A27]">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default ShoppingCartPage;