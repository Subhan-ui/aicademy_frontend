"use client";

import React, { useState } from "react";
import Input from "../input/Input";

const Singup = () => {
  const [fName, setFName] = useState<string>("");
  const [lName, setLName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <>
      <div className="flex sm:flex-row flex-col w-full 2xl:gap-[57px] 2lg:gap-[40px] sm:gap-[30px] gap-[53px] justify-between 2xl:mt-[99px] mt-[83px]">
        <Input
          value={fName}
          onChange={(e) => setFName(e.target.value)}
          placeholder="First Name"
          className="sm:w-[44%] w-full"
        />
        <Input
          value={lName}
          onChange={(e) => setLName(e.target.value)}
          placeholder="Last Name"
          className="sm:w-[44%] w-full"
        />
      </div>
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        className="w-full 2xl:mt-[73px] 2lg:mt-[63px] mt-[53px]"
      />
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="w-full 2xl:mt-[73px] 2lg:mt-[63px] mt-[53px] "
      />
    </>
  );
};

export default Singup;
