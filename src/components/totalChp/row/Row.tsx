import { startBtn } from "@/constants";
import Image from "next/image";
import React from "react";

const Row = ({ name, chapters }: { name: string; chapters: number }) => {
  return (
    <tr className="">
      <td className="font-medium text-base text-white">{name}</td>
      <td className="font-normal text-base text-gray-400 text-center">
        {chapters} Chapters
      </td>
      <td className="flex justify-center">
        <Image src={startBtn} alt="start button" width={98} height={27} />
      </td>
    </tr>
  );
};

export default Row;
