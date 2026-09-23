import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreamentCounter, increamentCounter, resetCounter } from '../redux/actions/couterActions'

const Counter = () => {
    const count=useSelector((state)=>state.count)
    const dispatch=useDispatch()
    const handlecout=()=>{
        dispatch(increamentCounter())

    }
     const handlecout2=()=>{
        dispatch(decreamentCounter())

    }
     const handlecout3=()=>{
        dispatch(resetCounter())

    }
  return (
    <div>
        <button onClick={handlecout}>increment:{count}</button>
        <button onClick={handlecout2}>decrement:{count}</button>
        <button onClick={handlecout3}>reset:{count}</button>
    </div>
  )
}

export default Counter