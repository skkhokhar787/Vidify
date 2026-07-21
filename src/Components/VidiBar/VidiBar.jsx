import React from 'react'

function VidiBar() {
  return (
    <div className="flex flex-col flex-1 min-w-0 overflow-y-auto">
      <div className="flex items-center w-full bg-[#F1F1F1] h-15  shrink-0">
        <img className="h-10 ml-3" src="/public/Vidify-logo.png" alt="vidify logo" />
        <h1 className="text-xl ml-1">Vidify</h1>
      </div>
      <hr className='w-[95%] ml-6' />
    </div>
  )
}

export default VidiBar