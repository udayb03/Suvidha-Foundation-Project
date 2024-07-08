import React from 'react';
import { IoMdSettings } from "react-icons/io";
import Card from './Card';
import card1 from '../assets/card1.jpg'
import card2 from '../assets/card2.jpg'
import card3 from '../assets/card3.jpg'


const AboutUs = () => {

  return (
    <>
      <div className='flex mt-2 -z-50 relative items-center justify-center h-[32.5vw]'>
        <div className='w-[92vw] h-[32.5vw]'>
          <img src="https://www.phdassistance.com/wp-content/uploads/2022/12/PA-banner-1.webp" alt="" className='w-full bg-cover relative h-full' />
        </div>
        <div className='font-["Roboto"] absolute left-[8vw] top-[2.7vw] text-white sm:left-[8vw] sm:top-[7vw] md:left-[9vw] md:top-[6vw] lg:top-[8vw] xl:top-[11vw]'>
          <div className='mb-1 sm:mb-2 md:mb-3 font-semibold md:text-4xl xl:mb-5'>Successfully Mentored</div>
          <div className='mb-1 sm:mb-2 md:mb-3 md:text-3xl xl:mb-5'>
            <p> Research Scholars & Authors </p>
            <p>across the globe</p>
          </div>
          <button className='bg-[#c12b30] p-2 font-thin text-sm rounded-md hover:bg-[#a73c3c] transition-colors'>About Us</button>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center my-5 gap-3'>
        <div className='flex flex-col items-center justify-center'>
          <IoMdSettings className='fill-[#f3474e] w-12 h-12' />
          <div className='abouttext flex flex-col items-center p-2'>
            <h1 className='text-3xl font-normal text-center leading-8 p-2'>Why PhD Assistance</h1>
            <h3 className='text-3xl text-center font-normal leading-8 p-2'>A Trusted &amp; Academically Sound Mentors representing various Countries</h3>
          </div>
        </div>

        {/* <div className='w-[78vw] mx-5 h-[30vw] flex flex-col items-center'> */}
        <div className='mx-5 flex flex-col gap-5 md:flex-row'>
          <Card card={card1} heading={'Research Guidance / Mentoring'} desc={'Research Mentoring at all stages of your Research & Publications-Rewriting, Translating your ideas, copyediting, formatting or plagiarism check.'} />
          <Card card={card2} heading={'Across the Industries / Subjects'} desc={'Our team of PhD Experts has capabilities and skills to handle wide range of subjects from Arts & Literature, Engineering to Life Science. Explore More.'} />
          <Card card={card3} heading={'Statistics is Our Core'} desc={'Statistics is the core for any research & our statisticians are available at every stage of your research design (planning, collection, analysis & Interpretation).'} />
        {/* </div> */}
        </div>

      </div>
    </>
  )
}

export default AboutUs