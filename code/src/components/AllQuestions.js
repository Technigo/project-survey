import React from "react";

import Question from "./Question";

const questions = [
  {
    number: 1,
    text: "What is your favourite colour?",
    inputType: "text",
    options: ["red", "blue", "green", "yellow"],
  },
  {
    number: 2,
    text: "What is your second favourite colour?",
    inputType: "radio",
    options: ["red", "blue", "green", "yellow", "purple"],
  },
  {
    number: 3,
    text: "What is your third favourite colour?",
    inputType: "select",
    options: ["red", "blue", "green", "yellow", "orange"],
  },
];

const AllQuestions = () => {
  return questions.map((question) => {
    return <Question question={question} />;
  });
};

export default AllQuestions;
