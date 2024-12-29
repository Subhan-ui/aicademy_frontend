"use client";

import React, { useState } from "react";
import Input from "../input/Input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
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
        className="w-full 2xl:mt-[73px] 2lg:mt-[63px] mt-[53px]"
      />
    </>
  );
};

export default Login;
