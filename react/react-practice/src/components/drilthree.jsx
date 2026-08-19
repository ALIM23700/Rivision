import React, { useContext } from 'react'
import { counterContext } from '../Context/contex1'



const Drilthree = () => {
    const [count,setCount] =useContext(counterContext)
  
  return (
    <div>drilthree
      
            <button onClick={()=>setCount(count+1)} className='btn'>Count:{count}</button>
       
    </div>
  )
}

export default Drilthree