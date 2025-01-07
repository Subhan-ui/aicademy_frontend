"use client";

import { subjectOpt } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "../modals/modal/Modal";
import Subjects from "../subjects/Subjects";

const SideSubjects = () => {
  const [show, setShow] = useState(false);
  const handleModal = () => {
    setShow((prev) => !prev);
  };
  return (
    <>
      <div className="w-screen px-[9px] mb-1 lg:hidden block">
        <Image
          src={subjectOpt}
          alt="Subject Option"
          width={70}
          height={70}
          className=" md:w-[45px] md:h-[45px] w-[36px] h-[36px]"
          onClick={handleModal}
        />
      </div>
      {show && (
        <Modal hiding={handleModal}>
          <Subjects show />
        </Modal>
      )}
    </>
  );
};

export default SideSubjects;
