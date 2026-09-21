import React from 'react'

const page = async({params}) => {
    const {id}=await params;
  return (
    <div>
        Blog id is :{id}
    </div>
  )
}

export default page