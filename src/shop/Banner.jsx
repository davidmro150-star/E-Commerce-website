
import React from "react";

import ShopImage from "../assets/images/bg.png";
import Container from "../component/ui/Container";
import Image from "../component/common/Image";

const Banner = () => {
  return (
    <section>
      {/* =========================
          ONE BANNER ONLY
      ========================= */}
      <div
        className="
          relative
          flex
          flex-col

          h-[320px]
          min-[400px]:h-[370px]
           min-[600px]:h-[400px]
          min-[600px]:flex-row
          min-[600px]:items-stretch
          min-[724px]:h-[500px]
          min-[1024px]:h-[550px]

          min-[1024px]:flex-row
          min-[1024px]:items-stretch

          min-[1280px]:h-auto
          min-[1280px]:block
        "
      >
        {/* =========================
            IMAGE
        ========================= */}
        <div
          className="
            order-2
            h-1/2
            w-full

            min-[1024px]:h-full
            min-[1024px]:w-[40%]
            min-[1024px]:order-2

            min-[1280px]:h-auto
            min-[1280px]:w-full
            min-[1280px]:order-1
          "
        >
          <Image
            src={ShopImage}
            className="
              block
              h-full
              w-full
              object-cover

              min-[1280px]:mx-auto
              min-[1280px]:h-auto
              min-[1280px]:px-15
            "
          />
        </div>

        {/* =========================
            CONTENT
        ========================= */}
        <div
          className="
            relative
            order-1
            z-10
            h-1/2
            w-full

            min-[1024px]:static
            min-[1024px]:order-1
            min-[1024px]:h-full
            min-[1024px]:w-[60%]

            min-[1280px]:absolute
            min-[1280px]:inset-0
            min-[1280px]:order-none
            min-[1280px]:h-auto
            min-[1280px]:w-full
          "
        >
          <Container className="relative h-full">
            <div
              className="
                absolute
                bottom-5
                left-0
                w-full

                min-[400px]:bottom-6

                min-[600px]:bottom-8

                min-[768px]:bottom-10

                min-[1024px]:static
                min-[1024px]:flex
                min-[1024px]:h-full
                min-[1024px]:flex-col
                min-[1024px]:justify-center

                min-[1280px]:absolute
                min-[1280px]:bottom-33.75
                min-[1280px]:left-0
                min-[1280px]:block
                min-[1280px]:h-auto
              "
            >
              {/* Pattern */}
              <div
                className="
                  inset-0
                  bg-[repeating-linear-gradient(135deg,#ccc_0px,#ccc_1px,transparent_1px,transparent_8px)]
                  opacity-20
                "
              ></div>

              {/* =========================
                  TITLE
              ========================= */}
              <h1
                className="
                  whitespace-nowrap
                  text-[18px]
                  font-extrabold
                  text-transparent
                  [-webkit-text-stroke:1px_#9CA3AF]

                  min-[400px]:text-[24px]

                  min-[600px]:text-[32px]

                  min-[724px]:text-[42px]

                  min-[1024px]:text-[46px]
                 
               min-[1024px]:relative
                min-[1024px]:bottom-[20px]
                min-[1280px]:text-[90px]
                  min-[1280px]:[-webkit-text-stroke:2px_#9CA3AF]
                "
              >
                JACKETS & COATS
              </h1>

              {/* =========================
                  CATEGORIES
              ========================= */}
              <ul
                className="
                  flex
                  flex-wrap
                  gap-x-3
                  gap-y-1

                  min-[400px]:gap-x-4

                  min-[600px]:gap-x-5

                  min-[768px]:gap-x-6

                  min-[1024px]:gap-x-3

                  min-[1280px]:flex-nowrap
                  min-[1280px]:gap-7.75
                "
              >
                <li className="font-custom text-primary-black text-[11px] min-[400px]:text-[12px] min-[600px]:text-[14px] min-[768px]:text-[16px]">
                  #STAYHOME
                </li>

                <li className="font-custom text-primary-black text-[11px] min-[400px]:text-[12px] min-[600px]:text-[14px] min-[768px]:text-[16px]">
                  NEW IN
                </li>

                <li className="font-custom text-primary-black relative text-[11px] font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary-black after:duration-300 after:content-[''] hover:after:w-[40%] min-[400px]:text-[12px] min-[600px]:text-[14px] min-[768px]:text-[16px]">
                  JACKETS
                </li>

                <li className="font-custom text-primary-black relative text-[11px] font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary-black after:duration-300 after:content-[''] hover:after:w-[40%] min-[400px]:text-[12px] min-[600px]:text-[14px] min-[768px]:text-[16px]">
                  HOODIES
                </li>

                <li className="font-custom text-primary-black relative text-[11px] font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary-black after:duration-300 after:content-[''] hover:after:w-[40%] min-[400px]:text-[12px] min-[600px]:text-[14px] min-[768px]:text-[16px]">
                  MEN
                </li>

                <li className="font-custom text-primary-black relative text-[11px] font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary-black after:duration-300 after:content-[''] hover:after:w-[40%] min-[400px]:text-[12px] min-[600px]:text-[14px] min-[768px]:text-[16px]">
                  WOMEN
                </li>

                <li className="font-custom text-primary-black relative text-[11px] font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary-black after:duration-300 after:content-[''] hover:after:w-[40%] min-[400px]:text-[12px] min-[600px]:text-[14px] min-[768px]:text-[16px]">
                  TROUSERS
                </li>

                <li className="font-custom text-primary-black relative text-[11px] font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary-black after:duration-300 after:content-[''] hover:after:w-[40%] min-[400px]:text-[12px] min-[600px]:text-[14px] min-[768px]:text-[16px]">
                  ACCESSORIES
                </li>

                <li className="font-custom text-primary-black relative text-[11px] font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary-black after:duration-300 after:content-[''] hover:after:w-[40%] min-[400px]:text-[12px] min-[600px]:text-[14px] min-[768px]:text-[16px]">
                  SHOES
                </li>
              </ul>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default Banner;

