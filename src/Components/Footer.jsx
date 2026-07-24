import React from 'react'

export default function Footer() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center bg-[#F1F1F1] h-15 shrink-0">
        <img className="h-10 ml-3" src="/public/Vidify-logo.png" alt="vidify logo" />
        <h1 className="text-xl ml-1 font-bold">Vidify</h1>
      </div>
      <p className='font-light mr-8'>Copyright © 2025 <span className='font-medium'>| Storeware |</span> Version 12.0.0 <span className='font-medium'>|</span></p>
    </div>
  )
}
