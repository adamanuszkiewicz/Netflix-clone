// import React from 'react'
import Image from 'next/image'
function Header() {
  return (
    <div className='flex flex-row justify-between items-center flex-wrap'>
      
      

      <img
          src="https://rb.gy/ulxxee"
          // width={100}
          // height={100}
          className="NF-logo"
        />


        <button className="transition-all duration-600 ease hover:cursor-pointer hover:bg-[#bb0e17] text-sm bg-[#f9020f] rounded-md w-[80px] h-[30px] text-white ">Sign In</button>
    </div>
  )
}

export default Header