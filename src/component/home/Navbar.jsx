import React from 'react'
import { navitems } from '../../api/navbardata'
import { Link } from 'react-router'
import Container from '../ui/Container'

const Navbar = () => {
  return (
    <section className='bg-lightgreen'>
      <Container>
        <div className=''>
             <ul className= "flex items-center  gap-10 pt-5.25 pb-3.75 ">
      
            {
              navitems?.map((item, index) => (
                <li className="list-item" key={item.id}>
                  <Link to={item.url}>{item.name}</Link>
                  </li>
              ))
          }
          </ul> 
       
        </div>
 
      </Container>
     
    </section>
  )
}

export default Navbar
