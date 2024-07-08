import React from 'react';
import './card.css';


const Card = ({card, desc, heading}) => {
  return (
    <>
        <div className='w-full h-full flex flex-col items-center gap-2 '>
              <h4 className='max-[360px]:hidden abouttext text-[#c1282f] text-xl sm:text-xl md:text-sm font-normal mb-2 min-[916px]:text-xl'>{heading}</h4>
              <a href="#" target='_blank'>
                <div className='relative group overflow-hidden'>
                 {/* <img src={card} alt="card1 img" className='object-cover transition ease-in-out delay-150 mb-3.5 hover:-translate-y-1 hover:scale-105 duration-300' /> */}
                 <img src={card} alt="card1 img" className='object-cover mb-3.5 transition-opacity ease-in-out delay-0 hover:scale-105 duration-300 opacity-100 group-hover:opacity-50' />
                </div>
              </a>
              <div className='text-center text-sm leading-5 font-normal'>
                {desc}
              </div>
        </div>
    </>
  )
}

export default Card