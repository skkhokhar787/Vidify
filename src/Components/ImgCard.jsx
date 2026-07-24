import React from "react";
import ImgCardBtn from "./ImgCardBtn";
import SimpleBtn from "./SimpleBtn";

function ImgCard({ heading, img, boadyPara, icon, dis, buttonText, className = "" }) {
  return (
    <>
      <div className={`flex items-center w-full ${className}`}>
        <div className="flex items-center border-2 border-zinc-300 w-250 rounded-2xl h-50 overflow-hidden ml-12 mt-5 shadow-[0_10px_10px_rgba(0,0,0,0.)]">
          <div>
            <img
              className="w-100 rounded-tl-2xl rounded-bl-2xl"
              src={img}
              alt="img"
            />
          </div>
          <div className="bg-white p-3 h-50 w-[70%] rounded-tr-2xl rounded-br-2xl mt-2">
            <h2 className="font-semibold">
              {heading}
            </h2>
            <p className="mt-2 font-sans">
              {boadyPara}
            </p>
            {buttonText ? (
              <SimpleBtn text={buttonText} />
            ) : (
              <ImgCardBtn Icon={icon} name={dis} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ImgCard;
