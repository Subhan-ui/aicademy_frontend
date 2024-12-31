"use client";

import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Dropdown = ({ title, options }: { title: string; options: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(title);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative border border-[#9b9b9b] rounded-2xl">
      <div
        className="flex justify-between items-center pl-2 pr-[21px] md:py-[4.5px] gap-[20px] cursor-pointer"
        onClick={toggleDropdown}
      >
        <h2 className="text-white font-medium md:text-[32px] text-[25px]">
          {selectedOption}
        </h2>
        {isOpen ? (
          <IoIosArrowUp className="w-[28px] h-[48px]" size={28} color="white" />
        ) : (
          <IoIosArrowDown
            className="w-[28px] h-[48px]"
            size={28}
            color="white"
          />
        )}
      </div>
      {isOpen && (
        <ul className="absolute bg-black border border-[#9b9b9b] rounded-xl mt-2 w-full z-10 h-[170px] overflow-scroll">
          {options.map((option) => (
            <li
              key={option}
              className="p-3 text-white text-[20px] hover:bg-[#333333] rounded-xl cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
