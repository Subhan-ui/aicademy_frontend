import Image from "next/image";
import React from "react";
import { titleBox } from "@/constants";

const Title = () => {
  return (
    <div className="flex flex-row justify-center items-center md:pt-[24px] pt-[64px]">
      <Image
        src={titleBox}
        width={71}
        height={98}
        alt="title box"
        className="md:h-[98px] md:w-[71px] w-[51px] h-[71px]"
      />
      <h1 className="font-bold bg-gradient-to-r from-[#F1B480] to-[#863BC6] bg-clip-text text-transparent md:text-5xl text-[34.7px]">
        Flash Cards
      </h1>
    </div>
  );
};

export default Title;
