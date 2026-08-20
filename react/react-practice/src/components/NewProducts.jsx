import React from 'react'
import { Link } from 'react-router-dom'

const NewProducts = () => {
     const products=[
        {id:1 ,name:'LAPTOP'},
        {id:2 ,name:'Mobile'},
        {id:3 ,name:'Computer'},
      ]
  return (
    <div>
        <h1>Products</h1>
      {
        products.map((product)=>(<div key={product.id}> 
        <h2>{product.name}</h2>
        <Link to={`/newproducts/${product.id}`}>View Details</Link>
       
        
        </div>))
      }
    </div>
  )
}

export default NewProducts