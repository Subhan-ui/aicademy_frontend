import React from "react";
import Subject from "../Subject/Subject";

const Subjects = ({ show = false }: { show?: boolean }) => {
  return (
    <div
      className={`flex-col gap-[10.6px] ${show ? "flex" : "lg:flex hidden"}`}
    >
      <Subject subject="English" year="2022" />
      <Subject subject="Islamiat" year="2023" />
      <Subject subject="Islamiat" year="2023" />
      <Subject subject="Islamiat" year="2023" />
      <Subject subject="Islamiat" year="2023" />
      <Subject subject="Islamiat" year="2023" />
      <Subject subject="Islamiat" year="2023" />
      <Subject subject="Islamiat" year="2023" />
      <Subject subject="Islamiat" year="2023" />
      <Subject subject="Islamiat" year="2023" />
      <Subject subject="Mathematics" year="2021" />
      <Subject subject="Urdu" year="2023" />
    </div>
  );
};

export default Subjects;
