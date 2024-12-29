"use client";

import Image from "next/image";
import Link from "next/link";
import btn3 from "../../assets/btn3.png";
import btn4 from "../../assets/btn4.png";
import { useRouter } from "next/navigation";
import React from "react";

const ButtonPair = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center gap-[30px] mt-[70px] sm:flex-row flex-col">
      <Link href={"/flash2"}>
        <Image src={btn3} alt="Start Another button" />
      </Link>
      <Image onClick={() => router.back()} src={btn4} alt="Go Back button" />
    </div>
  );
};

export default ButtonPair;
