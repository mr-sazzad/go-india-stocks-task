"use client";

import React from "react";

const MobileScreen = ({
  setDiscussionActive,
  setMarketActive,
  marketActivated,
  discussionActivated,
}: {
  setDiscussionActive: (active: boolean) => void;
  setMarketActive: (active: boolean) => void;
  discussionActivated: boolean;
  marketActivated: boolean;
}) => {
  const handleDiscussionForum = () => {
    setMarketActive(false);
    setDiscussionActive(true);
  };

  const handleMarketStories = () => {
    setDiscussionActive(false);
    setMarketActive(true);
  };

  console.log(discussionActivated, "discussion", marketActivated, "market");

  return (
    <div className="md:hidden w-full">
      <div className="w-full h-[50px] flex items-center border-x-4 border-[#232f47] mt-2 mb-5">
        <div className="w-full">
          <ul className="flex justify-around items-center">
            <li
              className={`w-full py-2 flex justify-center cursor-pointer text-white my-2 ${
                discussionActivated
                  ? "bg-[#232f47] py-[6px] border-b-[4px] border-red-700"
                  : "bg-[#314463]"
              }`}
              onClick={handleDiscussionForum}
            >
              Discussion Forum
            </li>
            <li
              className={`w-full text-white py-2 flex justify-center cursor-pointer my-2 ${
                marketActivated
                  ? "bg-[#232f47] py-[6px] border-b-[4px] border-red-700"
                  : "bg-[#314463]"
              }`}
              onClick={handleMarketStories}
            >
              Market Stories
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileScreen;
