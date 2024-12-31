import Image from "next/image";
import { backgbLogin as back } from "@/constants";

const BlurBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex items-center justify-center max-w-screen min-h-screen ">
      <Image
        src={back}
        alt="Background Image"
        fill
        className="absolute w-full h-full object-cover"
        style={{ zIndex: -1 }}
      />
      <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-lg border border-white/30 2lg:w-[calc(100vw-200px)] 2lg:h-[870px] lg:w-[calc(100vw-120px)] lg:h-[825px] sm:w-[calc(100vw-72px)] w-[calc(100vw-37px)] sm:h-[806px] h-[880px] 2xl:w-[1309px] 2xl:h-[925px] flex flex-row 2xl:gap-[70px] lg:gap-[50px] gap-[30px] justify-center md:justify-around 2lg:py-[48px] 2lg:px-[54px] py-[40px] lg:px-[44px] px-[26px] my-[50px]">
        {children}
      </div>
    </div>
  );
};

export default BlurBox;
