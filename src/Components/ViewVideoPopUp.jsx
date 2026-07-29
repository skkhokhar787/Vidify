import React from "react";
import { PlayIconSvgIcons, VideoSvgIcons } from "./AllSvgIcons";
import ImgCardBtn from "./ImgCardBtn";
import VideoThumbnail from "./VideoThumbnail";

function ViewVideoPopUp({ onClose, video }) {
  if (!video) return null;

  return (
    <div className="absolute inset-0 z-25">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
        onClick={onClose}
      />
      <div className="relative bg-white flex flex-col justify-self-center my-8 sm:my-12 md:my-16 lg:my-20 rounded-2xl shadow-2xl w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-200 mx-auto z-10 overflow-y-auto max-h-[90vh]">
        <div className="bg-[#F3F3F3] rounded-tl-2xl rounded-tr-2xl flex items-center px-4 sm:px-5 py-3 sm:py-4">
          <h2 className="text-base sm:text-lg md:text-xl font-bold">
            Product Name
          </h2>
          <button
            onClick={onClose}
            className="ml-auto text-gray-400 hover:text-gray-600 text-xl leading-none cursor-pointer"
          >
            &times;
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center sm:justify-around gap-2 sm:gap-3 p-2 sm:p-3">
          {["Video 1", "Video 2", "Video 3", "Video 4"].map((v, i) => (
            <p key={i} className="font-medium text-xs sm:text-sm whitespace-nowrap">{v}</p>
          ))}
          <p className="font-medium bg-[#ebebeb] p-2 rounded-2xl text-xs sm:text-sm whitespace-nowrap">
            Video 5
            <span className="text-blue-500 ml-1 sm:ml-3 bg-[#f2f2f2] p-1 rounded-2xl text-xs">
              Latest
            </span>
          </p>
        </div>

        <hr className="w-[90%] mx-auto mb-4 sm:mb-6 md:mb-8 border-zinc-300" />

        <div className="flex flex-col sm:flex-row justify-between px-4 sm:px-7 mb-4">
          <h2 className="font-medium text-sm sm:text-base">AI Product Videos</h2>
          <p className="text-xs sm:text-sm text-gray-500">29/7/2026</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 px-4 sm:px-7">
          <div className="w-full md:w-1/2">
            <label className="block mb-1 text-xs sm:text-sm font-medium">Version 1</label>
            <VideoThumbnail img={"/public/m_img01.png"} />
          </div>
          <div className="w-full md:w-1/2">
            <label className="block mb-1 text-xs sm:text-sm font-medium">Version 2</label>
            <VideoThumbnail img={"/public/m_img03.png"} />
          </div>
        </div>

        <hr className="w-[90%] mx-auto mt-4 sm:mt-6 mb-4 sm:mb-6 md:mb-8 border-zinc-300" />

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 px-4 sm:px-7 pb-4">
          <div className="flex gap-4 sm:gap-6">
            <div>
              <label className="text-xs sm:text-sm font-medium">Start Image</label>
              <img className="w-16 h-20 sm:w-22 sm:h-25 rounded-lg object-cover mt-1" src="/public/m_img01.png" alt="" />
            </div>
            <div>
              <label className="text-xs sm:text-sm font-medium">End Image</label>
              <img className="w-16 h-20 sm:w-22 sm:h-25 rounded-lg object-cover mt-1" src="/public/m_img03.png" alt="" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <label className="text-xs sm:text-sm font-medium">Video Prompt</label>
            <div className="bg-[#ebebeb] w-full p-3 font-medium text-[#616161] rounded-lg text-sm mt-1">
              Read Only
            </div>
          </div>
        </div>

        <hr className="w-full border-zinc-300" />

        <div className="flex justify-end p-3 sm:p-4">
          <ImgCardBtn
            Icon={VideoSvgIcons}
            name={"Generate AI Video"}
            bg={"#3e3e3e"}
            textColor={"white"}
            iconColor={"white"}
          />
        </div>
      </div>
    </div>
  );
}

export default ViewVideoPopUp;
