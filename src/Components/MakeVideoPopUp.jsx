import React from "react";
import { ImgDemoSvgIcons, VideoSvgIcons } from "./AllSvgIcons";
import ImgCardBtn from "./ImgCardBtn";

function MakeVideoPopUp({ onClose }) {
  return (
    <div className="absolute inset-0 z-25  ">
      <div
        className="absolute inset-0 bg-black/50 felx backdrop-blur-[2px]"
        onClick={onClose}
      />
      <div className="relative bg-white flex flex-col justify-self-center my-40 rounded-2xl shadow-2xl w-full max-w-200 mx-4 p-6 sm:p-8 z-10">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl leading-none"
        >
          &times;
        </button>
        <h2 className="text-lg sm:text-xl font-bold mb-2">Make AI Video</h2>
        <div className="flex justify-around">
          <div className="relative">
            <img
              className="w-20 h-22 rounded-2xl"
              src="/public/m_img01.png"
              alt=""
            />
            <div className="absolute top-2 right-2 bg-black/60 rounded-sm p-1.5">
              <svg
                width="9"
                height="6"
                viewBox="0 0 9 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.03033 0.21967C8.32322 0.512563 8.32322 0.987437 8.03033 1.28033L3.53033 5.78033C3.23744 6.07322 2.76256 6.07322 2.46967 5.78033L0.21967 3.53033C-0.0732233 3.23744 -0.0732233 2.76256 0.21967 2.46967C0.512563 2.17678 0.987437 2.17678 1.28033 2.46967L3 4.18934L6.96967 0.21967C7.26256 -0.0732233 7.73744 -0.0732233 8.03033 0.21967Z"
                  fill="white"
                />
              </svg></div>
          </div>
          <div className="relative">
            <img
              className="w-20 h-22 rounded-2xl"
              src="/public/m_img02.png"
              alt=""
            />
            <div className="absolute top-2 right-2 bg-white border border-zinc-300 rounded-sm p-2">
            </div>
          </div>
          <div className="relative">
            <img
              className="w-20 h-22 rounded-2xl"
              src="/public/m_img03.png"
              alt=""
            />
            <div className="absolute top-2 right-2 bg-white border border-zinc-300 rounded-sm p-2">
            </div>
          </div>
          <div className="relative">
            <img
              className="w-20 h-22 rounded-2xl"
              src="/public/m_img04.png"
              alt=""
            />
            <div className="absolute top-2 right-2 bg-white border border-zinc-300 rounded-sm p-2">
            </div>
          </div>
        </div>
        <div className="border-2 mt-7 border-zinc-300 flex gap-4 rounded-xl p-4 text-center mb-6">
          <img className="w-100 rounded-2xl h-100" src="/public/m_img01.png" alt="" />
          <div className="w-100 flex justify-center items-center rounded-2xl bg-[#F7F7F7] h-100"><ImgDemoSvgIcons /></div>
        </div>
        <h2 className="ml-3">Video Prompt <span className="font-light">(Optional)</span></h2>
        <div className="border border-zinc-300 pl-2 text-zinc-500 pt-1 rounded-2xl  h-25 mb-10">Share your vision in a few clear words</div>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm  rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <ImgCardBtn Icon={VideoSvgIcons} name={"Generate AI Video"} bg={'#3e3e3e'} textColor={"white"} iconColor={"white"} />
        </div>
      </div>
    </div>
  );
}

export default MakeVideoPopUp;
