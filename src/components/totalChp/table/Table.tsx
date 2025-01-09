import Row from "../row/Row";

const Table = () => {
  return (
    <div className="w-[496px] h-[297px] p-3 pl-4 pt-0 bg-white/15 backdrop-blur-md rounded-[10px] ">
      <table className="table-fixed border-separate border-spacing-y-2 w-full">
        <thead className="">
          <tr>
            <td className="border-b border-[#3b3b3b] font-medium text-base text-white ">
              Subjects
            </td>
            <td className="border-b border-[#3b3b3b] font-medium text-base text-white text-center">
              Chapters
            </td>
            <td className="border-b border-[#3b3b3b] font-medium text-base text-white text-center">
              Start Now
            </td>
          </tr>
        </thead>
        <tbody>
          <Row name="English" chapters={13} />
          <Row name="English" chapters={13} />
          <Row name="English" chapters={13} />
          <Row name="English" chapters={13} />
          <Row name="English" chapters={13} />
          <Row name="English" chapters={13} />
        </tbody>
      </table>
    </div>
  );
};

export default Table;
