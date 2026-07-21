import React from "react";
import LimitCard from "./LimitCard"
import ImgCard from "./ImgCard";
import InfoDocCard from "./InfoDocCard";

function Dashboard() {
  return (
    <div className="flex flex-col flex-1 min-w-0 h-full overflow-y-auto">
      <div className="mx-15 my-5 ">
        <h1 className="font-bold text-2xl">Welcome to Vidify</h1>
        <p>Enhance your video creation with the power of AI</p>
      </div>
        <LimitCard/>
        <ImgCard />
        <InfoDocCard />
    </div>
  );
}

export default Dashboard;
