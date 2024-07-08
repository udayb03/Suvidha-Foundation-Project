import React from 'react'
import Process from './Process'
import './Processes.css';
import { BsFillClockFill } from "react-icons/bs";

const Processes = () => {
  return (
    <div className="background px-44">
      <h2 className='ourProcessHeading'>Our Process</h2>
      <div className='processes'>
        <div className="row1">
          <div className="process">
              <Process icon="https://tse2.mm.bing.net/th?id=OIP.Eu1cKrM_QQRfOa36zA37yAHaHk&pid=Api&P=0&h=80"
                  heading="On-time delivery"
                  para="Thereby you can be assured of your submission"/>
          </div>
          <div className="process px-9">
              <Process icon="https://tse2.mm.bing.net/th?id=OIP.hdsiHU_INKVZlb2vweCL-AHaHa&pid=Api&P=0&h=180"
                  heading="100% Originality Guarantee"
                  para="All our writing works are scanned through plagiarism software and ensure that the document is delivered with 95-100% plagiarism free"/>
          </div>
        </div>
        <div className="row2">
          <div className="process">
              <Process icon="https://tse3.mm.bing.net/th?id=OIP.oGoSRK3IA5Y5Znb_SVj93wHaHa&pid=Api&P=0&h=180"
                  heading="Unlimited Revisions"
                  para="We offer unlimited revisions to the work being committed. Unlike being other competitors, we do not charge for the revisions"/>
          </div>
          <div className="process">
              <Process icon="https://tse4.mm.bing.net/th?id=OIP.AfSZUFp1_i0UgpTcI9veFQHaF1&pid=Api&P=0&h=180"
                  heading="Subject Matter Priortize"
                  para="We assign expert specific to the subject. Hence you need not worry about the quality of the work being delivered"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Processes