import React from "react";
import { ArrowSvgIcons } from "./AllSvgIcons";

export default function InfoDocInnerCard({DocIcon, Heading, Para, BgColor}) {
  return (
    <>
      <div className="flex items-center justify-between gap-3 mt-5 bg-white p-2 rounded-full">
            <div
              className="p-2 rounded-full w-10 h-10 flex items-center justify-center"
              style={{ backgroundColor: BgColor }}
            >
              {DocIcon}
            </div>
            <div className="min-w-0 flex-1 ml-2">
              <h2 className="font-semibold">{Heading}</h2>
              <p>
                {Para}
              </p>
            </div>
            <div className="bg-[#f1f1f1] p-2 w-10 h-10 flex items-center justify-center rounded-full shrink-0 transform ease-out duration-200 hover:cursor-pointer hover:scale-120">
              <ArrowSvgIcons />
            </div>
          </div>
    </>
  );
}
