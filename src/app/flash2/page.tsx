"use client";

import Image from "next/image";
import back from "../../assets/flash2.png";
import next from "../../assets/next.png";
import options from "../../assets/options.png";

import btn1 from "../../assets/btn1.png";
import btn2 from "../../assets/btn2.png";
import Link from "next/link";
import Questions from "@/components/questions/Questions";
import Title from "@/components/title/Title";

const Flash = () => {
  return (
    <div className=" min-h-screen pb-[200px]">
      <Image
        src={back}
        alt="background pattern"
        className="fixed top-0 left-0 w-screen h-screen object-cover"
        style={{ zIndex: -1 }}
      />
      <div>
        <div>
          <button className="absolute md:top-[47px] md:right-[59px] md:hidden top-[30px] left-[14px]">
            <Image src={options} alt="option button" className="w-[36px]" />
          </button>
          <Link
            href={"/flash3"}
            className="absolute md:top-[43px] md:right-[42px] top-[30px] right-[10px]"
          >
            <Image
              src={next}
              alt="next button"
              className="md:w-[52px] w-[36px]"
            />
          </Link>
        </div>
        <Title />
        <p className="text-[20px] font-bold text-white text-center md:mt-[23px] mt-[15px]">
          Learning New Things
        </p>
        <Questions />
        <div className="flex justify-center gap-[21px] mt-[37px]">
          <Image src={btn1} alt="Know button" />
          <Image src={btn2} alt="Learn button" />
        </div>
      </div>
    </div>
  );
};

export default Flash;
