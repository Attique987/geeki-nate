import React from 'react'
import Geek from '../assets/geek.svg'
import { FaCircleCheck } from "react-icons/fa6";

const About = () => {
  return (
  <div className=' flex flex-col justify-center items-center md:flex-row md:gap-[40px]' data-aos="fade-up" id='about'>
  <div className=' w-[90%] h-[400px] flex justify-center items-center md:w-[40%]'>
    <img src={Geek} alt="" className='w-[85%] md:w-[85%]' />
  </div>
    <div className=' w-[90%] md:w-[40%]'>
      <h1 className='text-[28px] font-semibold font-sans'>Who we are?</h1><br />
      <p className='text-[#8492A6]'>We are a team of geeks that provides exceptional technology solutions to businesses, startups, and enterprises. <br /><br />
      Our vision is to spread the power of technology across the globe and help businesses grow by delivering innovative software solutions. <br /><br />
      Following are the top priorities for us at Geekinate with an aim to build long term successful business relationships with our clients.</p><br />
    <p className=' text-[#8492A6] flex items-center gap-[10px]' data-aos="fade-left"><FaCircleCheck className='text-[#6DC77A]' />Quality</p>
    <p className=' text-[#8492A6] flex items-center gap-[10px]' data-aos="fade-left"><FaCircleCheck className='text-[#6DC77A]' />Customer Satisfaction</p>
    <p className=' text-[#8492A6] flex items-center gap-[10px]' data-aos="fade-left"><FaCircleCheck className='text-[#6DC77A]' />Efficient Communication</p>
    <p className=' text-[#8492A6] flex items-center gap-[10px]' data-aos="fade-left"><FaCircleCheck className='text-[#6DC77A]' />Professional Services & Support</p>
    </div>
  </div>
  )
}

export default About