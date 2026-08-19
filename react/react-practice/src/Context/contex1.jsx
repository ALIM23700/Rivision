import React, {createContext, useState } from 'react'
export const counterContext=createContext();

export const Context1 = ({children}) => {
    const [count,setCount]=useState(0)
  return (
   <counterContext.Provider value={[count,setCount]}>
    {children}
   </counterContext.Provider>
  )
}

