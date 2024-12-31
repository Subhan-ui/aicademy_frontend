import Image from "next/image";
import { pooper } from "@/constants";

const Pooper = () => {
  return (
    <>
      <div className="flex justify-center items-end ">
        <Image
          src={pooper}
          width={303}
          height={303}
          alt="party pooper for celebrations"
          className="lg:w-[303px] md:w-[250px] sm:w-[180px] w-[90px] rotate-90"
        />
        <h1 className="font-bold lg:text-4xl md:text-3xl sm:text-xl text-lg text-white text-center">
          Congratulations
        </h1>
        <Image
          width={303}
          height={303}
          src={pooper}
          alt="party pooper for celebrations"
          className="lg:w-[303px] md:w-[250px] sm:w-[180px] w-[90px]"
        />
      </div>
      <p className="font-bold lg:text-2xl md:text-xl sm:text-lg text-base text-white text-center mt-[112px]">
        You have completed your chapter
      </p>
    </>
  );
};

export default Pooper;
