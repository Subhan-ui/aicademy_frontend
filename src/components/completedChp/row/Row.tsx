import ProgressTable from "@/components/progressTable/ProgressTable";
import React from "react";

const Row = ({
  completed,
  chp,
  name,
}: {
  completed: number;
  chp: string;
  name: string;
}) => {
  return (
    <tr>
      <td className="font-medium text-base text-white">{name}</td>
      <td className="font-normal text-base text-gray-400 text-center">
        {chp} Chapters
      </td>
      <td>
        <ProgressTable completed={completed} color="#5fff372b" />
      </td>
    </tr>
  );
};

export default Row;
