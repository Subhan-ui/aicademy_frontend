import React from "react";
import Image from "next/image";
import google from "../../assets/google.png";

const Signup = ({
  title,
  btn,
  fields,
}: {
  title: string;
  btn: string;
  fields: React.ReactNode;
}) => {
  return (
    <form className="md:w-[44%] w-full flex flex-col justify-center  h-full">
      <h1 className="font-bold 2xl:text-5xl 2lg:text-4xl sm:text-3xl text-2xl text-white text-start mt-[14px]">
        {title}
      </h1>
      {fields}
      <button className="bg-[#b885ff] text-white font-semibold rounded-s w-full h-[60px] text-[1.15rem] 2xl:mt-[94px] 2lg:mt-[83px] mt-[79px]">
        {btn}
      </button>
      <button className="sm:bg-[#d9d9d9] text-black rounded-s w-full h-[60px]  2xl:mt-[94px] 2lg:mt-[83px] mt-[79px] flex flex-row justify-center items-center">
        <Image
          src={google}
          alt="Google Logo"
          className="w-[78px]  h-[63px] relative 2lg:right-0 sm:right-3 "
        />
        <p className="lg:text-[1.15rem] sm:text-[14px] text-sm te lg:font-semibold font-medium relative 2lg:right-0 right-4 sm:block hidden">
          CONTINUE WITH GOOGLE
        </p>
      </button>
    </form>
  );
};

export default Signup;
