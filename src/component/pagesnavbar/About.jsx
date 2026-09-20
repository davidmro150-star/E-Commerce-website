import React from "react";
import { Link } from "react-router-dom";

import { ArrowRight, Check } from "lucide-react";
import Container from "../ui/Container";

const AboutUs = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <Container>

        {/* Hero */}
        <div className="rounded-3xl bg-[#252A27] px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#86BC42]">
            About Us
          </p>

          <h1 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            We believe shopping should be
            <span className="text-[#86BC42]"> simple and enjoyable.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#D1D5D2] sm:text-base">
            Our goal is to create a modern shopping experience where
            customers can discover quality products, make confident
            decisions, and enjoy a smooth journey from browsing to delivery.
          </p>
        </div>

        {/* Story */}
        <div className="grid grid-cols-1 gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-16">

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#86BC42]">
              Our Story
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#252A27] sm:text-4xl">
              Built around customers.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#626A65] sm:text-base">
              We created this platform with a simple idea: online shopping
              should not feel complicated. Customers should be able to
              discover products easily, understand what they are buying,
              and receive helpful support whenever they need it.
            </p>

            <p className="mt-4 text-sm leading-7 text-[#626A65] sm:text-base">
              From product discovery to order support, every part of the
              experience is designed with convenience, clarity, and
              customer satisfaction in mind.
            </p>

            <Link
              to="/shop"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#074E37] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#86BC42] hover:text-[#252A27]"
            >
              Explore Products
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="rounded-3xl bg-[#E8EFE8] p-6 sm:p-8">
            <p className="text-sm font-medium text-[#074E37]">
              What matters to us
            </p>

            <div className="mt-6 space-y-5">
              {[
                "Simple and user-friendly shopping",
                "Clear product information",
                "Reliable customer support",
                "A modern online experience",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#86BC42] text-[#252A27]">
                    <Check size={14} />
                  </div>

                  <p className="text-sm leading-6 text-[#454D48]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Values */}
        <div className="rounded-3xl bg-[#F7F6F2] p-6 sm:p-8 lg:p-12">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#86BC42]">
            Our Values
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#252A27]">
            Designed for better experiences.
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">

            {[
              {
                title: "Quality",
                text: "We focus on creating a trustworthy product discovery experience.",
              },
              {
                title: "Simplicity",
                text: "We keep the shopping journey clean, clear, and easy to understand.",
              },
              {
                title: "Support",
                text: "We believe customers should always have access to useful assistance.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-6"
              >
                <h3 className="text-lg font-semibold text-[#252A27]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#626A65]">
                  {item.text}
                </p>
              </div>
            ))}

          </div>
        </div>

      </Container>
    </section>
  );
};

export default AboutUs;