import React from 'react'

function SimpleBtn({ text }) {
  return (
    <div className="p-2 border w-fit px-4 sm:px-6 my-3 sm:my-4 md:my-5 flex justify-center hover:cursor-pointer border-zinc-200 shadow-sm items-center rounded-lg font-medium text-xs sm:text-sm">
      {text}
    </div>
  )
}

export default SimpleBtn
