import { cardImg, readNowBtn } from "@/constants";
import Image from "next/image";
import React from "react";

const BookCard = () => {
  return (
    <div className="w-[150px]">
      <Image src={cardImg} alt="Book Card" height={145} width={150} />
      <div className="mt-[5px]  ">
        <h1 className="text-white font-medium text-base ">Chemistry Book</h1>
        <p className="text-white font-light text-[8px] text-justify">
          Comprehensive knowledge about Chemistry and its related subjects.
        </p>
        <div className="w-full flex justify-end items-center mt-[14px]">
          <Image
            src={readNowBtn}
            alt="Read Now Button"
            height={24}
            width={65}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default BookCard;
