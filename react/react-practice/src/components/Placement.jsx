import React from 'react'

const Placement = ({cart}) => {
  console.log(cart)
 
  
  
  return (
    <div>
      Placement
       <div >
       {
        cart.map((c)=>
        <div>
           <h1>name:{c.name}</h1>
          <p>email:{c.email}</p>
            <button className='bg-red-500 p-2 rounded-md text-white'>Remove Cart</button>
        </div>)
       }
    </div>
    </div>
  )
}

export default Placement