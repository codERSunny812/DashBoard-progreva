import React from 'react'
import LeaderShip from '../Images/LeaderShip'
import Button from '../Components/Button'
import { BsTrophyFill } from "react-icons/bs";

const Page3 = () => {
  return (
    <div className="bg-[#F7F7F7] flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-10 gap-y-12">

      <div className="w-full md:w-auto flex justify-center">
        <LeaderShip />
      </div>

      <div className="text-center md:text-left">
        <h1 className='text-3xl sm:text-4xl font-bold leading-snug'>
          Score More, Earn More, Rule the Leaderboard!
        </h1>

        <p className='my-6 md:my-10 text-base text-[#606060] leading-relaxed'>
          Climb the leaderboard, unlock rewards, and showcase <br />
          your skills! Rise to the top and gain exclusive perks as you <br />
          dominate the competition!
        </p>

        <Button Icon={BsTrophyFill} title={"get started"} />
      </div>
    </div>
  )
}

export default Page3;
