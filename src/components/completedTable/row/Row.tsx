import ProgressTable from "@/components/progressTable/ProgressTable";
import { IoIosArrowRoundUp } from "react-icons/io";

const Row = ({
  name,
  subject,
  topic,
  completed,
}: {
  name: string;
  subject: string;
  topic: string;
  completed: number;
}) => {
  return (
    <tr className="text-white">
      <td>
        <p className="text-sm font-medium">{name}</p>
        <p className="text-[11px] font-medium text-gray-400">Sub: {subject}</p>
      </td>
      <td className="text-center text-base font-medium text-gray-400">
        {topic} topics
      </td>
      <td className="">
        <ProgressTable completed={completed} />
      </td>
    </tr>
  );
};

export default Row;
