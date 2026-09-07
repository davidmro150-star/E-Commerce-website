import React from 'react'

import Navbar from '../home/Navbar'
import Banner from '../home/Banner'
import SupportFeatures from '../home/SupportFeatures'


import Products from '../home/Products'
import ProductCard from '../home/ProductCard'

const Home = () => {
  return (
    <>
    
      
      <Navbar />
      <Banner />
      <SupportFeatures />
      <Products/>
      <ProductCard/>
  </>
  )
}

export default Home
