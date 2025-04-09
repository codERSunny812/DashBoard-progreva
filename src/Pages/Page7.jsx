import React from 'react'
import IconOne from '../Images/IconOne'
import { BsTrophyFill } from "react-icons/bs";
import Button from '../Components/Button'
import IconTwo from '../Images/IconTwo';
import IconThree from '../Images/IconThree';

const Page7 = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 mt-10 bg-[#F7F7F7] px-4 sm:px-6 md:px-10 py-10">


        <div className="icons flex flex-col sm:flex-row gap-6 sm:gap-10 items-center">
          <IconOne />
          <IconTwo />
          <IconThree />
        </div>


        <div className="text text-center md:text-left mt-10 md:mt-0">
          <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl'>
            Your Rewards, Your Choice
          </h1>
          <p className='font-medium text-base mt-5 mb-7 px-2 sm:px-0'>
            Generate an Amazon gift card, renew your subscription, or donate to Dada Chi Shala NGO.
          </p>

          <Button title={"start wining"} Icon={BsTrophyFill} />
        </div>
      </div>
    </div>
  );
};

export default Page7;
