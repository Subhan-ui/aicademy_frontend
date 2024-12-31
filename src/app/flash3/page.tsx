import { backpattern as back } from "@/constants";
import Title from "@/components/title/Title";
import ButtonPair from "@/components/buttonPair/ButtonPair";
import Pooper from "@/components/pooper/Pooper";

const Flash = () => {
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
        <Title />
        <Pooper />
        <ButtonPair />
      </div>
    </div>
  );
};

export default Flash;
