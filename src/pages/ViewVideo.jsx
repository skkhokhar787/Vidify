import React, { useMemo, useState } from 'react'
import ProgressCard from '../Components/ProgressCard'
import TableBody from '../Components/TableBody'
import dashboardData from '../utility/dashboardData'
import { NextSvgIcons, PrvSvgIcons } from '../Components/AllSvgIcons'
import { Link } from 'react-router-dom'
import ViewVideoPopUp from '../Components/ViewVideoPopUp'

function ViewVideo() {
  const [showPopup, setShowPopup] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState(null)

  const completedVideos = useMemo(
    () => dashboardData.filter((item) => item.progress === "Completed" || item.progress === "In Progress"),
    []
  )

  const handleViewVideo = (item) => {
    setSelectedVideo(item)
    setShowPopup(true)
  }

  return (
    <div className="flex flex-col flex-1 min-w-0 min-h-0 relative">
      <div className="flex flex-col flex-1 min-w-0 h-full overflow-y-auto">
        <div className="mx-3 sm:mx-4 md:mx-15 my-3 sm:my-4 md:my-5">
          <h1 className="font-bold text-lg sm:text-xl md:text-2xl">Welcome to Vidify</h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-600">Enhance your video creation with the power of AI</p>
        </div>
        <ProgressCard Plan={"Scale 40 Videos/Month"} Limit={"35/40 Videos"} />
        <div className="p-3 sm:p-4 md:p-6">
          <div className="bg-white w-full rounded-xl shadow-sm overflow-hidden">
            <div className="flex gap-3 sm:gap-4 md:gap-6 px-3 sm:px-4 md:px-6 py-3 md:py-4 border-b text-xs sm:text-sm font-medium">
              <Link to="/generate" className="text-gray-400 hover:text-gray-600 whitespace-nowrap py-1.5 md:py-2">
                Generate AI Videos
              </Link>
              <button className="text-black bg-[#ebebeb] rounded-lg md:rounded-xl px-3 py-1.5 md:p-2 whitespace-nowrap">
                View AI Videos
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-150 text-xs sm:text-sm">
                <thead className="text-gray-500 border-b">
                  <tr>
                    <th className="text-left px-3 sm:px-4 md:px-6 py-2.5 md:py-3">Product</th>
                    <th className="text-left px-3 sm:px-4 md:px-6 py-2.5 md:py-3">Images</th>
                    <th className="text-left px-3 sm:px-4 md:px-6 py-2.5 md:py-3">Status</th>
                    <th className="text-left px-3 sm:px-4 md:px-6 py-2.5 md:py-3">Inventory</th>
                    <th className="text-left px-3 sm:px-4 md:px-6 py-2.5 md:py-3">Progress</th>
                    <th className="text-left px-3 sm:px-4 md:px-6 py-2.5 md:py-3">Action</th>
                  </tr>
                </thead>
                <TableBody data={completedVideos} onViewVideo={handleViewVideo} />
              </table>
            </div>

            <div className="flex justify-center gap-4 sm:gap-5 items-center px-3 sm:px-4 md:px-6 py-3 md:py-4 text-[10px] sm:text-xs text-gray-500 border-t">
              <div className="flex gap-2 items-center">
                <button className="px-2 py-1 border rounded-tl-md rounded-bl-md">
                  <PrvSvgIcons />
                </button>
                <span>1 of 2 pages</span>
                <button className="px-2 py-1 border rounded-tr-md rounded-br-md">
                  <NextSvgIcons />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <ViewVideoPopUp onClose={() => setShowPopup(false)} video={selectedVideo} />
      )}
    </div>
  )
}

export default ViewVideo
