import React from "react";
import ProductSVGIcon, { EyeSvgIcons, ProgressSvgIcons, RectangleSvgIcons, VideoSvgIcons } from "./AllSvgIcons";

const StatusBadge = ({ text }) => (
  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
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
    <span className={`text-xs px-2 py-1 rounded-full ${styles[text]}`}>
      {text}
    </span>
  );
};

const ActionButton = ({ progress }) => {
  if (progress === "In Progress" || progress === "Completed") {
    return (
      <div className="flex gap-3">
      <EyeSvgIcons /> <ProgressSvgIcons />
      </div>
    );
  }

  return (
    <div className="flex gap-3">
    <EyeSvgIcons /> <VideoSvgIcons />
    </div>
  );
};

export default function TableBody({ data }) {
  return (
    <tbody>
      {data.map((item) => (
        <tr key={item.id} className="border-b hover:bg-gray-50">
          <td className="px-6 py-4 flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-200 rounded">
                <img src={item.pic} alt="" />
            </div>
            {item.name}
          </td>

          <td className="px-6 py-4">{item.images} Images</td>

          <td className="px-6 py-4">
            <StatusBadge text={item.status} />
          </td>

          <td className="px-6 py-4 text-gray-600">
            {item.stock}
          </td>

          <td className="px-6 py-4">
            <ProgressBadge text={item.progress} />
          </td>

          <td className="px-6 py-4">
            <ActionButton progress={item.progress} />
          </td>
        </tr>
      ))}
    </tbody>
  );
}