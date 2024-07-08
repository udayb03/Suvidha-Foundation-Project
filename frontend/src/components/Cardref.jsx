import React from 'react'
import './Cardref.css';

const Card = (props) => {
  return (
    <div className=''>
      <img src={props.image} alt=""/>
      <div className="inner">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default Card