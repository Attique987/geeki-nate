import React from 'react'
import Start from '../assets/Stup.webp'


const Banner = () => {
  return (
    <>
    <div className=' flex justify-center items-center flex-col md:flex-row  md:gap-[35px] md:p-[15px] gap-[20px]' data-aos="fade-up">
        <div className=' w-[90%] md:w-[45%] md:h-[300px]'>
            <h1 className='text-[33px] font-semibold md:text-[37px]'>We are here to <span className='text-[#6DC77A]'>Geekinate</span> your needs</h1><br />
            <p className='text-[18px] text-[#8492A6]'>Geekinate is the process of getting your technology needs fulfilled by our team of Geeks.</p><br />
            <button className='bg-[#7bce86] text-[19px] rounded-[3px] px-[20px] py-[10px] font-medium text-[white]'data-aos="fade-up">Let's connect</button>
        </div>
        <div className=' w-[90%] md:w-[40%] md:h-[500px]'>
            <img src={Start} alt="" />
        </div>
    </div>
  
    </>
  )
}

export default Banner