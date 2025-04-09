import React from 'react'
import Card from '../Components/Card'

const Page5 = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 py-12">
      <div className="flex flex-col items-center justify-center gap-10">
        <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-4'>
          Choose A Plan That Suits You
        </h1>

        <div className="w-full md:flex md:flex-row md:items-center md:justify-center md:gap-8 hidden">

          <Card firstText={"one time test"} price={"49"} duration={"test"} />
          <Card firstText={"monthly"} price={"149"} duration={"mo"} alt={"save 47/-"} />
          <Card firstText={"Annually"} price={"1999"} duration={"yr"} alt={"save 549/-"} highlight={true} />
        </div>

        <div className="w-full flex gap-4 overflow-x-auto px-1 scrollbar-hide md:hidden">
          <div className="flex flex-nowrap gap-4">
            <Card firstText={"one time test"} price={"49"} duration={"test"} />
            <Card firstText={"monthly"} price={"149"} duration={"mo"} alt={"save 47/-"} />
            <Card firstText={"Annually"} price={"1999"} duration={"yr"} alt={"save 549/-"} highlight={true} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page5
