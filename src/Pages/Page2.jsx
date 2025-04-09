import React from 'react'
import { MdOutlineContentPaste } from "react-icons/md";
import Button from '../Components/Button';
import BoxImage from '../Images/BoxImage';

const Page2 = () => {
  return (
    <div className='w-full'>
        <div className="w-full flex items-center justify-center my-14  px-32">
            <div className="px-12">
                  <h1 className='font-bold text-4xl'>Learn, Improve, Excel with the Detailed Explanations</h1>
                  <p className='font-medium text-base mt-12 mb-10'>Dive into detailed, expertly explained answers for every <br/> question! Discover what you nailed, where you slipped, <br /> and gain insights to sharpen your skills. Uncover the ‘why’ <br /> behind every answer and transform every mistake into a <br /> stepping stone to success!</p>

                  <Button Icon={MdOutlineContentPaste} title={"take your first free test"}/>
            </div>
            <div className="right">
                <BoxImage/>
            </div>
        </div>
       
    </div>
  )
}

export default Page2