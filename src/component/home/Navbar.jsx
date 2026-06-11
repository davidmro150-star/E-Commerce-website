import React from 'react'
import { navitems } from '../../api/navbardata'
import { Link } from 'react-router'
import Container from '../ui/Container'

const Navbar = () => {
  return (
    <section className='bg-lightgreen'>
      <Container>
        <div className=''> 
             <ul className= "flex items-center  gap-11 pt-5.25 pb-3.75 ">
      
            {
              navitems?.map((item, index) => (
                <li className="list-item" key={item.id}>
                  <Link to={item.url}>{item.name}</Link>
                   
                  </li>
              ))
            }
            <div className='flex gap-10 ml-auto font-jost  leading-6 text-primary-white font-medium text-base '>
              <li>SPECIAL OFFER </li>
              <li> PURCHASE THEME</li>
            </div>
          </ul> 
       
        </div>
 
      </Container>
     
    </section>
  )
}

export default Navbar
