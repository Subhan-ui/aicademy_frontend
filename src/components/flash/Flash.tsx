import Image from "next/image";
import { backpattern as back, next, options, titleBox } from "@/constants";
import Dropdown from "@/components/dropdown/Dropdown";

const Flash = ({ change }: { change: (n: 1 | 2 | 3) => void }) => {
  return (
    <div className=" min-h-screen pb-[200px] relative">
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
          <button
            onClick={() => change(2)}
            className="absolute md:top-[47px] md:right-[59px] top-[30px] right-[10px]"
          >
            <Image
              src={next}
              height={52}
              width={52}
              alt="next button"
              className="md:w-[52px] w-[36px]"
            />
          </button>
        </div>
        <div className="flex flex-row justify-center items-center md:pt-[81px] pt-[112px]">
          <Image
            src={titleBox}
            width={71}
            height={98}
            alt="title box"
            className="md:h-[98px] md:w-[71px] w-[51px] h-[71px]"
          />
          <h1 className="font-bold text-white md:text-5xl text-[34.7px]">
            Flash Cards
          </h1>
        </div>
        <div className="flex justify-center gap-[52px] md:mt-[19.5%] mt-[100px] md:flex-row flex-col items-center">
          <Dropdown title="Subject" options={["Math", "Science", "History"]} />
          <Dropdown title="Chapter" options={["1", "2", "3", "4"]} />
          <Dropdown title="Level" options={["Easy", "Medium", "Hard"]} />
        </div>
      </div>
    </div>
  );
};

export default Flash;
