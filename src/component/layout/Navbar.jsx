import React, { useEffect, useRef, useState } from "react";
import { navitems } from "../../api/navbardata";
import { Link } from "react-router";
import { ChevronDown } from "lucide-react";
import Container from "../ui/Container";

const Navbar = ({ mobileMenu }) => {
  const [pagesOpen, setPagesOpen] = useState(false);
  const pagesRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        pagesRef.current &&
        !pagesRef.current.contains(event.target)
      ) {
        setPagesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section
      className={`
        bg-lightgreen
        w-full
        ${mobileMenu ? "block" : "hidden"}
        md:block
      `}
    >
      <Container>
        <ul
          className="
            flex
            w-full
            items-center
            justify-between
            py-2
            sm:py-3
            md:py-3.5
            lg:pt-5.25
            lg:pb-3.75
          "
        >

          {/* LEFT SIDE */}
          <div className="flex items-center gap-3 sm:gap-5 md:gap-7 lg:gap-11">

            {navitems?.map((item) => (
              <li
                key={item.id}
                className="
                  shrink-0
                  list-none
                  font-jost
                  text-primary-white
                  font-medium
                  text-xs
                  sm:text-sm
                  md:text-sm
                  lg:text-base
                  leading-5
                  md:leading-6
                "
              >
                <Link
                  to={item.url}
                  className="
                    block
                    whitespace-nowrap
                    transition
                    hover:opacity-80
                  "
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* PAGES DROPDOWN */}
            <li
              ref={pagesRef}
              className="relative list-none"
              onMouseEnter={() => setPagesOpen(true)}
            >
              <button
                type="button"
                onClick={() => setPagesOpen(!pagesOpen)}
                className="
                  flex
                  items-center
                  gap-1
                  whitespace-nowrap
                  font-jost
                  text-primary-white
                  font-medium
                  text-xs
                  sm:text-sm
                  md:text-sm
                  lg:text-base
                "
              >
                PAGES

                <ChevronDown
                  size={16}
                  className={`
                    transition-transform
                    duration-200
                    ${pagesOpen ? "rotate-180" : ""}
                  `}
                />
              </button>

              {/* DROPDOWN */}
              {pagesOpen && (
                <div
                  className="
                    absolute
                    left-0
                    top-full
                    z-50
                    mt-3
                    w-52
                    rounded-lg
                    border
                    border-gray-100
                    bg-white
                    p-2
                    shadow-lg
                  "
                >
                  <Link
                    to="/about-us"
                    onClick={() => setPagesOpen(false)}
                    className="
                      block
                      rounded-md
                      px-4
                      py-3
                      font-jost
                      text-sm
                      text-gray-700
                      transition
                      hover:bg-[#E8EFE8]
                      hover:text-[#074E37]
                    "
                  >
                    About Us
                  </Link>

                  <Link
                    to="/contact-us"
                    onClick={() => setPagesOpen(false)}
                    className="
                      block
                      rounded-md
                      px-4
                      py-3
                      font-jost
                      text-sm
                      text-gray-700
                      transition
                      hover:bg-[#E8EFE8]
                      hover:text-[#074E37]
                    "
                  >
                    Contact Us
                  </Link>

                  <Link
                    to="/faq"
                    onClick={() => setPagesOpen(false)}
                    className="
                      block
                      rounded-md
                      px-4
                      py-3
                      font-jost
                      text-sm
                      text-gray-700
                      transition
                      hover:bg-[#E8EFE8]
                      hover:text-[#074E37]
                    "
                  >
                    FAQ
                  </Link>

                  <Link
                    to="/wishlist"
                    onClick={() => setPagesOpen(false)}
                    className="
                      block
                      rounded-md
                      px-4
                      py-3
                      font-jost
                      text-sm
                      text-gray-700
                      transition
                      hover:bg-[#E8EFE8]
                      hover:text-[#074E37]
                    "
                  >
                    Wishlist
                  </Link>
                </div>
              )}
            </li>

          </div>


          {/* RIGHT SIDE */}
          <div className="flex items-center gap-10">

            {/* SPECIAL OFFER */}
            <Link
              to="/special-offers"
              className="
                shrink-0
                list-none
                whitespace-nowrap
                font-jost
                text-primary-white
                font-medium
                text-xs
                sm:text-sm
                md:text-sm
                lg:text-base
                transition
                hover:opacity-80
              "
            >
              SPECIAL OFFER
            </Link>

            {/* PURCHASE THEME */}
            <li
              className="
                shrink-0
                list-none
                whitespace-nowrap
                font-jost
                text-primary-white
                font-medium
                text-xs
                sm:text-sm
                md:text-sm
                lg:text-base
              "
            >
              PURCHASE THEME
            </li>

          </div>

        </ul>
      </Container>
    </section>
  );
};

export default Navbar;