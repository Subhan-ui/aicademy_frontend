import { bell, logo, person, next, backCover, options } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="xl:mx-[102px] lg:mx-[80px] mx-[9px] md:mt-[56px] mt-[31px] h-[65px] flex justify-between items-center">
      <Image
        src={options}
        alt="Option Button"
        width={34}
        height={35}
        className="w-[36px] h-[36px] md:hidden block"
      />
      <div className="items-center lg:gap-[63px] gap-[30px] md:flex hidden">
        <Image src={logo} alt="Logo" width={64} height={64} />
        <p className="font-inter font-base text-[20.32px] text-white ">
          Dashboard
        </p>
        <p className="font-inter font-base text-[20.32px] text-white ">
          Study Room
        </p>
        <p className="font-inter font-base text-[20.32px] text-white ">
          Leader-board
        </p>
      </div>
      <div className="flex items-center gap-[8px]">
        <div
          className="md:flex hidden items-center gap-[20px] w-[107px] h-[57px] justify-center"
          style={{ backgroundImage: `url('${backCover}')` }}
        >
          <Image src={bell} alt="bell icon" width={25} height={27} />
          <Image
            src={person}
            alt="Person's profile Image"
            width={42}
            height={42}
            className="rounded-full h-[42px] w-[42px]"
          />
        </div>
        <Image
          src={next}
          alt="Next Button"
          width={52}
          height={52}
          className="md:w-[52px] md:h-[52px] w-[36px] h-[36px]"
        />
      </div>
    </div>
  );
};

export default Navbar;
