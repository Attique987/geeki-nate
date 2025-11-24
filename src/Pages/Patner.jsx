import React from 'react'
import Sort from '../assets/sortlist.webp'
import Aws from '../assets/awspartner.webp'
import Clutch from '../assets/clutch.webp'

const Patner = () => {
    return (
        <>
           <div class="custom-shape-divider-top-1763117861">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
    </svg>
</div>
            <div className='bg-[#202942] flex justify-center items-center flex-col gap-[20px] md:gap-[30px] p-[25px]'>
                <div className=' w-[90%] text-center h-[150px]'>
                    <h1 className='text-[29px] font-semibold text-[#ADB5BD]'>Collaborators and Partners</h1>
                </div>
                <div className=' flex flex-row md:gap-[100px] justify-center items-center'>
                    <div>
                        <img src={Sort} alt="" className='md:w-[50%]' />
                    </div>
                    <div>
                        <img src={Aws} alt="" className='md:w-[50%]' />
                    </div>
                    <div>
                        <img src={Clutch} alt="" className='md:w-[50%]' />
                    </div>
                </div>
            </div>
           
        </>
    )
}

export default Patner