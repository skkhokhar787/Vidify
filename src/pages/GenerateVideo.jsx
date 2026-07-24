import React from 'react'
import ProgressCard from '../Components/ProgressCard'
import Table from '../Components/Table'
function GenerateVideo() {
  return (
    <div className="flex flex-col flex-1 min-w-0 h-full overflow-y-auto">
      <div className="mx-15 my-5 ">
        <h1 className="font-bold text-2xl">Welcome to Vidify</h1>
        <p>Enhance your video creation with the power of AI</p>
      </div>
      <ProgressCard Plan={"Scale 40 Videos/Month"} Limit={"35/40 Videos"}/>
      <div>
        <Table />
      </div>
    </div>
  )
}

export default GenerateVideo