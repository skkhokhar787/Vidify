import React from "react";
import SimpleBtn from "./SimpleBtn";

export default function OtherAppsCard({ cardData }) {
  const points = cardData.points.map((point,key) => <li value={key}>{point}</li>);

  return (
    <div className="flex ">
      <img
        src={cardData.image}
        className="w-100 h-61 ml-6 rounded-2xl"
        alt={cardData.title}
      />
      <div className="ml-5">
        <h2 className="font-semibold">{cardData.title}</h2>
        <p className="w-135">{cardData.des}</p>
        <ul className="mt-10 mb-10 list-disc pl-5">{points}</ul>
        <SimpleBtn text={"Get Started"} />
      </div>
    </div>
  );
}
