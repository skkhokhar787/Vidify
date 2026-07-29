import React from "react";

export default function PriceStateCard() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 my-4 p-5 border border-zinc-300 shadow-sm bg-white rounded-2xl">
      <div>
        <h2 className="font-medium text-xl mb-2 flex flex-wrap items-center gap-2">
          Free
          <span className="bg-[#CDFEE1] text-[#0C5132] text-sm px-2 py-1 text-center rounded-2xl">
            Active
          </span>
        </h2>
        <p>
          Make <span>2 AI videos</span> per month
        </p>
      </div>
      <button
        type="button"
        className="w-full sm:w-auto sm:min-w-28 h-10 px-4 flex items-center justify-center cursor-pointer rounded-lg bg-zinc-200 hover:bg-zinc-300 transition-colors"
      >
        <p className="text-md sm:text-sm text-[#B5B5B5] whitespace-nowrap">Choose Free</p>
      </button>
    </div>
  );
}