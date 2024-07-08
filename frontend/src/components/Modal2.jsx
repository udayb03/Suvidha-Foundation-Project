import React from 'react';


const Modal2 = () => {
  return (
    <div className='absolute w-[52vw] top-full flex-row bg-black z-50 ' style={{ top: modalPosition.y, left: modalPosition.x }}>
      <div className='w-full text-white flex items-start p-3 text-xs font-bold'>
        <div className='w-1/3 basis-2/6'>
          <li className='p-2 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-4'><a>ACADEMIC LAW WRITING</a></li>
          <li className='p-2 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-4'><a>ARTS AND HUMANITIES</a></li>
          <li className='p-2 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-4'><a>MEDICINE & HEALTHCARE</a></li>
        </div>
        <div className='w-1/3  basis-2/6'>
          <li className='p-2 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-4'><a>BUSINESS & MANAGEMENT</a></li>
          <li className='p-2 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-4'><a>ECONOMIC & FINANCE ACADEMIC</a></li>
          <li className='p-2 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-4'><a>COMPUTER SCIENCE & INFORMATION</a></li>
        </div>
        <div className='w-1/3 basis-2/6'>
          <li className='p-2 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-4'><a>ENGINEERING & TECHNOLOGY</a></li>
          <li className='p-2 list-none hover:bg-slate-800/80 border-l-transparent hover:border-l-slate-200 border-l-4'><a>BIOLOGICAL & LIFE SCIENCE</a></li>
        </div>
      </div>
    </div>
  )
}

export default Modal2