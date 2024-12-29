"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import arrow from "../../assets/arrow.png";

const questions = [
  { id: 1, question: "What are the colors of the rainbow?" },
  {
    id: 2,
    question: "What is the name of the holiday celebrated on December 25th?",
  },
  { id: 3, question: "What do you call a group of sheep?" },
  { id: 4, question: "What is the name of the planet we live on?" },
  { id: 5, question: "What do you call a person who flies an airplane?" },
];

const Questions = () => {
  const [currentQuestionId, setCurrentQuestionId] = useState<number>(1);
  const [currentQuestion, setCurrentQuestion] = useState<string>("");
  useEffect(() => {
    const sum = questions.find((question) => question.id === currentQuestionId);
    if (sum) {
      setCurrentQuestion(sum?.question);
    }
  }, [currentQuestionId]);
  const goNext = () => {
    if (currentQuestionId !== questions.length) {
      setCurrentQuestionId((prev) => prev + 1);
    }
  };
  const goPrev = () => {
    if (currentQuestionId !== 1) {
      setCurrentQuestionId((prev) => prev - 1);
    }
  };
  return (
    <div className="flex justify-center md:flex-row flex-col mt-[28px] items-center">
      <div className="lg:w-[687px] lg:h-[330px] md:w-[550px] md:h-[310px] w-[95%] h-[250px]  bg-white/5 rounded-[21%]  backdrop-blur-md shadow-inner shadow-[#ffffff9e] flex justify-center items-center ">
        <p className="text-white lg:text-4xl sm:text-2xl text-lg font-bold relative sm:top-6 md:text-center text-justify px-5">
          {currentQuestion}
        </p>
      </div>
      <div className="md:absolute flex w-full justify-between items-center md:h-[330px] md:mt-0 mt-3 lg:px-[39px] px-[30px]">
        <Image
          src={arrow}
          alt="arrow left previous"
          className="rotate-180"
          onClick={goPrev}
        />
        <Image src={arrow} alt="arrow right next" onClick={goNext} />
      </div>
    </div>
  );
};

export default Questions;
