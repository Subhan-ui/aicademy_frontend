import { updateBtn, uploaderBtn } from "@/constants";
import Image from "next/image";
import React from "react";

const Uploader = () => {
  return (
    <div className="w-[213px] h-[297px] p-2 bg-white/15 backdrop-blur-md rounded-[10px] text-white">
      <h1 className="font-medium text-[20px] text-center">Upload Books</h1>
      <p className="font-normal text-[14px] text-gray-400 text-center ">
        Upload your books here to study more topic with the help of Lumina. You
        can add multiple books and AI will scan and make a comprehensive test
        for you.
      </p>
      <Image
        className="my-[22px] "
        src={uploaderBtn}
        alt="Upload your books by this button"
        height={39}
        width={193}
      />
      <Image
        src={updateBtn}
        alt="update your books by this button"
        height={39}
        width={193}
      />
    </div>
  );
};

export default Uploader;
