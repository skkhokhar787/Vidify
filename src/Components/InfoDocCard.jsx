import React from "react";
import InfoDocInnerCard from "./InfoDocInnerCard";
import { DocSVGs, SupportSVGs, WalkThroughSvgIcons } from "./AllSvgIcons";

function InfoDocCard() {
  return (
    <div className="mx-3 sm:mx-6 md:mx-12 mt-4 md:mt-5">
      <div className="border border-zinc-300 p-3 sm:p-4 md:p-6 rounded-xl md:rounded-2xl">
        <h2 className="font-semibold text-base sm:text-lg md:text-xl">
          Drive More Sales with Vidify AI Product Videos
        </h2>
        <p className="mt-1 text-xs sm:text-sm md:text-base text-gray-600">
          Transform product marketing & your brand presence with stunning
          videos.
        </p>
        <div className="mt-3">
          <InfoDocInnerCard
            DocIcon={DocSVGs()}
            Para="Read our step-by-step guidelines to explore and master every Vidify feature."
            Heading="Documentation"
            BgColor={"#29845a"}
          />
          <InfoDocInnerCard
            DocIcon={SupportSVGs()}
            Para="Our team is always ready to help reach out anytime to solve any issue "
            Heading="Support"
            BgColor={"#998a00"}
          />
          <InfoDocInnerCard
            DocIcon={WalkThroughSvgIcons()}
            Para="Book a session with our experts and learn how to get the most out of Vidify."
            Heading="Vidify Walkthrough"
            BgColor={"#8051ff"}
          />
        </div>
      </div>
    </div>
  );
}

export default InfoDocCard;
