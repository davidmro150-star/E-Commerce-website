
import React from "react";

import Image from "../common/Image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { BannerData } from "../../api/bannerdata";
import { Navigation, Pagination } from "swiper/modules";

import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import Container from "../ui/Container";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-four">

      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: ".banner-prev",
          nextEl: ".banner-next",
        }}
        pagination={{
          clickable: true,
        }}
      >

        {BannerData.map((item) => (
          <SwiperSlide key={item.id}>

            <Container>

  <div
                className="
                  flex
                  flex-col
                  items-center
                  justify-center

                  gap-5

                  py-8

                  md:flex-row
                  md:gap-6
                  md:py-10

                  lg:gap-8
                  lg:py-12

                  xl:gap-12
                  xl:py-14
                "
              >

                {/* ================= CONTENT ================= */}

                <div
                  className="
                    flex
                    w-full
                    flex-col
                    items-center
                    text-center

                    md:w-[48%]
                    md:items-start
                    md:text-left
                  "
                >

                  {/* SMALL HEADING */}

                  <h2
                    className="
                      relative
                      font-jost
                      font-medium
                      leading-5
                      text-lightgreen

                      text-[11px]

                      sm:text-xs

                      md:text-[12px]

                      lg:text-sm

                      xl:text-base

                      md:ml-7
                      lg:ml-9
                      xl:ml-12

                      md:after:block
                      after:hidden

                      after:absolute
                      after:left-[-22px]
                      lg:after:left-[-28px]
                      xl:after:left-[-35px]

                      after:top-1/2
                      after:-translate-y-1/2

                      after:h-[2px]
                      after:w-5
                      lg:after:w-7
                      xl:after:w-9

                      after:bg-green
                    "
                  >
                    Shop our freshest
                  </h2>


                  {/* ================= TITLE ================= */}

                  <h1
                    className="
                      mt-1

                      font-jost
                      font-bold
                      leading-[1.12]
                      text-deepgreen

                      text-[26px]

                      sm:text-[30px]

                      md:text-[31px]

                      lg:text-[36px]

                      xl:text-[46px]

                      2xl:text-[50px]
                    "
                  >

                    {item.title}

                    <span
                      className="
                        block
                        font-jost
                        font-bold
                        leading-[1.12]
                        text-lightgreen

                        text-[26px]

                        sm:text-[30px]

                        md:text-[31px]

                        lg:text-[36px]

                        xl:text-[46px]

                        2xl:text-[50px]
                      "
                    >
                      {item.subtitle}
                    </span>

                  </h1>


                  {/* ================= DISCOVER ================= */}

                  <p
                    className="
                      relative
                      mt-2

                      font-jost
                      font-medium
                      leading-5
                      text-primary-black

                      text-[11px]

                      sm:text-xs

                      md:text-[12px]

                      lg:text-sm

                      xl:text-base

                      mb-4

                      md:mb-6

                      lg:mb-8

                      xl:mb-12

                      after:absolute

                      after:left-1/2
                      md:after:left-0

                      after:top-5

                      after:h-[2px]

                      after:w-14

                      sm:after:w-16

                      md:after:w-20

                      lg:after:w-24

                      xl:after:w-28

                      after:-translate-x-1/2
                      md:after:translate-x-0

                      after:bg-primary-black
                    "
                  >
                    DISCOVER MORE
                  </p>

                </div>


                {/* ================= IMAGE ================= */}

                <div
                  className="
                    flex
                    w-full
                    justify-center

                    md:w-[52%]
                    md:justify-end

                    lg:w-[52%]
                  "
                >

                  <Image
                    src={item.banner}
                    alt={item.title || "Banner image"}
                    className="
                      h-auto
                      w-auto
                      object-contain

                      max-w-[180px]

                      sm:max-w-[220px]

                      md:max-w-[300px]

                      lg:max-w-[360px]

                      xl:max-w-[440px]

                      2xl:max-w-[500px]
                    "
                  />

                </div>

              </div>

            </Container>

          </SwiperSlide>
        ))}

      </Swiper>


      {/* ================= PREVIOUS ================= */}

      <button
        type="button"
        className="
          banner-prev

          absolute
          left-2
          top-1/2
          z-50
          flex
          -translate-y-1/2
          items-center
          justify-center

          rounded-full
          bg-white
          shadow-md

          h-7
          w-7

          sm:h-8
          sm:w-8

          md:left-3
          md:h-9
          md:w-9

          lg:left-5
          lg:h-10
          lg:w-10

          xl:h-12
          xl:w-12
        "
      >
        <SlArrowLeft
          className="
            text-[9px]

            sm:text-[10px]

            md:text-xs

            lg:text-sm

            xl:text-base
          "
        />
      </button>


      {/* ================= NEXT ================= */}

      <button
        type="button"
        className="
          banner-next

          absolute
          right-2
          top-1/2
          z-50
          flex
          -translate-y-1/2
          items-center
          justify-center

          rounded-full
          bg-white
          shadow-md

          h-7
          w-7

          sm:h-8
          sm:w-8

          md:right-3
          md:h-9
          md:w-9

          lg:right-5
          lg:h-10
          lg:w-10

          xl:h-12
          xl:w-12
        "
      >
        <SlArrowRight
          className="
            text-[9px]

            sm:text-[10px]

            md:text-xs

            lg:text-sm

            xl:text-base
          "
        />
      </button>

    </section>
  );
};

export default Banner;
