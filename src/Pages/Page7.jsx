import React from 'react'
import IconOne from '../Images/IconOne'
import { BsTrophyFill } from "react-icons/bs";
import Button from '../Components/Button'
import IconTwo from '../Images/IconTwo';
import IconThree from '../Images/IconThree';

const Page7 = () => {
  return (
    <div>
          <div className=" flex items-center justify-center gap-20 mt-10 bg-[#F7F7F7] p-10">
            <div className="icons flex gap-10">
                <IconOne/> 
                <IconTwo/>
                <IconThree/>
            </div>

            <div className="text my-10">
                  <h1 className='font-bold text-4xl'>Your Rewards, Your Choice</h1>
                  <p className='font-medium text-bas my-7'>Generate an Amazon gift card, renew your subscription, or donate to Dada Chi Shala NGO.</p>

                  <Button  title={"start wining"} Icon={BsTrophyFill}/>
            </div>
        </div>
    </div>
  )
}

export default Page7