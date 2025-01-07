import { fullScreen, minus, plus, textIcon } from "@/constants";
import Image from "next/image";
import React from "react";

const PastPaperScreen = () => {
  return (
    <div className="relative">
      <div className="bg-[#8080804D] backdrop-blur-md border-t border-white z-10 rounded-[46px] xl:w-[948px] lg:w-[740px] w-[calc(100vw-55px)] xl:h-[757px] lg:h-[650px] h-[586px]"></div>
      <div className="sm:w-[414px] w-[242px] h-[73px] rounded-full absolute left-1/2 transform -translate-x-1/2 -bottom-[40px]  bg-[#8080804D] backdrop-blur-md border-t border-white z-10 flex items-center pt-[8px] sm:pl-[62px] sm:pr-[65px] pl-[36px]">
        <Image
          src={textIcon}
          alt="Text Icon"
          width={35}
          height={31}
          className="sm:w-[35px] w-[20px] sm:h-[31px] h-[18px] sm:mr-[14px] mr-[8px]"
        />
        <Image
          src={fullScreen}
          alt="Text Icon"
          width={41}
          height={31}
          className="sm:w-[41px] w-[23px] sm:h-[31px] h-[18px] sm:mr-[23.5px] mr-[13px]"
        />
        <div className="flex gap-[10px] sm:mr-[23px] mr-[13px]">
          <Image
            src={plus}
            alt="Plus Icon"
            width={24}
            height={24}
            className="sm:w-[24px] w-[14px] sm:h-[24px] h-[14px]"
          />
          <Image
            src={minus}
            alt="Minus Icon"
            width={24}
            height={24}
            className="sm:w-[24px] w-[14px] sm:h-[24px] h-[14px]"
          />
        </div>
        <div className="flex items-center gap-[14px]">
          <div className="border border-white flex justify-center items-center sm:w-[41px] w-[23px] sm:h-[34px] h-[19px]">
            <p className="font-inter sm:text-[10px] text-[5px] font-normal text-white ">
              1
            </p>
          </div>
          <p className="font-inter sm:text-[10px] text-[5px] font-normal text-white ">
            of
          </p>
          <p className="font-inter sm:text-[10px] text-[5px] font-normal text-white ">
            10
          </p>
        </div>
      </div>
    </div>
  );
};

export default PastPaperScreen;
