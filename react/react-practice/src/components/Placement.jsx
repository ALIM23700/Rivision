import React from 'react'

const Placement = ({cart}) => {
    const {name,email}=cart
  return (
    <div>
        Placement
       <div >
         {
            cart.map((p)=><div>
                <h1>{p.name}</h1>
                <p>{p.email}</p>
            </div>)
        }
       </div>
    </div>
  )
}

export default Placement