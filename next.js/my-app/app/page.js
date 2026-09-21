
import React from 'react'
import { myclick } from './components/mybutton'
import { getdata } from './lib/api'

const page =async() => {
  const posts=await getdata()
  
 
  return (
    <div>Home page
      {
        posts.map((post)=><h1>{post.name}</h1>)
      }
      
      <button className='bg-green-500 rounded-md p-2' onClick={myclick}>Click me</button>
    </div>
  )
}

export default page