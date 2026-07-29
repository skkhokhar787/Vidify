import React from 'react'

function VidiBar() {
  return (
    <div className="flex items-center w-full bg-[#F1F1F1] h-12 md:h-15 shrink-0 px-3 md:px-0">
      <img className="h-8 md:h-10 ml-1 md:ml-3" src="/Vidify-logo.png" alt="vidify logo" />
      <h1 className="text-lg md:text-xl ml-1">Vidify</h1>
      <hr className="flex-1 ml-4 border-gray-300 hidden sm:block" />
    </div>
  )
}

export default VidiBar
