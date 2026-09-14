import React from "react";
import { Link } from "react-router-dom";
import Container from "../ui/Container";

const Footer = () => {
  return (
    <footer className="font-jost">

      {/* Main Footer */}
      <div className="bg-[#074E37] text-white">
        <Container>
          <div className="mx-auto w-full  px-5 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:px-10">

            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:gap-8">

              {/* Brand Information */}
              <div className="sm:col-span-2 lg:col-span-1">
                <Link
                  to="/"
                  className="inline-block text-2xl font-bold tracking-wide text-white sm:text-3xl"
                >
                  Fresh<span className="text-[#86BC42]">Market</span>
                </Link>

                <p className="mt-5 max-w-[320px] text-sm leading-6 text-white/70 sm:text-[15px]">
                  Discover quality products, modern styles and everyday
                  essentials at Fresh Market.
                </p>

                {/* Social Links */}
                <div className="mt-6 flex items-center gap-3">
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-sm font-semibold text-white transition-colors hover:border-[#86BC42] hover:bg-[#86BC42]"
                  >
                    f
                  </a>

                  <a
                    href="#"
                    aria-label="Instagram"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-sm font-semibold text-white transition-colors hover:border-[#86BC42] hover:bg-[#86BC42]"
                  >
                    ◎
                  </a>

                  <a
                    href="#"
                    aria-label="Pinterest"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-sm font-semibold text-white transition-colors hover:border-[#86BC42] hover:bg-[#86BC42]"
                  >
                    p
                  </a>

                  <a
                    href="#"
                    aria-label="WhatsApp"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-sm font-semibold text-white transition-colors hover:border-[#86BC42] hover:bg-[#86BC42]"
                  >
                    w
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="mb-5 text-base font-semibold text-white sm:text-lg">
                  Quick Links
                </h3>

                <ul className="space-y-3 text-sm text-white/70 sm:text-[15px]">
                  <li>
                    <Link
                      to="/"
                      className="transition-colors hover:text-[#86BC42]"
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/shop"
                      className="transition-colors hover:text-[#86BC42]"
                    >
                      Shop
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/journal"
                      className="transition-colors hover:text-[#86BC42]"
                    >
                      Journal
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/about"
                      className="transition-colors hover:text-[#86BC42]"
                    >
                      About Us
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/contact"
                      className="transition-colors hover:text-[#86BC42]"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Customer Service */}
              <div>
                <h3 className="mb-5 text-base font-semibold text-white sm:text-lg">
                  Customer Service
                </h3>

                <ul className="space-y-3 text-sm text-white/70 sm:text-[15px]">
                  <li>
                    <Link
                      to="/account"
                      className="transition-colors hover:text-[#86BC42]"
                    >
                      My Account
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/cart"
                      className="transition-colors hover:text-[#86BC42]"
                    >
                      Shopping Cart
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/wishlist"
                      className="transition-colors hover:text-[#86BC42]"
                    >
                      Wishlist
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/shipping-policy"
                      className="transition-colors hover:text-[#86BC42]"
                    >
                      Shipping Policy
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/return-policy"
                      className="transition-colors hover:text-[#86BC42]"
                    >
                      Return Policy
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="mb-5 text-base font-semibold text-white sm:text-lg">
                  Contact Us
                </h3>

                <ul className="space-y-4 text-sm text-white/70 sm:text-[15px]">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-[#86BC42]">⌖</span>

                    <span>
                      Dhaka, Bangladesh
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-[#86BC42]">✉</span>

                    <a
                      href="mailto:support@freshmarket.com"
                      className="break-all transition-colors hover:text-[#86BC42]"
                    >
                      support@freshmarket.com
                    </a>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-[#86BC42]">☎</span>

                    <a
                      href="tel:+8801712345678"
                      className="transition-colors hover:text-[#86BC42]"
                    >
                      +880 1712-345678
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#043425]">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-4 px-5 py-5 text-center sm:px-6 md:flex-row md:items-center md:justify-between md:px-8 md:text-left lg:px-10">
          <p className="text-xs leading-5 text-white/60 sm:text-sm">
            © 2026 Fresh Market. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-white/60 sm:text-sm md:justify-end">
            <Link
              to="/privacy-policy"
              className="transition-colors hover:text-[#86BC42]"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="transition-colors hover:text-[#86BC42]"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
