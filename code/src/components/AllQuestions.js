import React, { useState } from "react";

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
  const [questionNumber, setQuestionNumber] = useState(0);

  // const lastQuestion = (questions) => {
  //   return questionNumber === questions.length;
  // };

  return (
    <>
      {questionNumber < questions.length ? (
        <div>
          <Question
            key={questions[questionNumber].number}
            question={questions[questionNumber]}
          />
          <button onClick={() => setQuestionNumber(questionNumber + 1)}>
            {questionNumber === (questions.length - 1) ? "Submit" : "Next Question"}
          </button>
        </div>
      ) : (
        <div>Thanks for submiting your form</div>
      )}
    </>
  );
};

export default AllQuestions;
