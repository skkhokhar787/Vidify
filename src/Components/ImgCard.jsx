import React from "react";
import ImgCardBtn from "./ImgCardBtn";
import SimpleBtn from "./SimpleBtn";

function ImgCard({ heading, img, boadyPara, icon, dis, buttonText, className = "" }) {
  return (
    <div className={`w-full px-3 sm:px-6 md:px-12 mt-4 md:mt-5 ${className}`}>
      <div className="flex flex-col md:flex-row items-stretch border border-zinc-300 rounded-xl md:rounded-2xl overflow-hidden shadow-sm">
        <div className="w-full md:w-2/5 shrink-0">
          <img
            className="w-full h-40 sm:h-48 md:h-full object-cover"
            src={img}
            alt="img"
          />
        </div>
        <div className="bg-white p-3 sm:p-4 md:p-5 flex flex-col justify-between flex-1 min-w-0">
          <div>
            <h2 className="font-semibold text-sm sm:text-base md:text-lg leading-snug">
              {heading}
            </h2>
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
              {boadyPara}
            </p>
          </div>
          <div className="mt-3 sm:mt-4 md:mt-6">
            {buttonText ? (
              <SimpleBtn text={buttonText} />
            ) : (
              <ImgCardBtn Icon={icon} name={dis} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImgCard;
