import React from 'react'
import ProgressCard from '../Components/ProgressCard'
import Table from '../Components/Table'

function GenerateVideo() {
  return (
    <div className="flex flex-col flex-1 min-w-0 h-full overflow-y-auto">
      <div className="mx-3 sm:mx-4 md:mx-15 my-3 sm:my-4 md:my-5">
        <h1 className="font-bold text-lg sm:text-xl md:text-2xl">Welcome to Vidify</h1>
        <p className="text-xs sm:text-sm md:text-base text-gray-600">Enhance your video creation with the power of AI</p>
      </div>
      <ProgressCard Plan={"Scale 40 Videos/Month"} Limit={"35/40 Videos"} />
      <div>
        <Table />
      </div>
    </div>
  )
}

export default GenerateVideo
