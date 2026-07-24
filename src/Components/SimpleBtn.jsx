import React from 'react'

function SimpleBtn({text}) {
  return (
    <div className="p-2 border w-50 my-5 flex justify-center  hover:cursor-pointer border-zinc-200 shadow-[2px_5px_10px_rgba(0,0,0,0.2)] items-center rounded-lg font-medium">{text}</div>
  )
}

export default SimpleBtn