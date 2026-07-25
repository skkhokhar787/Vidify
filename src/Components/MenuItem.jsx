import React from "react";

function MenuItem({ name, Icon }) {
  return (
    <li className="flex items-center gap-3 p-2 rounded hover:cursor-pointer hover:ml-2 hover:bg-gray-500 hover:rounded-full hover:text-white transition-all duration-200 hover:shadow-md font-semibold hover:scale-105 text-right">
      <Icon />
      <span className="text-sm">{name}</span>
    </li>
  );
}

export default MenuItem;
