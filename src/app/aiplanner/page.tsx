import Navbar from "@/components/navbar/Navbar";
import Table from "@/components/totalChp/table/Table";
import CompletedTopic from "@/components/completedTable/table/Table";
import CompletedChp from "@/components/completedChp/table/Table";
import { flash2 as back } from "@/constants";
import Uploader from "@/components/uploader/Uploader";
import UploadedBook from "@/components/uploadedBook/UploadedBook";

const page = () => {
  return (
    <div>
      <div
        className="fixed top-0 left-0 w-screen h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('${back}')`, zIndex: -1 }}
      />
      <Navbar />
      <div className="flex flex-col gap-[27px] justify-center items-center my-24 ">
        <div className="flex gap-[36px] flex-wrap">
          <Table />
          <CompletedTopic />
          <Uploader />
        </div>
        <div className="flex gap-[26px] flex-wrap">
          <CompletedChp />
          <UploadedBook />
        </div>
      </div>
    </div>
  );
};

export default page;
