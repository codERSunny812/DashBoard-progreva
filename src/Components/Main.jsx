import React from 'react'
import Page1 from '../Pages/Page1'
import Page2 from '../Pages/Page2'
import Page3 from '../Pages/Page3'
import Page4 from '../Pages/Page4'
import Page5 from '../Pages/Page5'
import Page6 from '../Pages/Page6'
import Page7 from '../Pages/Page7'
import Page8 from '../Pages/Page8'

const Main = () => {
  return (
    <div className='w-full'>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />

    
      <div className="hidden md:block">
        <Page8 />
      </div>
    </div>
  )
}

export default Main
