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
  const [answers, setAnswers] = useState({});

  const onQNumberChange = () => {
    setQuestionNumber(questionNumber + 1);
  };

  const onAnswerChange = (newAnswer) => {
    answers[questionNumber] = newAnswer;
    setAnswers(answers);
  };

  const lastQuestion = questionNumber === questions.length - 1;

  return (
    <>
      {questionNumber < questions.length ? (
        <div>
          <Question
            key={questions[questionNumber].number}
            question={questions[questionNumber]}
            answer={answers[questionNumber]}
            setAnswer={onAnswerChange}
          />
          <button onClick={onQNumberChange}>
            {lastQuestion ? "Submit" : "Next Question"}
          </button>
        </div>
      ) : (
        <div>
          {JSON.stringify(answers)}
        </div>
      )}
    </>
  );
};

export default AllQuestions;
