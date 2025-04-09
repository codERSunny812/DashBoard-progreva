import React from 'react'
import Strength from '../Images/Strength'
import Button from '../Components/Button'
import { PiFlagPennantFill } from "react-icons/pi";


const Page4 = () => {
  return (
   <div className="">
    <div className="w-full flex items-center justify-center px-40">
        <div className="left">
        <h1 className='font-bold text-4xl'>Unlock Your Personalized Growth Blueprint</h1>
        <p className='font-medium text-base mt-4 mb-20'>Get feedback of your performance, including correct answers and areas for improvement</p>

        <Button Icon={PiFlagPennantFill} title={"get started"}/>

        </div>
        <div className="rigth">
            <Strength/>
        </div>
    </div>
   </div>
  )
}

export default Page4