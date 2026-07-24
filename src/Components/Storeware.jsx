import React, { useState } from 'react'
import OtherAppsCard from './OtherAppsCard'
import { otherAppData } from '../utility/data'
import { NextSvgIcons, PrvSvgIcons } from './AllSvgIcons'

function Storeware() {
  const [idx, setIdx] = useState(0)
  const isFirstItem = idx === 0
  const isLastItem = idx === otherAppData.length - 1

  const handleNext = () => {
    setIdx((prevIdx) => (prevIdx < otherAppData.length - 1 ? prevIdx + 1 : prevIdx))
  }

  const handlePrev = () => {
    setIdx((prevIdx) => (prevIdx > 0 ? prevIdx - 1 : prevIdx))
  }

  return (
    <>
      <div className='bg-white rounded-2xl mt-6 w-250 ml-12 '>
        <h1 className='font-bold ml-6 mb-3 mt-4'>Other apps from Storeware</h1>
        <OtherAppsCard cardData={otherAppData[idx]} />
        <div className='flex gap-4 justify-end p-4 bg-[#f7f7f7] w-full h-12 rounded-bl-2xl rounded-br-2xl'>
          <div className='p-2 cursor-pointer' onClick={handlePrev}>
            <PrvSvgIcons
            disabled={isFirstItem}
            className={` ${isFirstItem ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
          />
          </div>
          <div className='p-2 cursor-pointer' onClick={handleNext}>
            <NextSvgIcons
            disabled={isLastItem}
            className={` ${isLastItem ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
          />
          </div>
        </div>
      </div>
    </>
  )
}

export default Storeware