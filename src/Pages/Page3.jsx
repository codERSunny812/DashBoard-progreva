import React from 'react'
import LeaderShip from '../Images/LeaderShip'
import Button from '../Components/Button'
import { BsTrophyFill } from "react-icons/bs";

const Page3 = () => {
  return (
      <div className="bg-[#F7F7F7] flex items-center justify-center px-20">
        <div className="">
        <LeaderShip/>
        </div>
        <div className="">
        <h1 className='text-4xl/snug font-bold'>Score More, Earn More, Rule the Leaderboard!</h1>
        <p className='my-10 text-base/relaxed text-[#606060]'>Climb the leaderboard, unlock rewards, and showcase <br /> your skills! Rise to the top and gain exclusive perks as you <br /> dominate the competition!</p>
        <Button Icon={BsTrophyFill} title={"get started"}/>
        </div>
      </div>
  )
}

export default Page3;