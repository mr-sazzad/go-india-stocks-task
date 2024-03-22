import Image from "next/image";
import React from "react";

// react icons
import { CiHeart } from "react-icons/ci";
import { FiEye } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { AiOutlineShareAlt } from "react-icons/ai";

interface AuthorType {
  name: string;
  img: string;
  sector: number;
}

interface PostType {
  data: string;
  likes: string;
  watch: string;
  comments: string;
}
interface DiscussionCardProps {
  author: AuthorType;
  post: PostType;
}

const DiscussionCard: React.FC<DiscussionCardProps> = ({ author, post }) => {
  return (
    <div className="flex flex-row gap-2 rounded-md shadow-md px-3 py-2 mb-5">
      {/* image */}
      <div className="w-[5%]">
        <div className="rounded-full overflow-hidden md:w-[35px] md:h-[35px] w-[30px] h-[30px]">
          <Image
            src={author.img}
            width={100}
            height={100}
            objectFit="cover"
            alt="author-image"
          />
        </div>
      </div>
      {/* card body */}
      <div className="w-[80%] mt-1 ml-3">
        <div className="flex gap-3 items-center">
          <p>{author.name}</p>
          <span className="px-3 bg-green-800 rounded-full text-white text-sm">
            sector {author.sector}
          </span>
        </div>
        {/* Post data */}
        <div>
          <p className="text-sm md:text-base">{post.data}</p>
        </div>
        {/* Post Footer */}
        <div className="flex justify-around items-center mt-2">
          <div className="flex gap-1 items-center">
            <CiHeart />
            <p className="text-sm md:text-base">{post.likes}</p>
          </div>
          <div className="flex gap-1 items-center">
            <FiEye />
            <p className="text-sm md:text-base">{post.watch}</p>
          </div>

          <div className="flex gap-1 items-center">
            <FiMessageSquare />
            <p className="text-sm md:text-base">{post.comments}</p>
          </div>

          <div className="flex gap-1 items-center">
            <AiOutlineShareAlt />
          </div>
        </div>
      </div>
      {/* card post time */}
      <div className="w-[15%]">
        <p className="md:text-sm text-[10px] text-indigo-400 mt-2">
          2 second ago
        </p>
      </div>
    </div>
  );
};

export default DiscussionCard;
