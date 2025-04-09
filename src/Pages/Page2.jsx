// import React from 'react'
// import { MdOutlineContentPaste } from "react-icons/md";
// import Button from '../Components/Button';
// import BoxImage from '../Images/BoxImage';

// const Page2 = () => {
//   return (
//     <div className='w-full'>
//         <div className="w-full flex flex-col md:flex-row items-center justify-center my-14  px-32">
//             <div className="md:px-12">
//                   <h1 className='font-bold text-4xl'>Learn, Improve, Excel with the Detailed Explanations</h1>
//                   <p className='font-medium text-base mt-12 mb-10'>Dive into detailed, expertly explained answers for every <br/> question! Discover what you nailed, where you slipped, <br /> and gain insights to sharpen your skills. Uncover the ‘why’ <br /> behind every answer and transform every mistake into a <br /> stepping stone to success!</p>

//                   <Button Icon={MdOutlineContentPaste} title={"take your first free test"}/>
//             </div>
//             <div className="right">
//                 <BoxImage/>
//             </div>
//         </div>
       
//     </div>
//   )
// }

// export default Page2


import React from 'react'
import { MdOutlineContentPaste } from "react-icons/md";
import Button from '../Components/Button';
import BoxImage from '../Images/BoxImage';

const Page2 = () => {
  return (
    <div className='w-full'>
      <div className="w-full flex flex-col md:flex-row items-center justify-center my-14 px-6 md:px-32 gap-y-12">

        <div className="md:px-12  text-center md:text-left">
          <h1 className='font-bold text-3xl sm:text-4xl'>
            Learn, Improve, Excel with the Detailed Explanations
          </h1>

          <p className='font-medium text-base mt-6 md:mt-12 mb-8 md:mb-10 leading-relaxed'>
            Dive into detailed, expertly explained answers for every 
            question! Discover what you nailed, where you slipped, 
            and gain insights to sharpen your skills. Uncover the ‘why’ 
            behind every answer and transform every mistake into a 
            stepping stone to success!
          </p>

          <Button Icon={MdOutlineContentPaste} title={"take your first free test"} />
        </div>

        <div className="right w-full md:w-auto flex justify-center">
          <BoxImage />
        </div>
      </div>
    </div>
  )
}

export default Page2;
