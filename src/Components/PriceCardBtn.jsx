import React from "react";

function PriceCardBtn({bg,text, textColor}) {
  return (
    <div
      style={{ backgroundColor: bg, color: textColor }}
      className="border border-zinc-300 mt-4 mx-4 mb-4 cursor-pointer transition-transform ease-in-out duration-150 hover:scale-105 shadow-md flex justify-center rounded-lg p-2"
    >
      {text}
    </div>
  );
}

export default PriceCardBtn;