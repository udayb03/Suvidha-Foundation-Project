import React from 'react'
import './Mentor.css'

const mentor = (prop) => {
  return (
    <div className='mentor h-64 bg-black text-white flex flex-col gap-[12px]'>
      <h2 className='mt-11 text-3xl font-medium my-0 mx-auto'>{prop.heading}</h2>
      <h4 className='text-2xl font-medium text-center my-0 mx-auto'>{prop.note}</h4>
      <button className='p-2 bg-red-600 mx-auto rounded-lg text-center'>Learn more</button>
    </div>
  )
}

export default mentor;