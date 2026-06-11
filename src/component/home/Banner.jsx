import React from 'react'

import banner from "../../../src/assets/images/banner.png";
import Image from '../common/Image';

const Banner = () => {
  return (
    <section className='bg-four'>
   
        <div className='flex items-center justify-between'>

          {/* Banner Part Content */}

          <div className='flex mt-44'>
            <h2 className='font-jost font-medium text-base leading-6 text-lightgreen after:content-[] relative after:absolute after:-left-15 after:top-3 after:h-0.5 after:w-10 after:bg-green' >Shop our freshest</h2>
            <h1 className='font-jost font-bold text-deepgreen text-[50px] leading-12.50 mt-2.75'>Fresh Hand-Picked Vegetables
              <span className='block font-jost font-bold text-lightgreen text-[50px] leading-12.50 '>Everyday</span>
         </h1>
          </div>

          {/*  Image Part */}

          <div className='flex mt-31'>
       <Image src={banner} alt="image"/>
          </div>
        </div>
    
      
    </section>
  )
}

export default Banner
