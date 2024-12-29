"use client";

import React, { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";

const Input = ({
  placeholder,
  className,
  value,
  onChange,
}: {
  placeholder: string;
  className?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const [show, setShow] = useState(false);
  return (
    <div className={`relative w-[210px] ${className}`}>
      <input
        value={value}
        onChange={onChange}
        type={placeholder !== "Password" ? "text" : show ? "text" : "password"}
        placeholder={placeholder}
        name="input"
        className={` h-[60px] input px-[10px] py-[11px] pl-[15px] text-[1.15rem] bg-[#d9d9d9] border-2 rounded-[5px] focus:outline-none placeholder:text-black/25 w-full`}
      />
      {placeholder !== "Password" ? null : !show ? (
        <BiHide
          size={25}
          className="absolute top-5 right-4"
          onClick={() => setShow(true)}
        />
      ) : (
        <BiShow
          size={25}
          className="absolute top-5 right-4"
          onClick={() => setShow(false)}
        />
      )}
    </div>
  );
};

export default Input;
