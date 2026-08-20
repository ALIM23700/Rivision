import React, { useState } from 'react'


const useCounter = () => {
    const [price,setPrice]=useState(0)
    const increasehandle=()=>{
    
    setPrice(price+1)
   
  }
  const decreasehandle=()=>{
    
    setPrice(price-1)
   
  }
  return (
    [increasehandle,decreasehandle,price]
  )
}

export default useCounter

