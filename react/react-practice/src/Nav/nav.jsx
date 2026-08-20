import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='bg-black text-white flex justify-around items-center'>
        <Link to="/">Home</Link>
         <Link to="/about">about</Link>
          <Link to="/contact">contact</Link>
           <Link to="/newproducts">Products</Link>
    </div>
  )
}

export default Nav