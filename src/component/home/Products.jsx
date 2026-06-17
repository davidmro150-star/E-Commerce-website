import React from 'react'
import Container from '../ui/Container'

const Products = () => {
  return (
    <section>
      <Container>
        <div className='flex items-center justify-between'>
          <h3 className='font-jost font-regular text-[35px] text-primary-black'>Featured Products</h3>
          <div className='flex items-center gap-12'>
            <p className='font-jost font-medium text-third text-[16px]'>Best Sellers </p>
            <p className='font-jost font-medium text-third text-[16px]'>Most Popular  </p>
            <p className='font-jost font-medium text-third text-[16px]'>Top 20  </p>
            <p className='font-jost font-medium text-third text-[16px]'>Best Rated</p>
       </div>
        </div>
      </Container>
      
    </section>
  )
}

export default Products
