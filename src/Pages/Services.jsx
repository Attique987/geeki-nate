import React from 'react'
import { FaUserTie } from "react-icons/fa";
import { MdColorLens } from "react-icons/md";
import { FaLaptop } from "react-icons/fa6";
import { FaBullhorn } from "react-icons/fa";
import { hover, motion } from "motion/react"

const Services = () => {
  return (
    <>
      <br /><br /><br /><br />
      <div className='bg-[#F8F9FC] md:p-[30px] p-[18px] ' data-aos="fade-up">
        <div className='w-[100%] text-center'>
          <h1 className='text-[25px] font-semibold'>What we do?</h1><br />
          <p className='text-[#8492A6]'>We are a team of Geeks with great expertise</p>
        </div>
      </div>
      <div className=' flex justify-center items-center gap-[5px] md:gap-[25px] flex-col text-center md:flex-row bg-[#F8F9FC] md:h-[350px] '>
        <div className='w-[90%] md:w-[21%] md:h-[250px] h-[240px]'>
          <FaUserTie className='text-[30px] relative top-[45px] text-[#6DC77A] z-[1] m-auto' /><motion.div 
          animate ={{rotate:0}}
          whileHover={{ rotate:360 }}
            transition={{ duration: 3 ,}} 
            
            className='h-[65px] w-[60px] rotate-45 bg-[#EAF4EE] m-auto style={box}
            '>
          </motion.div><br />
          <span className='text-[#5BC069] text-[19px] font-semibold'>Tech-Consultancy</span><br />
          <p className='text-[#8492A6]'>We help you research, discover and define the ideal technology solution to your needs.</p>
        </div>
        <div className='w-[90%] md:w-[21%] md:h-[250px] h-[240px]'>
          <MdColorLens className='text-[30px] relative m-auto top-[45px] text-[#6DC77A] z-[1]' /><div className='h-[65px] w-[60px] rotate-45 bg-[#EAF4EE] m-auto'>
          </div><br />
          <span className='text-[#5BC069] text-[19px] font-semibold'>Design</span><br />
          <p className='text-[#8492A6]'>We use the industry best practices to design user centric software solutions.</p>
        </div>
        <div className='w-[90%] md:w-[22%] md:h-[250px] h-[240px]'>
          <FaLaptop className='text-[30px] relative m-auto top-[45px] text-[#6DC77A] z-[1]' /><div className='h-[65px] w-[60px] rotate-45 bg-[#EAF4EE] m-auto'>
          </div><br />
          <span className='text-[#5BC069] text-[19px] font-semibold'>Development</span><br />
          <p className='text-[#8492A6]'>We convert your requirements into fully functional Web, Mobile, or SAAS applications.</p>
        </div>
        <div className='w-[90%] md:w-[22%] md:h-[250px] h-[270px]'>
          <FaBullhorn className='text-[30px] relative m-auto top-[45px] text-[#6DC77A] z-[1] ' /><div className='h-[65px] w-[60px] rotate-45 bg-[#EAF4EE] m-auto'>
          </div><br />
          <span className='text-[#5BC069] text-[19px] font-semibold'>Digital Marketing</span><br />
          <p className='text-[#8492A6]'>We help you reach the right audience, build brand loyalty, and drive measurable results.</p>
        </div>
      </div>
    </>
  )
}

export default Services