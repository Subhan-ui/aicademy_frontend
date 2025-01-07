import Image from "next/image";
import { sideImg as img } from "@/constants";
import BlurBox from "@/components/blurBox/BlurBox";
import Form from "@/components/form/Form";
import Login from "@/components/login/Login";

export default function LoginPage() {
  return (
    <BlurBox>
      <div className="2xl:w-[50%] 2lg:w-[500px] lg:w-[420px] w-[360px] h-full hidden md:block">
        <Image
          src={img}
          width={613}
          height={829}
          alt="image on the signup page"
          className="w-full h-full rounded-2xl aspect-auto"
        />
      </div>
      <Form title="Login" btn="Login" fields={<Login />} />
    </BlurBox>
  );
}

// 2xl:h-[829px] 2xl:w-[613px]