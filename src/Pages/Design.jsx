import React from 'react'
import Deign from '../assets/designer.svg'
import { FaCircleCheck } from "react-icons/fa6";

const Design = () => {
    return (
        <>
            <br /><br /><br /><br />
            <div className='bg-[#F8F9FC] flex justify-center items-center flex-col gap-[15px] md:flex-row md:gap-[55px] md:p-[30px]' data-aos="fade-up">
                <div className=' w-[90%] md:w-[40%]'>
                    <img src={Deign} alt="" />
                </div>
                <div className=' w-[90%] md:w-[43%]'>
                    <h1 className='text-[28px] fon'>Design</h1><br />
                    <p className='text-[#8492A6]'>We design delightful experiences that build user trust. Developing tailored solutions for your workflow from scratch, or enhancing an already existing product.</p><br />
                    <p className=' text-[#8492A6] flex items-center gap-[10px] md:leading-[30px]'data-aos="fade-left"><FaCircleCheck className='text-[#6DC77A]' />Research & Analysis</p>
                    <p className=' text-[#8492A6] flex items-center gap-[10px] md:leading-[30px]'data-aos="fade-left"><FaCircleCheck className='text-[#6DC77A]' />Modern User Interfaces</p>
                    <p className=' text-[#8492A6] flex items-center gap-[10px] md:leading-[30px]'data-aos="fade-left"><FaCircleCheck className='text-[#6DC77A]' />Focus On User Experience (UX)</p>
                    <p className=' text-[#8492A6] flex items-center gap-[10px] md:leading-[30px]'data-aos="fade-left"><FaCircleCheck className='text-[#6DC77A]' />Design Consistency</p>
                    <p className=' text-[#8492A6] flex items-center gap-[10px]'data-aos="fade-left"><FaCircleCheck className='text-[#6DC77A]' />Human-Centered Design</p>
                    <p className=' text-[#8492A6] flex items-center gap-[10px] md:leading-[30px]'data-aos="fade-left"><FaCircleCheck className='text-[#6DC77A]' />Prototyping</p>
                </div>
            </div>
            <br /><br /><br />
        </>
    )
}

export default Design