import React from 'react'

export default function Footer() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-2 bg-[#F1F1F1] px-4 py-2 shrink-0">
      <div className="flex items-center">
        <img className="h-8 md:h-10" src="/public/Vidify-logo.png" alt="vidify logo" />
        <h1 className="text-lg md:text-xl ml-1 font-bold">Vidify</h1>
      </div>
      <p className="font-light text-xs md:text-sm text-center sm:text-right">
        Copyright © 2025 <span className="font-medium">| Storeware |</span> Version 12.0.0 <span className="font-medium">|</span>
      </p>
    </div>
  )
}
