import Image from "next/image";
import { btn1, btn2, flash2 as back, next, options } from "@/constants";
import Link from "next/link";
import Questions from "@/components/questions/Questions";
import Title from "@/components/title/Title";

const Flash = () => {
  return (
    <div className="min-h-screen relative">
      <div
        className="fixed top-0 left-0 w-screen h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('${back}')`,
          zIndex: -1,
        }}
      ></div>
      <div>
        <div>
          <button className="absolute md:top-[47px] md:right-[59px] md:hidden top-[30px] left-[14px]">
            <Image
              src={options}
              width={36}
              height={36}
              alt="option button"
              className="w-[36px]"
            />
          </button>
          <Link
            href={"/flash3"}
            className="absolute md:top-[43px] md:right-[42px] top-[30px] right-[10px]"
          >
            <Image
              src={next}
              width={52}
              height={52}
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
        <div className="flex justify-center gap-[21px] mt-[37px] mb-[50px]">
          <Image src={btn1} alt="Know button" width={129} height={59} />
          <Image src={btn2} alt="Learn button" width={129} height={59} />
        </div>
      </div>
    </div>
  );
};

export default Flash;
