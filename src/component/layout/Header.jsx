import React, { useState } from "react";

import { navitems } from "../../api/navbardata";

import filter from "../../../public/images/filter.png";
import { Link } from "react-router";
import Container from "../ui/Container";
import Image from "../common/Image";

const Header = () => {
  const [search, setSearch] = useState("");
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [category, setCategory] = useState("All Category");
  const [mobileMenu, setMobileMenu] = useState(false);

  const cartitems = 3;

  const categories = [
    "All Category",
    "Electronics",
    "Clothing",
    "Shoes",
    "Furniture",
  ];

  return (
    <header className="bg-deepgreen">
      <nav>
        <Container>
          {/* ================= TOP ROW ================= */}
          <div className="flex items-center justify-between gap-4 py-4 sm:py-5">
            {/* ================= LOGO ================= */}
            <div className="shrink-0">
              <Link to="/">
                <Image
                  className="w-24 sm:w-28 md:w-32 lg:w-36"
                  src="images/logo.png"
                  alt="logo"
                />
              </Link>
            </div>

            {/* ================= DESKTOP SEARCH ================= */}
            <div className="hidden  md:flex flex-1 min-w-0 max-w-2xl mx-2 lg:mx-6">
              <div className="flex items-center w-full h-11 lg:h-12 bg-white">
                {/* SEARCH INPUT */}
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search products"
                  className="flex-1 min-w-0 h-full px-3 lg:px-4 bg-transparent outline-none font-jost text-color-third text-sm lg:text-base"
                />

                {/* CATEGORY */}
                <div className="relative flex items-center gap-1 sm:gap-2 px-2 sm:px-3 border-l border-gray-300 h-7 shrink-0 whitespace-nowrap">
                  <button
                    type="button"
                    onClick={() => setCategoryOpen(!categoryOpen)}
                    className="flex items-center gap-3"
                  >
                    <span>{category}</span>

                    <svg
                      className={`transition-transform duration-200 ${categoryOpen ? "rotate-180" : ""
                        }`}
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.64308 7.60679L0.147619 3.10983C-0.0492059 2.91251 -0.0492058 2.59281 0.147619 2.39499C0.344444 2.19767 0.66414 2.19767 0.860965 2.39499L4.99973 6.53525L9.1385 2.39549C9.33532 2.19817 9.65502 2.19817 9.85234 2.39549C10.0492 2.59281 10.0492 2.91301 9.85234 3.11033L5.35688 7.60728C5.16209 7.80162 4.83737 7.80162 4.64308 7.60679Z"
                        fill="#222222"
                      />
                    </svg>
                  </button>

                  {/* CATEGORY DROPDOWN */}
                  {categoryOpen && (
                    <div className="absolute top-9 right-0 w-44 bg-white border border-gray-200 shadow-lg z-50">
                      {categories.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => {
                            setCategory(item);
                            setCategoryOpen(false);
                          }}
                          className="block w-full text-left px-4 py-2.5 font-jost text-sm text-primary-black hover:bg-gray-100"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* SEARCH BUTTON */}
                <button
                  type="button"
                  className="flex items-center justify-center px-3 lg:px-4 h-full shrink-0 hover:bg-gray-100 transition"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.82291 0C3.95809 0 0 3.95121 0 8.80758C0 13.6642 3.95809 17.6152 8.82291 17.6152C13.688 17.6152 17.6458 13.6642 17.6458 8.80758C17.6458 3.95121 13.688 0 8.82291 0ZM8.82291 15.9892C4.85613 15.9892 1.62885 12.7675 1.62885 8.80762C1.62885 4.84773 4.85613 1.62602 8.82291 1.62602C12.7897 1.62602 16.017 4.84769 16.017 8.80758C16.017 12.7675 12.7897 15.9892 8.82291 15.9892Z"
                      fill="black"
                    />

                    <path
                      d="M19.7962 18.6122L15.1268 13.9509C14.8086 13.6333 14.2934 13.6333 13.9752 13.9509C13.657 14.2683 13.657 14.7832 13.9752 15.1005L18.6446 19.7618C18.8036 19.9206 19.0119 20 19.2204 20C19.4286 20 19.6371 19.9206 19.7962 19.7618C20.1143 19.4444 20.1143 18.9295 19.7962 18.6122Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* ================= ICONS ================= */}
            <ul className="flex items-center gap-4 sm:gap-5 lg:gap-7 shrink-0">
              {/* USER */}
              <li>
                <button
                  type="button"
                  className="flex items-center justify-center"
                >
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.0175 11.2652C3.99775 11.2652 0.682495 14.108 0.682495 19.2701C0.682495 19.6732 1.00982 20 1.41369 20H18.6212C19.0251 20 19.3524 19.6732 19.3524 19.2701C19.3524 14.1083 16.0372 11.2652 10.0175 11.2652ZM2.17149 18.5402C2.4591 14.6805 5.09505 12.7251 10.0175 12.7251C14.9399 12.7251 17.5759 14.6805 17.8637 18.5402H2.17149Z"
                      fill="white"
                    />
                    <path
                      d="M10.0174 0C7.25222 0 5.16711 2.12336 5.16711 4.93895C5.16711 7.83699 7.34292 10.1944 10.0174 10.1944C12.6918 10.1944 14.8676 7.83699 14.8676 4.93918C14.8676 2.12336 12.7825 0 10.0174 0ZM10.0174 8.7348C8.14917 8.7348 6.6295 7.03211 6.6295 4.93918C6.6295 2.92313 8.05436 1.45984 10.0174 1.45984C11.949 1.45984 13.4053 2.95547 13.4053 4.93918C13.4053 7.03211 11.8856 8.7348 10.0174 8.7348Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </li>

              {/* WISHLIST */}
              <li>
                <button
                  type="button"
                  className="flex items-center justify-center"
                >
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.4252 3.30806C16.2463 1.13349 12.7016 1.13349 10.5232 3.30806L10.0172 3.81285L9.51156 3.30806C7.33321 1.13319 3.78822 1.13319 1.60986 3.30806C-0.524272 5.43848 -0.53813 8.81543 1.57772 11.1634C3.50752 13.3041 9.19902 17.929 9.44051 18.1248C9.60444 18.2578 9.8017 18.3226 9.99777 18.3226C10.0043 18.3226 10.0107 18.3226 10.0169 18.3223C10.2198 18.3317 10.4241 18.2622 10.5934 18.1248C10.8349 17.929 16.5269 13.3041 18.4573 11.1631C20.5729 8.81543 20.559 5.43848 18.4252 3.30806ZM17.1423 9.98189C15.6377 11.6505 11.5018 15.0919 10.0169 16.3131C8.53207 15.0922 4.39708 11.6511 2.89275 9.98218C1.41673 8.34448 1.40287 6.01215 2.86062 4.55694C3.60511 3.81403 4.58284 3.44228 5.56056 3.44228C6.53829 3.44228 7.51601 3.81373 8.26051 4.55694L9.37269 5.66718C9.50508 5.79934 9.67196 5.87822 9.8471 5.90589C10.1313 5.96682 10.4398 5.88764 10.6609 5.66748L11.7737 4.55694C13.2629 3.07082 15.6854 3.07112 17.1739 4.55694C18.6316 6.01215 18.6177 8.34448 17.1423 9.98189Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </li>

              {/* CART */}
              <li className="relative">
                <button
                  type="button"
                  className="flex items-center justify-center"
                >
                  <svg
                    width="17"
                    height="20"
                    viewBox="0 0 17 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.1218 4.6875H13.7369C13.426 2.05164 11.1748 0 8.45219 0C5.7296 0 3.47835 2.05164 3.16746 4.6875H0.78261C0.350374 4.6875 0 5.03727 0 5.46875V19.2188C0 19.6502 0.350374 20 0.78261 20H16.1218C16.554 20 16.9044 19.6502 16.9044 19.2188V5.46875C16.9044 5.03727 16.554 4.6875 16.1218 4.6875ZM8.45219 1.5625C10.3103 1.5625 11.8573 2.91621 12.1562 4.6875H4.74813C5.04709 2.91621 6.59411 1.5625 8.45219 1.5625ZM15.3392 18.4375H1.56522V6.25H3.13044V8.59375C3.13044 9.02523 3.48081 9.375 3.91305 9.375C4.34528 9.375 4.69566 9.02523 4.69566 8.59375V6.25H12.2087V8.59375C12.2087 9.02523 12.5591 9.375 12.9913 9.375C13.4236 9.375 13.7739 9.02523 13.7739 8.59375V6.25H15.3392V18.4375Z"
                      fill="white"
                    />
                  </svg>
                </button>

                <span className="font-jost bg-lightgreen text-primary-white rounded-full px-1.5 text-[10px] font-medium absolute -top-2 -right-2 min-w-4 h-4 flex items-center justify-center">
                  {cartitems}
                </span>
              </li>

              {/* FILTER / MOBILE MENU */}
              <li className="md:hidden">
                <button
                  type="button"
                  onClick={() => setMobileMenu(!mobileMenu)}
                  className="flex items-center justify-center"
                >
                  <Image
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    src={filter}
                    alt="menu"
                  />
                </button>
              </li>

              {/* FILTER - DESKTOP */}
              <li className="hidden md:block">
                <button type="button">
                  <Image
                    className="w-5 h-5 lg:w-6 lg:h-6"
                    src={filter}
                    alt="filter"
                  />
                </button>
              </li>
            </ul>
          </div>

          {/* ================= MOBILE SEARCH ================= */}
          <div className="md:hidden pb-4">
            <div className="flex items-center w-full h-11 bg-white">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products"
                className="flex-1 min-w-0 h-full px-3 bg-transparent outline-none font-jost text-color-third text-sm"
              />

              <button
                type="button"
                className="flex items-center justify-center px-3 h-full shrink-0"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.82291 0C3.95809 0 0 3.95121 0 8.80758C0 13.6642 3.95809 17.6152 8.82291 17.6152C13.688 17.6152 17.6458 13.6642 17.6458 8.80758C17.6458 3.95121 13.688 0 8.82291 0ZM8.82291 15.9892C4.85613 15.9892 1.62885 12.7675 1.62885 8.80762C1.62885 4.84773 4.85613 1.62602 8.82291 1.62602C12.7897 1.62602 16.017 4.84769 16.017 8.80758C16.017 12.7675 12.7897 15.9892 8.82291 15.9892Z"
                    fill="black"
                  />

                  <path
                    d="M19.7962 18.6122L15.1268 13.9509C14.8086 13.6333 14.2934 13.6333 13.9752 13.9509C13.657 14.2683 13.657 14.7832 13.9752 15.1005L18.6446 19.7618C18.8036 19.9206 19.0119 20 19.2204 20C19.4286 20 19.6371 19.9206 19.7962 19.7618C20.1143 19.4444 20.1143 18.9295 19.7962 18.6122Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* ================= MOBILE NAVIGATION ================= */}
          {/* ================= MOBILE NAVIGATION ================= */}
          {mobileMenu && (
            <div className="md:hidden pb-5">
              <div className="bg-white p-4">
                <ul className="flex flex-col gap-2 sm:gap-3">
                  {navitems.map((item) => (
                    <li key={item.id}>
                      <Link
                        to={item.url}
                        onClick={() => setMobileMenu(false)}
                        className="
                block
                font-jost
                text-primary-black
                text-sm
                sm:text-base
                py-2
                border-b
                border-gray-100
              "
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          
        </Container>
      </nav>
    </header>
  );
};

export default Header;