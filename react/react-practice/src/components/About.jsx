import React from 'react'
import Contact from './Contact'

const About = (props) => {
    
  return (

        <div className='card'>
         <h1>name:{props.name}</h1>
           <h2>age:{props.age}</h2>

       </div>
   
  )
}

export default About