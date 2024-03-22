import { marketStories } from "@/statics/market-stories";
import React from "react";
import MarketStoryCard from "./market-story-card";

const Markets = () => {
  return (
    <div>
      <span className="uppercase text-lg font-semibold text-rose-400 px-2 bg-rose-100 rounded">
        Market Stories
      </span>
      <div className="mt-3">
        {marketStories.map((marketStory, index) => (
          <div key={index}>
            <MarketStoryCard story={marketStory} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Markets;
