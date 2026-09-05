import React from "react";
import Container from "../ui/Container";

import shipping from "../../../src/assets/images/shipping.png";
import headphone from "../../assets/images/headphone.png";
import gift from "../../../src/assets/images/gift.png";
import shield from "../../../src/assets/images/shield.png";

import Image from "../common/Image";

const SupportFeatures = () => {
  return (
    <section className="bg-[#F7F5EE]">
      <Container>
        <div
          className="
            grid
            grid-cols-1
            gap-8
            py-10

            sm:grid-cols-2
            sm:gap-8

            md:grid-cols-2
            md:gap-10
            md:py-12

            lg:grid-cols-4
            lg:gap-8
            lg:py-12.25
          "
        >

          {/* FAST DELIVERY */}
          <div
            className="
              flex
              items-center
              gap-4
              justify-center

              lg:justify-start
            "
          >
            <Image
              src={shipping}
              alt="Fast and free delivery"
              className="h-10 w-10 shrink-0 object-contain"
            />

            <div>
              <h2
                className="
                  font-jost
                  font-medium
                  text-primary-black
                  text-sm
                  leading-5

                  md:text-base
                "
              >
                Fast and Free Delivery
              </h2>

              <p
                className="
                  font-jost
                  font-normal
                  text-third
                  text-xs
                  leading-5

                  md:text-[15px]
                "
              >
                Free delivery for all orders over $140
              </p>
            </div>
          </div>


          {/* CUSTOMER SUPPORT */}
          <div
            className="
              flex
              items-center
              gap-4
              justify-center

              lg:justify-start
            "
          >
            <Image
              src={headphone}
              alt="24/7 customer support"
              className="h-10 w-10 shrink-0 object-contain"
            />

            <div>
              <h2
                className="
                  font-jost
                  font-medium
                  text-primary-black
                  text-sm
                  leading-5

                  md:text-base
                "
              >
                24/7 Customer Support
              </h2>

              <p
                className="
                  font-jost
                  font-normal
                  text-third
                  text-xs
                  leading-5

                  md:text-[15px]
                "
              >
                Friendly 24/7 customer support
              </p>
            </div>
          </div>


          {/* MONEY BACK */}
          <div
            className="
              flex
              items-center
              gap-4
              justify-center

              lg:justify-start
            "
          >
            <Image
              src={shield}
              alt="Money back guarantee"
              className="h-10 w-10 shrink-0 object-contain"
            />

            <div>
              <h2
                className="
                  font-jost
                  font-medium
                  text-primary-black
                  text-sm
                  leading-5

                  md:text-base
                "
              >
                Money Back Guarantee
              </h2>

              <p
                className="
                  font-jost
                  font-normal
                  text-third
                  text-xs
                  leading-5

                  md:text-[15px]
                "
              >
                We return money within 30 days
              </p>
            </div>
          </div>


          {/* MEMBER GIFTS */}
          <div
            className="
              flex
              items-center
              gap-4
              justify-center

              lg:justify-start
            "
          >
            <Image
              src={gift}
              alt="Member gifts"
              className="h-10 w-10 shrink-0 object-contain"
            />

            <div>
              <h2
                className="
                  font-jost
                  font-medium
                  text-primary-black
                  text-sm
                  leading-5

                  md:text-base
                "
              >
                Member Gifts
              </h2>

              <p
                className="
                  font-jost
                  font-normal
                  text-third
                  text-xs
                  leading-5

                  md:text-[15px]
                "
              >
                Discount coupons weekends.
              </p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default SupportFeatures;