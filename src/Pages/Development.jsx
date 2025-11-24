import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import Seo from '../assets/SEO.svg'
const Development = () => {
    return (
        <div className=' flex justify-center items-center flex-col gap-[25px] md:flex-row md:gap-[30px]'data-aos="fade-up">
            <div className=' w-[90%] md:w-[44%]'>
                <h1 className='text-[32px] font-semibold'>Development</h1><br />
                <p className='text-[#8492A6] text-[17px]'>Our geeks are highly skilled in developing cutting edge software solutions ranging from simple business or personal portfolio websites to blogs, e-commerce solutions, CMS, plugin development, API development/integrations and SAAS product development.</p><br />
                <p className=' text-[#8492A6] flex items-center gap-[10px] md:leading-[30px]'data-aos="fade-left"><FaCircleCheck className='text-[#6DC77A]' />SAAS Product Development</p>
                <p className=' text-[#8492A6] flex items-center gap-[10px] md:leading-[30px]'data-aos="fade-left"><FaCircleCheck className='text-[#6DC77A]' />Web App Development</p>
                <p className=' text-[#8492A6] flex items-center gap-[10px] md:leading-[30px]'data-aos="fade-left"><FaCircleCheck className='text-[#6DC77A]' />Mobile App Development</p>
                <p className=' text-[#8492A6] flex items-center gap-[10px] md:leading-[30px]'data-aos="fade-left"><FaCircleCheck className='text-[#6DC77A]' />E-Commerce Development</p>
                <p className=' text-[#8492A6] flex items-center gap-[10px] md:leading-[30px]'data-aos="fade-left"><FaCircleCheck className='text-[#6DC77A]' />Custom Software Development</p>
                <p className=' text-[#8492A6] flex items-center gap-[10px]'data-aos="fade-left"><FaCircleCheck className='text-[#6DC77A]' />MVP Development</p>
                <p className=' text-[#8492A6] flex items-center gap-[10px] md:leading-[30px]'data-aos="fade-left"><FaCircleCheck className='text-[#6DC77A]' />Games, AR & VR Development</p>
            </div>
            <div className=' w-[90%] md:w-[40%]'>
                <img src={Seo} alt="" className='md:w-[80%]'/>
            </div>
        </div>
    )
}

export default Development