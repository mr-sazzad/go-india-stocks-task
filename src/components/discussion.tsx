import { discussionData } from "@/statics/discussion-data";
import React from "react";
import DiscussionCard from "./discussion-card";

const Discussion = () => {
  return (
    <div>
      <span className="uppercase text-xl font-semibold text-rose-400 px-2 bg-rose-100 rounded">
        Discussion Forum
      </span>
      <div className="mt-3">
        {discussionData.map((disc, index) => (
          <div key={index}>
            <DiscussionCard author={disc.author} post={disc.post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discussion;
