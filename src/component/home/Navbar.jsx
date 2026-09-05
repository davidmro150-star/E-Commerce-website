import React from "react";
import { navitems } from "../../api/navbardata";
import { Link } from "react-router";
import Container from "../ui/Container";

const Navbar = ({ mobileMenu }) => {
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

          </div>


          {/* RIGHT SIDE */}
          <div className="flex items-center gap-10">

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
              SPECIAL OFFER
            </li>

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