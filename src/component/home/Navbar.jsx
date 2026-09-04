import React from "react";
import { navitems } from "../../api/navbardata";
import { Link } from "react-router";
import Container from "../ui/Container";

const Navbar = ({ mobileMenu }) => {
  return (
    <section
      className={`
        bg-lightgreen w-full
        ${mobileMenu ? "block" : "hidden"}
        md:block
      `}
    >
      <Container>
        <div className="w-full">
          <ul
            className="
              flex flex-wrap items-center
              gap-3
              sm:gap-5
              md:gap-7
              lg:gap-11
              py-2
              sm:py-3
              md:py-3.5
              lg:pt-5.25
              lg:pb-3.75
            "
          >
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
                  className="block whitespace-nowrap hover:opacity-80 transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <li
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
              "
            >
              SPECIAL OFFER
            </li>

            <li
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
              "
            >
              PURCHASE THEME
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Navbar;