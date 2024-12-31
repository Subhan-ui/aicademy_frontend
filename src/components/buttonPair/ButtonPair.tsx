"use client";

import Image from "next/image";
import Link from "next/link";
import { btn3, btn4 } from "@/constants";
import { useRouter } from "next/navigation";

const ButtonPair = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center gap-[30px] mt-[70px] sm:flex-row flex-col">
      <Link href={"/flash2"}>
        <Image src={btn3} width={160} height={59} alt="Start Another button" />
      </Link>
      <Image
        onClick={() => router.back()}
        width={156}
        height={59}
        src={btn4}
        alt="Go Back button"
      />
    </div>
  );
};

export default ButtonPair;
