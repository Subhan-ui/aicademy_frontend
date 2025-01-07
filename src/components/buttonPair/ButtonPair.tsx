import Image from "next/image";
import { btn3, btn4 } from "@/constants";

const ButtonPair = ({ change }: { change: (n: 1 | 2 | 3) => void }) => {
  return (
    <div className="flex justify-center items-center gap-[30px] mt-[70px] sm:flex-row flex-col">
      <button onClick={() => change(2)}>
        <Image src={btn3} width={160} height={59} alt="Start Another button" />
      </button>
      <Image
        onClick={() => change(2)}
        width={156}
        height={59}
        src={btn4}
        alt="Go Back button"
      />
    </div>
  );
};

export default ButtonPair;
