import React from 'react'

import { BannerData } from '../../api/bannerdata';
import SliderLib from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from '../common/Image';
import PopUp from './PopUp';






const Banner = () => { 




   const settings = {
     dots: true,
     arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
     slidesToScroll: 1,
    appendDots: dots => (
      <section id="banner">
        <ul className='flex gap-5 absolute bottom-14.5 left-48.5' style={{ margin: "0px" }}>
          {""}
          {dots}{""}
        </ul> 
      </section>
    ),
    customPaging: i => (
      <div className=' bg-[#DDC2B9] w-1.5 h-1.5 rounded-full'
       
      ></div>
    )

  };
  const Slider = SliderLib.default|| SliderLib
  return (

          
    
    <div className='mx-15 relative'>
     
      <PopUp/>
      <Slider {...settings}>
                 {BannerData?.map((item) => (
                   <Image className="w-full text-center"
                     key={item.id} src={item.banner} />
           ))}

    </Slider>
     
      
        

    
    
    </div>

    
  );
};

export default Banner;

