import React from 'react'
import Geek from '../assets/geekinate-logo.webp'
import Us from '../assets/us.svg'
import { FaMapMarkerAlt } from "react-icons/fa";
import { TbPhone } from "react-icons/tb";
import Pak from '../assets/pak.svg'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


const Last = () => {
  return (
    <>
    <br /><br />
    <div className='bg-[#202942] flex justify-center items-center flex-col md:gap-[25px] gap-[30px] md:flex-row md:p-[20px] p-[10px]'>
        <div className=' w-[88%] md:w-[29%] md:h-[350px]'>
            <img src={Geek} alt="" className='w-[50%]'/><br />
            <p className='flex items-center text-[14px] md:text-[17px] gap-[5px] text-[#8492A6]'><img src={Us} alt="" className='w-[12%]'/> USA - Head Office</p><br />
            <p className='flex justify-center gap-[5px] text-[#8492A6]'><FaMapMarkerAlt className='text-[29px]'/>172 Woodport Road, Suite A #442, Sparta, New Jersey, 07871, USA.</p><br />
            <p className='flex items-center text-[#5BC069]'><TbPhone  className='text-[#8492A6]'/>+1 (512) 900-6431</p>
        </div>
        <div className=' w-[90%] md:w-[31%] md:h-[200px]'>
          <p className='flex items-center md:text-[17px] text-[14px] gap-[5px] text-[#8492A6]'> <img src={Pak} alt="" className='w-[12%]'/> Pakistan</p><br />
           <p className='flex justify-center gap-[5px] text-[#8492A6]'><FaMapMarkerAlt className='text-[25px]'/>Twinhub, 4th Floor, The Interlace, I-8 Markaz, Islamabad</p><br />
            <p className='flex items-center text-[#5BC069]'><TbPhone  className='text-[#8492A6]'/>+92 333 5388734</p>
        </div>
        <div className=' w-[90%] md:w-[31%] md:h-[200px] h-[150px]'>
          <p className='text-[#8492A6] text-[19px]'>Stay in Touch</p><br />
          <p className='flex gap-[10px] group-[hover]:'>
          <FaFacebookSquare className='text-[25px] text-[#8492A6]'/>
          <FaSquareInstagram className='text-[25px] text-[#8492A6]'/>
          <FaSquareTwitter className='text-[25px] text-[#8492A6]'/>
          <FaLinkedin className='text-[25px] text-[#8492A6]'/>
          </p>
        </div>
    </div>
    <p className='flex justify-center items-center bg-[#202942] text-[#8492A6] text-[19px]'>© 2025 Geekinate.</p>
    </>
  )
}

export default Last