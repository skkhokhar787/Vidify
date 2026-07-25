import React from "react";
import SimpleBtn from "./SimpleBtn";

export default function OtherAppsCard({ cardData }) {
  const points = cardData.points.map((point, key) => <li key={key}>{point}</li>);

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start p-3 sm:p-4 md:p-6 gap-3 sm:gap-4 md:gap-5">
      <img
        src={cardData.image}
        className="w-full md:w-96 h-40 sm:h-48 md:h-56 rounded-xl md:rounded-2xl object-cover"
        alt={cardData.title}
      />
      <div className="flex-1 min-w-0 px-1">
        <h2 className="font-semibold text-sm sm:text-base md:text-lg">{cardData.title}</h2>
        <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-1">{cardData.des}</p>
        <ul className="mt-4 sm:mt-6 md:mt-8 mb-4 sm:mb-6 md:mb-8 list-disc pl-4 sm:pl-5 text-xs sm:text-sm md:text-base space-y-0.5">{points}</ul>
        <SimpleBtn text={"Get Started"} />
      </div>
    </div>
  );
}
