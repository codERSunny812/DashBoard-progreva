import React from 'react'
import Strength from '../Images/Strength'
import Button from '../Components/Button'
import { PiFlagPennantFill } from "react-icons/pi";

const Page4 = () => {
  return (
    <div className="">
      <div className="w-full flex flex-col md:flex-row items-center justify-center px-6 sm:px-12 md:px-20 lg:px-40 py-10 text-center md:text-left">
        <div className="left md:mr-10 mb-10 md:mb-0">
          <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl'>
            Unlock Your Personalized Growth Blueprint
          </h1>
          <p className='font-medium text-sm sm:text-base mt-4 mb-10 sm:mb-20'>
            Get feedback of your performance, including correct answers and areas for improvement
          </p>
          <Button Icon={PiFlagPennantFill} title={"get started"} />
        </div>

        <div className="right">
          <Strength />
        </div>
      </div>
    </div>
  )
}

export default Page4
