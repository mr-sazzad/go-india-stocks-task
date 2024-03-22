"use client";
import React, { useState } from "react";
import { links } from "../statics/links";

// react icons
import { IoChevronForward } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-full md:h-auto md:relative absolute z-50">
      <div
        className={`${
          isOpen ? "w-[260px]" : "w-[10px]"
        } transition-all duration-300 relative h-full`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`absolute ${
            isOpen ? "-right-6" : "-right-3"
          } top-[43%] bg-[#314463] py-5 rounded-r text-white`}
        >
          {isOpen ? (
            <IoIosArrowBack size={24} />
          ) : (
            <IoChevronForward size={24} />
          )}
        </button>
        {isOpen && (
          <nav className="bg-[#314463] pt-16 h-screen">
            <ul>
              {links.map((link) => (
                <li
                  key={link.id}
                  className={`py-2 px-5 cursor-pointer hover:bg-[#232f47] text-white flex w-full ${
                    link.icon ? "items-center gap-2" : "pl-[44px]"
                  }`}
                >
                  {link.icon && link.icon}
                  {link.name}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
