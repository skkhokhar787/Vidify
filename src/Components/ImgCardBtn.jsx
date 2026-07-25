import React from "react";

function ImgCardBtn({ Icon, name }) {
  return (
    <div className="flex items-center gap-2 sm:gap-3 border w-fit px-3 sm:px-4 py-1.5 hover:cursor-pointer border-zinc-200 rounded-lg shadow-sm text-xs sm:text-sm">
      <Icon />
      <span className="whitespace-nowrap">{name}</span>
    </div>
  );
}

export default ImgCardBtn;
