import Image from "next/image";
import React from "react";
import back from "../../assets/backpattern.png";
import Title from "@/components/title/Title";
import ButtonPair from "@/components/buttonPair/ButtonPair";
import Pooper from "@/components/pooper/Pooper";

const Flash = () => {
  return (
    <div className=" min-h-screen pb-[200px]">
      <Image
        src={back}
        alt="background pattern"
        className="fixed top-0 left-0 w-screen h-screen object-cover"
        style={{ zIndex: -1 }}
      />
      <div>
        <Title />
        <Pooper />
        <ButtonPair />
      </div>
    </div>
  );
};

export default Flash;
