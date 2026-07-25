import React from "react";
import TableBody from "./TableBody";
import dashboardData from "../utility/dashboardData";
import { NextSvgIcons, PrvSvgIcons } from "./AllSvgIcons";
import { Link } from "react-router-dom";

export default function DashboardTable() {
  return (
    <div className="p-3 sm:p-4 md:p-6">
      <div className="bg-white w-full rounded-xl shadow-sm overflow-hidden">
        <div className="flex gap-3 sm:gap-4 md:gap-6 px-3 sm:px-4 md:px-6 py-3 md:py-4 border-b text-xs sm:text-sm font-medium">
          <button className="text-black bg-[#ebebeb] rounded-lg md:rounded-xl px-3 py-1.5 md:p-2 whitespace-nowrap">
            Generate AI Videos
          </button>
          <Link to="/viewvideo" className="text-gray-400 hover:text-gray-600 whitespace-nowrap py-1.5 md:py-2">View AI Videos</Link>
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
            <TableBody data={dashboardData} />
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
  );
}
