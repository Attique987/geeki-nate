import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import Test from '../assets/test.webp'

const Service1 = () => {
  return (
    <>
    <br /><br />
    <div className=' flex justify-center items-center flex-col gap-[25px] md:flex-row md:gap-[30px]'data-aos="fade-up">
        <div className=' w-[90%] md:h-[420px] md:w-[44%]'>
            <h1 className='text-[24px] font-normal md:text-[30px] md:font-semibold'>Tech Consultancy</h1><br />
            <p className='text-[#8492A6]'>We help organizations make use of technology to support their business goals. We collaborate with you to undertake idea validation, understand your requirements, and define scope. Our goal is to help you discover how our tech solutions can help you reduce business costs, create new revenue streams, streamline operations, and improve customer service.</p><br />
            <p className=' text-[#8492A6] flex items-center gap-[10px] md:leading-[30px]'data-aos="fade-left"><FaCircleCheck className='text-[#6DC77A]'/>Idea Validation</p>
            <p className=' text-[#8492A6] flex items-center gap-[10px] md:leading-[30px]'data-aos="fade-left"><FaCircleCheck className='text-[#6DC77A]'/>Defining Scope</p>
            <p className=' text-[#8492A6] flex items-center gap-[10px] md:leading-[30px]'data-aos="fade-left"><FaCircleCheck className='text-[#6DC77A]'/>Building concrete requirements</p>
            <p className=' text-[#8492A6] flex items-center gap-[10px] md:leading-[30px]'data-aos="fade-left"><FaCircleCheck className='text-[#6DC77A]'/>Technical evaluation</p>
            <p className=' text-[#8492A6] flex items-center gap-[10px] md:leading-[30px]'data-aos="fade-left"><FaCircleCheck className='text-[#6DC77A]'/>Resource Allocation</p>
            <p className=' text-[#8492A6] flex items-center gap-[10px]'data-aos="fade-left"><FaCircleCheck className='text-[#6DC77A]'/>Project Management</p>
            <p className=' text-[#8492A6] flex items-center gap-[10px] md:leading-[30px]'data-aos="fade-left"><FaCircleCheck className='text-[#6DC77A]'/>Rapid Prototyping</p>
        </div>
        <div className=' w-[90%] md:h-[300px] md:w-[44%]'>
            <img src={Test} alt="" className='w-[80%]'/>
        </div>
    </div>
    </>
  )
}

export default Service1 