import React from 'react'
import Card from '../Components/Card'

const Page5 = () => {
  return (
   <div className="">
    <div className="flex flex-col items-center justify-center gap-20">
    <h1 className='font-bold text-4xl'>Choose A Plan That Suites You</h1>
    <div className="cards flex gap-8">
    <Card
    firstText={"one time test"}
        price={"49"}
        duration={"test"}
    />

    <Card
        firstText={"monthly"}
        price={"149"}
        duration={"mo"}
        alt={"save 47/-"}
    />

    <Card
        firstText={"Anually"}
        price={"1999"}
        duration={"yr"}
        alt={"save 549/-"}
        highlight={true}
    />



    </div>
   
    </div>
   </div>
  )
}

export default Page5