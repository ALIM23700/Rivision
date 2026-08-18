import React from 'react'
import About from './About'

const Home = (props) => {
  return (
    <div>Home
      <button className='btn' onClick={props.galidei

        
      }>Gali</button>
      <h1>name:{props.products.name}</h1>
      <p>price:{props.products.price}</p>
      <p>{props.name[0]}</p>
      
       <div className='card'>
         <h1>name:alim</h1>
           <h2>age:25</h2>
           

       </div>
       <About name="abul" age="22"></About>
       <About name="kabul" age="28"></About>
       <About name="babul" age="12"></About>
       <About name="dabul" age="62"></About>
          
      
      
    </div>
  )
}

export default Home