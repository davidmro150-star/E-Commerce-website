import React, { useRef } from 'react';
import banner from "../../../src/assets/images/banner.png";
import Image from '../common/Image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { BannerData } from '../../api/bannerdata';
import { Pagination } from "swiper/modules";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import Container from '../ui/Container';

const Banner = () => {
  // Create a reference to control the Swiper instance directly
  const swiperRef = useRef(null);

  return (
    <>
      <section className="relative bg-four  w-full">
        <Container className="relative">

          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => {
              // Store the swiper instance in our ref
              swiperRef.current = swiper;
            }}
            className="w-full pb-12 md:pb-0"
          >
            {BannerData.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  className="
                    flex
                    flex-col
                    items-center
                    gap-8
                    px-8
                    py-12

                    md:flex-row
                    md:gap-6
                    md:px-16
                    md:py-20

                    lg:gap-12
                    lg:px-0
                  "
                >
                  {/* CONTENT */}
                  <div
                    className="
                      flex
                      flex-col
                      w-full
                      order-2
                      text-center

                      md:order-1
                      md:w-1/2
                      md:text-left

                      lg:w-auto
                    "
                  >
                    <h2 className="font-jost font-medium text-base leading-6 text-lightgreen">
                      Shop our freshest
                    </h2>

                    <h1
                      className="
                        font-jost
                        font-bold
                        text-[30px]
                        leading-[1.15]
                        text-deepgreen

                        sm:text-[30px]
                        md:text-[35px]
                        2xl:text-[50px]
                      "
                    >
                      {item.title}

                      <span
                        className="
                          block
                          font-jost
                          font-bold
                          text-2xl
                          text-lightgreen
                          leading-[1.15]

                          sm:text-3xl
                          md:text-4xl
                          lg:text-[50px]
                        "
                      >
                        {item.subtitle}
                      </span>
                    </h1>

                    <p className="font-jost font-medium text-base text-primary-black mt-4">
                      DISCOVER MORE
                    </p>
                  </div>

                  {/* IMAGE */}
                  <div
                    className="
                      flex
                      w-full
                      justify-center
                      order-1

                      md:order-2
                      md:w-1/2
                    "
                  >
                    <Image
                      src={item.banner}
                      alt="image"
                      className="
                        w-full
                        h-auto
                        object-contain
                        max-w-[240px]
                        sm:max-w-[300px]
                        md:max-w-[360px]
                        lg:max-w-[500px]
                      "
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ========================================================= */}
          {/* SET 1: MOBILE & TABLET BUTTONS (Hidden on Desktop)       */}
          {/* ========================================================= */}
          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            className="
              absolute
              top-1/2
              z-50
              flex
              h-10
              w-10
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white
              shadow-md
              cursor-pointer
              
              left-2
              md:left-4
                2xl:hidden
            "
          >
            <SlArrowLeft size={18} />
          </button>

          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            className="
              absolute
              top-1/2
              z-50
              flex
              h-10
              w-10
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white
              shadow-md
              cursor-pointer

              right-2
              md:right-4
           2xl:hidden
            "
          >
            <SlArrowRight size={18} />
          </button>

          {/* ========================================================= */}
          {/* SET 2: DESKTOP BUTTONS (Hidden on Mobile & Tablet)       */}
          {/* ========================================================= */}
          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            className="
              absolute
              top-1/2
              z-50
              h-10
              w-10
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white
              shadow-md
              cursor-pointer

              hidden
              lg:flex
              lg:left-[-60px]
            "
          >
            <SlArrowLeft size={18} />
          </button>

          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            className="
              absolute
              top-1/2
              z-50
              h-10
              w-10
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white
              shadow-md
              cursor-pointer

              hidden
              lg:flex
              lg:right-[-60px]
            "
          >
            <SlArrowRight size={18} />
          </button>

        </Container>
      </section>
    </>
  )
}

export default Banner;
