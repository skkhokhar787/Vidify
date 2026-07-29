import React from "react";
import PriceCardBtn from "./PriceCardBtn";

function PriceCard({bg,text,title, textColor, price, videos}) {
  return (
    <div className="bg-white w-full shadow-md sm:w-56 md:w-64 lg:w-72 rounded-2xl mt-4 flex flex-col">
      <div className="flex sm:flex-col lg:flex-row justify-between p-4 flex-1">
        <div>
          <h2 className="font-bold text-lg mb-4 text-[#303030]">{title}</h2>
          <p>
            <span className="font-medium">{videos}</span> videos per month
          </p>
        </div>
        <div className="mt-4">
            <h2 className="font-bold text-[#303030] text-2xl">{price}<span className="font-normal text-sm">/M</span></h2>
        </div>
      </div>
      <hr className="mt-6 text-zinc-300" />
      <PriceCardBtn text={text} bg={bg} textColor={textColor} />
    </div>
  );
}

export default PriceCard;