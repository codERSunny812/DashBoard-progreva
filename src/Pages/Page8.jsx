import React from 'react'
import End from '../Images/End'
import SpecialCardBg from '../Images/SpecialCardBg'
import Button from '../Components/Button'

const Page8 = () => {
  return (
    <div className='flex items-center justify-center mx-auto mb-5'>
        <div className="relative">
              <div className="w-1/2 relative top-52 left-5 text-white">
                  <h1 className='font-semibold text-3xl'>Invite your friends and watch the rewards roll in!</h1>
                  <p className='font-normal text-sm mt-3 mb-6'>For every friend who signs up, you earn bonus points. The more friends you bring, the bigger your rewards</p>

                  <div className="w-1/2">
                  <Button title={"invite friends"} />
                  </div>



              </div>
              <End />

        </div>
      
    
    </div>
  )
}

export default Page8