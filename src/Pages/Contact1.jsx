import React from 'react'
import Con from '../assets/contact.svg'

const Contact1 = () => {
  return (
    <>
    <br /><br />
    <div className=' flex justify-center items-center flex-col md:flex-row'data-aos="zoom-in-up">
        <div className=' w-[90%] md:w-[40%] md:h-[380px]'>
            <img src={Con} alt="" className='w-[80%] md:w-[70%]'/>

        </div><br />
        <div className=' w-[90%] md:w-[40%] border-1 border-zinc-300 rounded-[5px] md:h-[360px] p-[15px]'>
            <div className=' flex gap-[20px] justify-center items-center flex-col md:flex-row'>
                <div className=' w-[90%]'>
                    <label htmlFor="">Your Name</label><br />
                    <input type="text" className='border-1 w-[90%] rounded-[3px] h-[30px]' placeholder='Name'/>
                </div>
                <div className=' w-[90%]'>
                    <label htmlFor="">Your Email</label><br />
                    <input type="text" className='border-1 w-[90%] rounded-[3px] h-[30px]' placeholder='Email'/>
                </div>
            </div><br />
            <div className='flex justify-center items-center md:flex-none'>
                <div className='w-[90%] md:w-[100%]'>
                <label htmlFor="">Message</label><br />
                <textarea name="" id="" className='w-[90%] md:w-[96%] h-[120px] border-1' placeholder='Message'></textarea>
                </div>
            </div><br />
            <div className='flex justify-center items-center w-[95%] md:w-[100%]'>
            <button className='bg-[#6DC77A] w-[85%] rounded-[4px]  text-[white] md:w-[460px] mr-[10px] h-[37px] font-semibold'>Send Message</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact1