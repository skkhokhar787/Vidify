import React from "react";
import { ArrowSvgIcons } from "./AllSvgIcons";

export default function InfoDocInnerCard({ DocIcon, Heading, Para, BgColor }) {
  return (
    <div className="flex items-center gap-2 sm:gap-3 mt-3 sm:mt-4 bg-white p-2 sm:p-2.5 rounded-xl sm:rounded-2xl md:rounded-full">
      <div
        className="p-1.5 sm:p-2 rounded-full w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center shrink-0"
        style={{ backgroundColor: BgColor }}
      >
        {DocIcon}
      </div>
      <div className="min-w-0 flex-1">
        <h2 className="font-semibold text-xs sm:text-sm md:text-base leading-tight">{Heading}</h2>
        <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 leading-snug">
          {Para}
        </p>
      </div>
      <div className="bg-[#f1f1f1] p-1.5 sm:p-2 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full shrink-0 transform ease-out duration-200 hover:cursor-pointer hover:scale-110">
        <ArrowSvgIcons />
      </div>
    </div>
  );
}
