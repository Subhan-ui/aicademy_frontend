"use client";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import { motion } from "framer-motion";

const Dropdown = ({ title, options }: { title: string; options: string[] }) => {
  const [shown, setShown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(title);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setShown(false);
  };

  const showMenu = {
    enter: {
      opacity: 1,
      y: 0,
      display: "block",
    },
    exit: {
      y: -5,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };
  return (
    <motion.div
      onHoverStart={() => setShown(true)}
      onHoverEnd={() => setShown(false)}
      className="relative border border-[#9b9b9b] rounded-2xl"
    >
      <div className="flex justify-between items-center pl-2 pr-[21px] md:py-[4.5px] gap-[20px] cursor-pointer">
        <h2 className="text-white font-medium md:text-[32px] text-[25px]">
          {selectedOption}
        </h2>
        {shown ? (
          <IoIosArrowUp className="w-[28px] h-[48px]" size={28} color="white" />
        ) : (
          <IoIosArrowDown
            className="w-[28px] h-[48px]"
            size={28}
            color="white"
          />
        )}
      </div>
      <motion.ul
        variants={showMenu}
        initial="exit"
        animate={shown ? "enter" : "exit"}
        className="absolute bg-black mt-1 border w-full  rounded-2xl p-2"
      >
        {options.map((option, i) => (
          <motion.li
            whileHover={{
              color: "#FFB703",
              x: 2,
            }}
            className="cursor-pointer p-1 text-blue-primary text-white"
            onClick={() => handleOptionClick(option)}
            key={i}
          >
            {option}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default Dropdown;
