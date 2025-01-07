import { subjectNote } from "@/constants";
import Image from "next/image";
import React from "react";

const Subject = ({ subject, year }: { subject: string; year: string }) => {
  return (
    <div className="w-[225.34px] h-[52.22px] rounded-[7.87px] border border-[#D6D6D6] flex items-center px-[11.45px] justify-between cursor-pointer ">
      <div className="flex items-center gap-[4.29px] ">
        <Image
          src={subjectNote}
          alt="Subject Note Icon"
          width={45}
          height={41}
        />
        <div className="flex flex-col justify-between h-[41px]">
          <p className="font-inter font-bold text-[11.45px] text-white">
            {subject}
          </p>
          <p className="font-inter font-medium text-[11.45px] text-white">
            Past Paper
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between h-[41px]">
        <p className="font-inter font-medium text-[11.45px] text-white">Year</p>
        <p className="font-inter font-medium text-[11.45px] text-white">
          {year}
        </p>
      </div>
    </div>
  );
};

export default Subject;
