import React from 'react'

const Products = ({product,handlecart}) => {
  const {name,email}=product
  
  return (
    <div className='border bg-amber-200 flex flex-col justify-center items-center  p-5  m-5'>
      <h1>name:{name}</h1>
      <p>email:{email}</p>
      <button className='bg-blue-500 p-2 rounded-md text-white' onClick={()=>handlecart(product)}>Add To Cart</button>
    </div>
  )
}

export default Products