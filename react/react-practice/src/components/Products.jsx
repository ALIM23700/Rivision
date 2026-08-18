import React from 'react'

const Products = ({product,handlebutton}) => {
  
  const {name,email}=product
  return (
    <div className='border bg-amber-200 h-48 w-56 flex flex-col justify-center items-center'>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <button className='bg-blue-500 border text-white rounded-md br-5 p-2' onClick={()=>handlebutton(product)}>Add To Cart</button>
    </div>
  )
}

export default Products