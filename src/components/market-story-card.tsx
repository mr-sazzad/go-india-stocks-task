import Image from "next/image";
import React from "react";

interface MarketStory {
  img: string;
  title: string;
  post: string;
}

const MarketStoryCard = ({ story }: { story: MarketStory }) => {
  return (
    <div className="flex flex-col gap-1 mb-5">
      <div className="w-full h-[150px] relative z-0">
        <Image src={story.img} alt="story-image" fill objectFit="cover" />
      </div>
      <div className="px-2">
        <p className="font-semibold text-slate-600">{story.title}</p>
        <p className="text-slate-800 text-sm">{story.post}</p>
      </div>
    </div>
  );
};

export default MarketStoryCard;
