import React from 'react'
import { useParams } from 'react-router-dom'

const ProductsDetails = () => {
    const {id}=useParams()
  return (
    <div>ProductsDetails
        <h1>id:{id}</h1>
    </div>
  )
}

export default ProductsDetails