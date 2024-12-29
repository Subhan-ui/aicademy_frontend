import React from "react";
import Image from "next/image";
import img from "../../assets/sideimg.jpg";
import BlurBox from "@/components/blurBox/BlurBox";
import Form from "@/components/form/Form";
import Singup from "@/components/signup/Singup";

export default function SignupPage() {
  return (
    <BlurBox>
      <div className="2xl:w-[50%] 2lg:w-[500px] lg:w-[420px] w-[360px] h-full hidden md:block">
        <Image
          src={img}
          alt="image on the signup page"
          className="2xl:w-[613px] 2xl:h-[829px] w-screen h-full rounded-2xl "
        />
      </div>
      <Form title="Create an Account" btn="SIGN UP" fields={<Singup />} />
    </BlurBox>
  );
}
