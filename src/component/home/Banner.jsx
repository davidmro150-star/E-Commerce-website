import React from 'react'

import banner from "../../../src/assets/images/banner.png";
import Image from '../common/Image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BannerData } from '../../api/bannerdata';
import { Navigation, Pagination } from "swiper/modules";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import Container from '../ui/Container';

const Banner = () => {

  return (
    <>
      <section className='relative bg-four '>
        <Swiper 

          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: '.prev',
            nextEl: '.next',
          }}
          pagination={{ clickable: true }}
        >



          {BannerData.map((item) => (
            <SwiperSlide key={item.id} >

              <Container className=''>

                <div className="flex items-center gap-33">

                  {/* Banner Part Content */}

                  <div className='flex flex-col mt-44 '>
                    <h2 className='font-jost font-medium text-base leading-6 text-lightgreen  ml-16.5 after:content-[] relative after:absolute after:-left-15 after:top-3 after:h-0.5 after:w-10 after:bg-green' >Shop our freshest</h2>
                    <h1 className='font-jost font-bold text-[50px] text-deepgreen leading-15 pt-2.75'>
                      {item.title}
                      <span className='block font-jost font-bold text-[50px] text-lightgreen leading-15 pb-4.75'>
                        {item.subtitle}
                      </span>
                    </h1>
                    <p className='font-jost font-medium text-base text-primary-black mb-30.75 after:content-[] relative after:absolute after:-left-0 after:top-6 after:h-0.5 after:w-28 after:bg-primary-black'>DISCOVER MORE</p>

                  </div>

                  {/*  Image Part */}

                  <div className='flex mt-31 mb-26.75'>
                    <Image src={item.banner} alt="image" />
                  </div>
                </div>


              </Container>
            </SwiperSlide>


          ))}

        </Swiper>
        <button className='prev bg-white ml-5 absolute top-1/2 -translate-y-1/2 left- z-50 rounded-full p-4'><SlArrowLeft /></button>
        <button className='next bg-white ml-5 absolute top-1/2 -translate-y-1/2 right-5 z-50 rounded-full p-4'><SlArrowRight /></button>

      </section>
     
    </>


  )
}

export default Banner
