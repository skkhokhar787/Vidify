import React from "react";
import { ImgDemoSvgIcons, VideoSvgIcons } from "./AllSvgIcons";
import ImgCardBtn from "./ImgCardBtn";

function MakeVideoPopUp({ onClose }) {
  return (
    <div className="absolute inset-0 z-25">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
        onClick={onClose}
      />
      <div className="relative bg-white flex flex-col justify-self-center my-8 sm:my-16 md:my-20 lg:my-28 rounded-2xl shadow-2xl w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-200 mx-auto p-4 sm:p-6 md:p-8 z-10">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl leading-none"
        >
          &times;
        </button>
        <h2 className="text-base sm:text-lg md:text-xl font-bold mb-2">Make AI Video</h2>

        <div className="flex flex-wrap justify-center sm:justify-around gap-3 sm:gap-4">
          {["m_img01", "m_img02", "m_img03", "m_img04"].map((img, i) => (
            <div key={i} className="relative">
              <img
                className="w-16 h-18 sm:w-20 sm:h-22 rounded-2xl object-cover"
                src={`/${img}.png`}
                alt=""
              />
              <div className={`absolute top-2 right-2 ${i === 0 ? "bg-black/60" : "bg-white border border-zinc-300"} rounded-sm p-1.5`}>
                {i === 0 && (
                  <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.03033 0.21967C8.32322 0.512563 8.32322 0.987437 8.03033 1.28033L3.53033 5.78033C3.23744 6.07322 2.76256 6.07322 2.46967 5.78033L0.21967 3.53033C-0.0732233 3.23744 -0.0732233 2.76256 0.21967 2.46967C0.512563 2.17678 0.987437 2.17678 1.28033 2.46967L3 4.18934L6.96967 0.21967C7.26256 -0.0732233 7.73744 -0.0732233 8.03033 0.21967Z" fill="white" />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="border-2 mt-5 sm:mt-7 border-zinc-300 flex flex-col sm:flex-row gap-3 sm:gap-4 rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
          <img className="w-full sm:w-1/2 h-48 sm:h-80 md:h-100 rounded-2xl object-cover" src="/m_img01.png" alt="" />
          <div className="w-full sm:w-1/2 flex justify-center items-center rounded-2xl bg-[#F7F7F7] h-48 sm:h-80 md:h-100">
            <ImgDemoSvgIcons />
          </div>
        </div>

        <h2 className="ml-3 text-sm sm:text-base">Video Prompt <span className="font-light">(Optional)</span></h2>
        <div className="border border-zinc-300 pl-2 text-zinc-500 pt-1 rounded-2xl h-16 sm:h-20 md:h-25 mb-6 sm:mb-8 md:mb-10 text-sm">
          Share your vision in a few clear words
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-3 items-end sm:items-center">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm rounded-lg hover:bg-gray-50 w-full sm:w-auto"
          >
            Cancel
          </button>
          <ImgCardBtn Icon={VideoSvgIcons} name={"Generate AI Video"} bg={"#3e3e3e"} textColor={"white"} iconColor={"white"} />
        </div>
      </div>
    </div>
  );
}

export default MakeVideoPopUp;
