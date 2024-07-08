import React from 'react'
import Cardref from './Cardref'
import './Cards.css';
// import cards1 from './../assets/cards1.jpg'

const Cards = () => {
  return (
    <div className="cards flex  gap-4 bg-red-600 w-full p-14">
      <div className="left w-1/2">
       <Cardref className="card-1" 
        title="RESEARCH MENTORING, DATA ANALYTICS & CONSULTING SERVICES" 
        description="For Students, Research Scholars, Authors & Publishers accross the domain" 
        image="https://www.phdassistance.com/wp-content/uploads/2014/11/home_languageschool_course1.jpg"
       />
      </div>
      <div className="right w-1/2 flex gap-2">
        <div className="card-2 w-[92%]">
          <Cardref 
            title="Our Core lies in   Tutoring and Mentoring" 
            description="We Translate Our Knowledge & Skills ton Students accrossthe world" 
            image="https://www.phdassistance.com/wp-content/uploads/2020/09/home_languageschool_course4.jpg"/>
        </div>
        <div className="card-2 w-[92%]">
          <Cardref
            title="Highly Commendable PhD Research" 
            description="We work to help you prepare at every stageof yourresearch, to ensure that you're capable to deliver high quality Thesis/Dissertation" 
            image="https://www.phdassistance.com/wp-content/uploads/2014/11/home_languageschool_course3.jpg"/>
        </div>
      </div>
    </div>
  )
}

export default Cards

// https://www.phdassistance.com/wp-content/uploads/2014/11/home_languageschool_course1.jpg