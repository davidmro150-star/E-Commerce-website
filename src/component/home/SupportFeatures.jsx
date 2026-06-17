import React from 'react'
import Container from '../ui/Container'
import shipping from "../../../src/assets/images/shipping.png";
import headphone from "../../assets/images/headphone.png";
import gift from "../../../src/assets/images/gift.png";
import shield from "../../../src/assets/images/shield.png";
import Image from '../common/Image';

const SupportFeatures = () => {
  return (
    <section className='bg-#F7F5EE'>
      <Container>
        <div className='flex flex-cols items-center justify-between pt-12.25 pb-12.25 '>
         
          <Image src={shipping} alt="image" />
          <div>
            <h2 className='font-jost font-medium text-primary-black text-[16px] '>Fast and Free Delivery</h2>
            <p className='font-jost font-regular text-third text-[15px]'>Free delivery for all orders over $140</p>
          </div>

          
          <Image src={headphone} alt="image" />
          <div>
            <h2 className='font-jost font-medium text-primary-black text-[16px] '>24/7 Customer Support</h2>
            <p className='font-jost font-regular text-third text-[15px]'>Friendly 24/7 customer support</p>
          </div>

        
          <Image src={shield} alt="Image" />
          <div>
            <h2 className='font-jost font-medium text-primary-black text-[16px] '>Money Back Guarantee</h2>
            <p className='font-jost font-regular text-third text-[15px]'>We return money within 30 days</p>
          </div>

         
          <Image src={gift} alt={Image} />
          <div>
            <h2 className='font-jost font-medium text-primary-black text-[16px] '>Member Gifts
              <p className='font-jost font-regular text-third text-[15px]'>Discount coupons weekends.</p>
            </h2>
          </div>


        </div>

      </Container>
      
    </section>
  )
}

export default SupportFeatures
