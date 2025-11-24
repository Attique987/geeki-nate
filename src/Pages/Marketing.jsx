import React from 'react'
import Market from '../assets/marketing.svg'
import { FaCircleCheck } from "react-icons/fa6";

const Marketing = () => {
    return (
        <>
            <br /><br /><br />
            <div className='bg-[#F8F9FC] flex justify-center items-center flex-col md:flex-row gap-[20px] md:gap-[25px] p-[30px]'data-aos="fade-up">
                <div className=' w-[90%] md:w-[40%] md:h-[450px]'>
                    <img src={Market} alt="" className='md:w-[80%]'/>
                </div><br />
                <div className=' w-[90%] md:w-[40%] md:h-[450px]'>
                    <h1 className='text-[30px] font-semibold'>Digital Marketing</h1><br />
                    <p className='text-[#8492A6]'>We offer a range of services to help you reach your target audience, boost engagement, and increase conversions, all guided by in-depth analysis. Our team of experienced digital marketing specialists can help you with:</p><br />
                    <p className=' text-[#8492A6] flex items-center gap-[10px] md:leading-[30px]'data-aos="fade-left"><FaCircleCheck className='text-[#6DC77A]' />Social Media Management</p>
                    <p className=' text-[#8492A6] flex items-center gap-[10px] md:leading-[30px]'data-aos="fade-left"><FaCircleCheck className='text-[#6DC77A]' />Search Engine Optimization (SEO)</p>
                    <p className=' text-[#8492A6] flex items-center gap-[10px] md:leading-[30px]'data-aos="fade-left"><FaCircleCheck className='text-[#6DC77A]' />Content Marketing</p>
                    <p className=' text-[#8492A6] flex items-center gap-[10px] md:leading-[30px]'data-aos="fade-left"><FaCircleCheck className='text-[#6DC77A]' />Facebook Ads Management</p>
                    <p className=' text-[#8492A6] flex items-center gap-[10px] md:leading-[30px]'data-aos="fade-left"><FaCircleCheck className='text-[#6DC77A]' />Google Ads Management</p>
                    <p className=' text-[#8492A6] flex items-center gap-[10px]'data-aos="fade-left"><FaCircleCheck className='text-[#6DC77A]' />Tiktok Ads Management</p>
                </div>
            </div>
        </>
    )
}

export default Marketing