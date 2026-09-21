import React, { useState } from "react";

import { ChevronDown } from "lucide-react";
import Container from "../ui/Container";

const faqData = [
  {
    question: "How can I place an order?",
    answer:
      "Browse the products available in our shop, open the product you want, add it to your cart, and continue to checkout.",
  },
  {
    question: "How can I track my order?",
    answer:
      "After your order has been processed, you can use your order information to check the delivery status.",
  },
  {
    question: "What payment methods are available?",
    answer:
      "Available payment methods depend on the checkout configuration of the store and may include online payment and cash on delivery.",
  },
  {
    question: "Can I return a product?",
    answer:
      "Eligible products can be returned according to the applicable return conditions. Please review the Shipping & Returns page for more information.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery time depends on your location, product availability, and delivery service.",
  },
  {
    question: "Can I cancel my order?",
    answer:
      "Order cancellation may be possible before the order enters the shipping process. Contact customer support as soon as possible.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <Container>

        {/* Hero */}
        <div className="rounded-3xl bg-[#252A27] px-5 py-12 text-center sm:px-8 sm:py-16 lg:py-20">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#86BC42]">
            FAQ
          </p>

          <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#D1D5D2] sm:text-base">
            Find answers to common questions about shopping, orders,
            payments, delivery, and returns.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="mx-auto mt-10 max-w-4xl space-y-4">

          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={item.question}
                className="rounded-2xl border border-[#E2E6E2] bg-[#F7F6F2]"
              >
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                >
                  <span className="text-sm font-semibold text-[#252A27] sm:text-base">
                    {item.question}
                  </span>

                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-[#074E37] transition-transform ${isOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-[#E2E6E2] px-5 py-5 sm:px-6">
                    <p className="text-sm leading-7 text-[#626A65]">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}

        </div>

      </Container>
    </section>
  );
};

export default FAQ;