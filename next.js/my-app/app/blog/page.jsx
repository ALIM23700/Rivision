import Link from 'next/link'
import React from 'react'

const page = () => {
    const posts=[
        {
            id:1,
            name:"alim",
            age:25
        },
        {
            id:2,
            name:"dlim",
            age:27
        },
        {
            id:3,
            name:"slim",
            age:29
        }
    ]
  return (
    <div>
       {
         posts.map((post)=><div >
           <Link href={`/blog/${post.id}`}> {post.name}</Link>
         </div>)
       }

    </div>
  )
}

export default page