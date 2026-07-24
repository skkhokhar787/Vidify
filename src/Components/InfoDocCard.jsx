import React from "react";
import InfoDocInnerCard from "./InfoDocInnerCard";
import { DocSVGs, SupportSVGs, WalkThroughSvgIcons } from "./AllSvgIcons";
function InfoDocCard() {
  return (
    <>
      <div className="border border-zinc-300 w-250 p-4 ml-12 mt-5 rounded-2xl">
        <h2 className="font-semibold text-xl">
          Drive More Sales with Vidify AI Product Videos
        </h2>
        <p>
          Transform product marketing & your brand presence with stunning
          videos.
        </p>
        <div>
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
    </>
  );
}

export default InfoDocCard;
