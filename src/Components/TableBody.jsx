import React from "react";
import { EyeSvgIcons, ProgressSvgIcons, VideoSvgIcons } from "./AllSvgIcons";

const StatusBadge = ({ text }) => (
  <span className="bg-green-100 text-green-700 text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full whitespace-nowrap">
    {text}
  </span>
);

const ProgressBadge = ({ text }) => {
  const styles = {
    "Not Generated": "bg-gray-100 text-gray-600",
    "In Progress": "bg-blue-100 text-blue-700",
    Completed: "bg-green-100 text-green-700",
  };

  return (
    <span className={`text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full whitespace-nowrap ${styles[text]}`}>
      {text}
    </span>
  );
};

const ActionButton = ({ progress }) => {
  if (progress === "In Progress" || progress === "Completed") {
    return (
      <div className="flex gap-2 sm:gap-3">
        <EyeSvgIcons /> <ProgressSvgIcons />
      </div>
    );
  }

  return (
    <div className="flex gap-2 sm:gap-3">
      <EyeSvgIcons /> <VideoSvgIcons />
    </div>
  );
};

export default function TableBody({ data }) {
  return (
    <tbody>
      {data.map((item) => (
        <tr key={item.id} className="border-b hover:bg-gray-50">
          <td className="px-3 sm:px-4 md:px-6 py-3 md:py-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 rounded shrink-0">
                <img src={item.pic} alt="" />
              </div>
              <span className="whitespace-nowrap text-xs sm:text-sm">{item.name}</span>
            </div>
          </td>

          <td className="px-3 sm:px-4 md:px-6 py-3 md:py-4 whitespace-nowrap text-xs sm:text-sm">{item.images} Images</td>

          <td className="px-3 sm:px-4 md:px-6 py-3 md:py-4">
            <StatusBadge text={item.status} />
          </td>

          <td className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-gray-600 whitespace-nowrap text-xs sm:text-sm">
            {item.stock}
          </td>

          <td className="px-3 sm:px-4 md:px-6 py-3 md:py-4">
            <ProgressBadge text={item.progress} />
          </td>

          <td className="px-3 sm:px-4 md:px-6 py-3 md:py-4">
            <ActionButton progress={item.progress} />
          </td>
        </tr>
      ))}
    </tbody>
  );
}
