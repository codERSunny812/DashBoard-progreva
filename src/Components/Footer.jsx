import React from 'react'
import Logo from "../Images/Logo";

const Footer = () => {
  return (
   <div className="">
      <div className="w-full bg-[#17221C] text-[#95CD4D]">
        <div className="uppper flex items-center justify-around py-4 border-b-2 border-amber-400 px-5">
          <div className="left">
            <div className="flex items-center gap-3">
            <Logo/> 
            <h1 className='capitalize font-semibold text-xl'>progace</h1>
            </div>
            <p className='mt-3 font-medium text-sm leading-5'>
              Our secure and user-friendly platform is designed for all levels of  <br />investors. With transparency and cutting-edge technology, we're your <br />partner in financial success. Join us today.
            </p>
          </div>
          <div className="right flex items-center gap-10 capitalize font-medium text-sm">
             <div className=" flex flex-col gap-1">
              <p>learn</p>
              <p>about</p>
              <p>disclaimer</p>
             </div>

            <div className=" flex flex-col gap-1">
              <p>blogs</p>
              <p>fAQ's</p>
              <p>privacy policy</p>
            </div>
          </div>
        </div>

        <h1>hello</h1>

    </div>
   </div>
  )
}

export default Footer