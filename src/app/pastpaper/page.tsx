import React from "react";
import { flash2 as back, subjectOpt } from "@/constants";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import PastPaperScreen from "@/components/pastPaperScreen/PastPaperScreen";
import Subjects from "@/components/subjects/Subjects";
import SideSubjects from "@/components/sideSubjects/SideSubjects";

const page = () => {
  return (
    <div className="min-h-screen pb-[180px]  max-w-screen relative ">
      <div
        className="fixed top-0 left-0 w-screen h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('${back}')`, zIndex: -1 }}
      />
      <Navbar />
      <div className="flex justify-center items-center lg:flex-row flex-col xl:gap-[69.66px] lg:gap-[20px] gap-[10px] md:mt-[69px] mt-[39px] lg:ml-[80px] lg:mr-[118px]">
        <SideSubjects />
        <Subjects />
        <PastPaperScreen />
      </div>
    </div>
  );
};

export default page;
