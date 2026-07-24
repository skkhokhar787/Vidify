import React from 'react'

function ProgressCard() {
  return (
    <>
    <div className="flex justify-center border-2 border-zinc-300 w-250 rounded-2xl ml-12 h-auto">
        <div className="bg-white w-250 h-auto p-5 rounded-xl">
        <div className="flex justify-between">
          <h2 className="flex items-center">
            Video Genrator <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="ml-1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 3.5C8 4.05228 7.55228 4.5 7 4.5C6.44772 4.5 6 4.05228 6 3.5C6 2.94772 6.44772 2.5 7 2.5C7.55228 2.5 8 2.94772 8 3.5Z"
                fill="#4A4A4A"
              />
              <path
                d="M7.75 6.25C7.75 5.83579 7.41421 5.5 7 5.5C6.58579 5.5 6.25 5.83579 6.25 6.25V10.75C6.25 11.1642 6.58579 11.5 7 11.5C7.41421 11.5 7.75 11.1642 7.75 10.75V6.25Z"
                fill="#4A4A4A"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM7 12.5C10.0376 12.5 12.5 10.0376 12.5 7C12.5 3.96243 10.0376 1.5 7 1.5C3.96243 1.5 1.5 3.96243 1.5 7C1.5 10.0376 3.96243 12.5 7 12.5Z"
                fill="#4A4A4A"
              /></svg>
          </h2>
          <div className="w-40 p-1 border hover:cursor-pointer border-zinc-200 text-center rounded-lg shadow-[0_5px_5px_rgba(0,0,0,0.2)]">
            <p>Upgrade your plan</p>
          </div>
        </div>
        <p>
          Current Plan: <span className="font-semibold">Explorer-2 AI Videos/Month</span>
        </p>
        <p className='text-zinc-400'>0/2 Videos</p>
        <div className="w-full bg-gray-300 h-3 rounded-xl mt-2">
          <div className="bg-[#29845a] h-3 w-[70%] rounded-xl transition-all duration-500"></div>
        </div>
      </div>
      </div>
    </>
  )
}

export default ProgressCard;

