import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAlltodos } from '../redux/actions/todosAction'

const Todos = () => {
    const {isloading,error,todos}=useSelector((state)=>state)
    
    const dispatch=useDispatch()
    useEffect(()=>{
       dispatch(getAlltodos())
    },[dispatch])
  return (
    <div>
          {isloading && <h3>loading....</h3>}
           {error && <h3>{error.message}</h3>}
           <section>
            {todos && todos.map((todo)=><div>
                <h4>{todo.title}</h4>
            </div>)}
           </section>
    </div>
  )
}

export default Todos