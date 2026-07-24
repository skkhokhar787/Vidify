import React from "react";

import TableBody from "./TableBody";
import dashboardData from "../utility/dashboardData";
import { NextSvgIcons, PrvSvgIcons } from "./AllSvgIcons";

export default function DashboardTable() {
  return (
    <div className="p-6 h-250">
      <div className="bg-white w-250 ml-7 rounded-xl shadow-sm overflow-x-auto">
        <div className="flex gap-6 px-6 py-4 border-b text-sm font-medium">
          <button className="text-black bg-[#ebebeb] rounded-xl p-2">
            Generate AI Videos
          </button>
          <button className="text-gray-400">View AI Videos</button>
        </div>
        <table className="w-full min-w-175 text-sm">
          <thead className="text-gray-500 border-b">
            <tr>
              <th className="text-left px-6 py-3">Product</th>
              <th className="text-left px-6 py-3">Images</th>
              <th className="text-left px-6 py-3">Status</th>
              <th className="text-left px-6 py-3">Inventory</th>
              <th className="text-left px-6 py-3">Progress</th>
              <th className="text-left px-6 py-3">Action</th>
            </tr>
          </thead>
          <TableBody data={dashboardData} />
        </table>

        <div className="flex justify-center gap-5 items-center px-6 py-4 text-xs text-gray-500">
          <div className="flex gap-2">
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
