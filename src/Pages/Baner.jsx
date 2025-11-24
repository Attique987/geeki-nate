import React from 'react'
import Ama from '../assets/amazon.svg'
import Rea from '../assets/reac.svg'
import Mono from '../assets/mongodb.svg'
import Nod from '../assets/node.svg'
import Unit from '../assets/unity.svg'
const Baner = () => {
  return (
    <>
    <br /><br />
    <div className=' flex-wrap flex md:flex-row justify-center items-center gap-[20px] md:gap-[5px]'>
      <div className='w-[40%] md:w-[18%] flex justify-center items-center'>
        <img src={Ama} alt="" className='w-[50%] md:w-[40%]'/>
        </div>
      <div className='w-[40%] md:w-[18%]  flex justify-center items-center'>
        <img src={Rea} alt="" className='w-[50%] md:w-[40%]'/>
        </div>
      <div  className='w-[40%] md:w-[18%] flex justify-center items-center'>
        <img src={Mono} alt="" className='w-[50%] md:w-[40%]'/>
        </div>
      <div  className='w-[40%] md:w-[18%] flex justify-center items-center'> 
        <img src={Nod} alt="" className='w-[50%] md:w-[40%]'/>
        </div>
      <div  className='w-[40%] md:w-[18%] flex justify-center items-center'>
        <img src={Unit} alt="" className='w-[50%] md:w-[40%]'/>
        </div>
    </div>
    <br /><br />
    <hr />
    <br />

    </>
  )
}

export default Baner