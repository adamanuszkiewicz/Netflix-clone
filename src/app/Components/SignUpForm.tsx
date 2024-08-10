import React from 'react'
import { FaAngleRight } from "react-icons/fa6";
import Image from 'next/image'
function SignUpForm() {
  return (
    <div id='INPUT__WRAPPER' className='relative mt-10 flex flex-row gap-1'>
      
      <input placeholder="" className='outline-none text-white border-green-500 border bg-[#256be35b] rounded-md w-[350px] h-[55px] pl-[12px] align-bottom pt-6 '/>
      
      <label className='transition-all duration 600 ease-in-out pointer-events-none absolute text-[#b1acb1] top-[15px] left-[15px]'>Email Address: </label>
      
      <button className="transition-all duration-600 ease hover:cursor-pointer hover:bg-[#bb0e17] text-xl bg-[#f9020f] rounded-md w-[200px] h-[55px] text-white CENTER font-extrabold ">
        Get Started
        <FaAngleRight color='white' className='ml-3' />
        </button>
    </div>
  )
}

export default SignUpForm