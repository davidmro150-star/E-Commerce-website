
import React, { useState } from "react";
import { Link } from "react-router";

import { navitems } from "../../api/navbardata";
import filter from "../../../public/images/filter.png";

import Container from "../ui/Container";
import Image from "../common/Image";

const Header = () => {
  const [search, setSearch] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);

  const cartitems = 3;

  return (
    <header className="w-full bg-deepgreen">
    <nav>
    <Container>
          <div className="py-3 sm:py-4 md:py-5">

            {/* TOP ROW */}
            <div className="flex items-center justify-between gap-2">

              {/* LOGO */}
              <div className="shrink-0">
                <Link to="/">
                  <Image
                    src="images/logo.png"
                    alt="logo"
                    className="w-20 sm:w-24 md:w-32 lg:w-36 h-auto"
                  />
                </Link>
              </div>

              {/* DESKTOP SEARCH */}
              <div className="hidden md:flex flex-1 min-w-0 max-w-2xl mx-3 lg:mx-6">
                <div className="flex items-center w-full h-11 lg:h-12 bg-white">

                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search products"
                    className="flex-1 min-w-0 h-full px-3 lg:px-4 bg-transparent outline-none font-jost text-color-third text-sm lg:text-base"
                  />

                  <div className="flex items-center gap-2 px-3 lg:px-4 border-l border-gray-300 h-7 shrink-0 font-jost text-primary-black text-sm whitespace-nowrap">
                    <span>All Category</span>

                    <button type="button">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.64308 7.60679L0.147619 3.10983C-0.0492059 2.91251-0.0492058 2.59281 0.147619 2.39499C0.344444 2.19767 0.66414 2.19767 0.860965 2.39499L4.99973 6.53525L9.1385 2.39549C9.33532 2.19817 9.65502 2.19817 9.85234 2.39549C10.0492 2.59281 10.0492 2.91301 9.85234 3.11033L5.35688 7.60728C5.16209 7.80162 4.83737 7.80162 4.64308 7.60679Z"
                          fill="#222222"
                        />
                      </svg>
                    </button>
                  </div>

                  <button
                    type="button"
                    className="flex items-center justify-center px-3 lg:px-4 h-full shrink-0"
                  >
                    {/* search svg */}
                  </button>

                </div>
              </div>

              {/* RIGHT ICONS */}
              <div className="flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-7 shrink-0">

                {/* USER - desktop */}
                <button
                  type="button"
                  className="hidden md:block"
                >
                  {/* user svg */}
                </button>

                {/* WISHLIST - desktop */}
                <button
                  type="button"
                  className="hidden md:block"
                >
                  {/* wishlist svg */}
                </button>

                {/* CART - always visible */}
                <button
                  type="button"
                  className="relative"
                >
                  {/* cart svg */}

                  <span className="absolute -top-2 -right-2 flex items-center justify-center min-w-4 h-4 px-1 rounded-full bg-lightgreen text-primary-white font-jost text-[10px] font-medium">
                    {cartitems}
                  </span>
                </button>

                {/* FILTER - desktop/tablet */}
                <button
                  type="button"
                  className="hidden md:block"
                >
                  <Image
                    src={filter}
                    alt="filter"
                    className="w-5 h-5 object-contain"
                  />
                </button>

                {/* MOBILE MENU BUTTON */}
                <button
                  type="button"
                  onClick={() => setMobileMenu(!mobileMenu)}
                  className="md:hidden flex items-center justify-center w-8 h-8"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                  >
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>

              </div>
            </div>


            {/* MOBILE SEARCH */}
            <div className="md:hidden mt-3 w-full">
              <div className="flex items-center w-full h-10 sm:h-11 bg-white">

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search products"
                  className="flex-1 min-w-0 h-full px-3 bg-transparent outline-none font-jost text-color-third text-sm"
                />

                <button
                  type="button"
                  className="flex items-center justify-center w-11 h-full shrink-0"
                >
                  {/* search svg */}
                </button>

              </div>
            </div>

          </div>

  </Container>
  </nav>
  </header>
  );
};

export default Header;

