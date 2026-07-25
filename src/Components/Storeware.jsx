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
    <div className="mx-3 sm:mx-6 md:mx-12 mt-5 md:mt-6">
      <div className="bg-white border border-zinc-300 rounded-xl md:rounded-2xl w-full overflow-hidden">
        <h1 className="font-bold text-sm sm:text-base md:text-lg ml-3 sm:ml-4 md:ml-6 mt-3 md:mt-4 mb-2 md:mb-3">Other apps from Storeware</h1>
        <OtherAppsCard cardData={otherAppData[idx]} />
        <div className="flex gap-3 sm:gap-4 justify-end p-3 sm:p-4 bg-[#f7f7f7] w-full h-10 sm:h-12 rounded-bl-xl rounded-br-xl md:rounded-bl-2xl md:rounded-br-2xl">
          <div className="p-1.5 sm:p-2 cursor-pointer" onClick={handlePrev}>
            <PrvSvgIcons
              disabled={isFirstItem}
              className={`${isFirstItem ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
            />
          </div>
          <div className="p-1.5 sm:p-2 cursor-pointer" onClick={handleNext}>
            <NextSvgIcons
              disabled={isLastItem}
              className={`${isLastItem ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Storeware
