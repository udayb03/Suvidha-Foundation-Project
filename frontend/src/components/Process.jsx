import React from 'react'
import './Process.css'

const Process = (props) => {
  return (
    <div className='eachProcess gap-3 '>
      <div className="icon text-xl rounded-full">
        <img src={props.icon} alt=""/>
      </div>
      <div className="promise">
        <h3 className='h3'>{props.heading}</h3>
        <p className='p'>{props.para}</p>
      </div>
    </div>
  )
}

export default Process