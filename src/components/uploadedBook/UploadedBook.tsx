import React from "react";
import BookCard from "../bookCard/BookCard";

const UploadedBook = () => {
  return (
    <div className=" h-[297px] px-5 pt-[8px] bg-white/15 backdrop-blur-md rounded-[10px] ">
      <h1 className="font-medium text-[22.1px] text-white ">Uploaded Books</h1>
      <div className="flex gap-[18px] mt-[8px]">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </div>
  );
};

export default UploadedBook;
