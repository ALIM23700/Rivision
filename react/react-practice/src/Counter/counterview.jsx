import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increament } from './counterSlice'

const Counterview = () => {
    const count=useSelector((state)=>state.counter.count)
    const dispatch=useDispatch()
    
  return (
    <div>count:{count}
    <button onClick={
        ()=>{
            dispatch(increament())
        }
    }>increment</button>

    </div>
  )
}

export default Counterview