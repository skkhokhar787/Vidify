import React from "react";

function ImgCardBtn({ Icon, name }) {
  return (
    <div className="flex items-center gap-3 border mt-10 w-45 p-1.5 hover:cursor-pointer border-zinc-200 rounded-lg shadow-[2px_5px_10px_rgba(0,0,0,0.2)]">
      <Icon />
      <span>{name}</span>
    </div>
  );
}

export default ImgCardBtn;
