import React from "react";
import ProgressCard from "../Components/ProgressCard";
import ImgCard from "../Components/ImgCard";
import InfoDocCard from "../Components/InfoDocCard";
import { AiBtnSVGs, CallBtnSVGs } from "../Components/AllSvgIcons";
import Storeware from "../Components/Storeware";

function Dashboard() {
  return (
    <div className="flex flex-col flex-1 min-w-0 h-full overflow-y-auto">
      <div className="mx-3 sm:mx-4 md:mx-15 my-3 sm:my-4 md:my-5">
        <h1 className="font-bold text-lg sm:text-xl md:text-2xl">Welcome to Vidify</h1>
        <p className="text-xs sm:text-sm md:text-base text-gray-600">Enhance your video creation with the power of AI</p>
      </div>
      <ProgressCard Plan={"Explorer – 2 AI Videos /Month"} Limit={"0/2 Videos"} />
      <ImgCard
        heading="Generate Stunning AI-Videos from Product Images"
        img="image-15.png"
        boadyPara="Turn your product images into scroll-stopping marketing videos in seconds. Just upload images; we'll add dynamic animations and effects for a high-converting result."
        icon={AiBtnSVGs}
        dis={"Generate AI Video"}
      />
      <InfoDocCard />
      <ImgCard className="mb-4 sm:mb-6 md:mb-8"
        heading="Want to schedule a call?"
        img="23.png"
        boadyPara="We have marketing experts ready to help build your video marketing strategy scaling your store with video. Want to book a one-to-one session? It's FREE!"
        icon={CallBtnSVGs}
        dis={"Talk to Vidify Expert"}
      />
      <Storeware />
      <ImgCard className="mb-4 sm:mb-6 md:mb-8"
        heading="Get our free Shopify SEO guide"
        img="book.png"
        boadyPara="Grab your copy today & discover the secrets to optimizing your Shopify store for search engines"
        buttonText="Get the Free eBook"
      />
    </div>
  );
}

export default Dashboard;
