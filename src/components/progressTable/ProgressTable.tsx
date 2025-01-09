import React from "react";
import { IoIosArrowRoundUp } from "react-icons/io";

const ProgressTable = ({
  completed,
  color,
}: {
  completed: number;
  color?: string;
}) => {
  return (
    <button
      className="bg-[#5fff372b] w-[68px] mx-auto flex justify-around items-center rounded-[4px]"
      style={{ backgroundColor: color || "#4db1003f" }}
    >
      <span
        className="font-medium text-sm "
        style={{ color: color ? "#aeff87" : "#d2ffaf" }}
      >
        {completed}%
      </span>
      <IoIosArrowRoundUp size={16} color={color ? "#aeff87" : "#d2ffaf"} />
    </button>
  );
};

export default ProgressTable;
