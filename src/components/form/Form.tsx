import Image from "next/image";
import { google } from "@/constants";

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
      <h1 className="font-bold 2xl:text-5xl 2lg:text-4xl sm:text-3xl text-2xl text-white text-start mt-[3%]">
        {title}
      </h1>
      {fields}
      <button className="bg-[#b885ff] text-white font-semibold rounded-[4px] w-full h-[60px] text-[1.15rem] md:mt-[9%] sm:mt-[5%] mt-[7%]">
        {btn}
      </button>
      <button className="sm:bg-[#d9d9d9] text-black rounded-[4px] w-full h-[60px] md:mt-[9%] sm:mt-[5%] mt-[7%] flex flex-row justify-center items-center">
        <Image
          src={google}
          width={78}
          height={63}
          alt="Google Logo"
          className="relative 2lg:right-0 sm:right-3 "
        />
        <p className="lg:text-[1.15rem] sm:text-[14px] text-sm lg:font-semibold font-medium relative 2lg:right-0 right-4 sm:block hidden">
          CONTINUE WITH GOOGLE
        </p>
      </button>
    </form>
  );
};

export default Signup;
// 2xl:mt-[94px] 2lg:mt-[83px] mt-[79px]
