import React, { useState } from "react";

export const App = () => {
  const questions = [
    { question: "What is your name?", answer_type: "text" },
    {
      question: "What is your favorite cuisine?",
      answer_type: "radio",
      options: ["Mexican", "Japanese"],
    },
    {
      question: "What herb is superior?",
      answer_type: "select",
      options: ["Basil", "Coriander", "Parsley"],
    },
  ];

  const [answers, updateAnswers] = useState([]);

  switch (answers.length) {
    case 0:
      return (
        <>
          <div className="questionCard">
            <h2>{questions[0].question}</h2>
            <input id="question1" type="text"></input>
          </div>
          <button
            onClick={() =>
              updateAnswers((arr) => [...arr, document.getElementById("question1").value])
            }
          >
            Next question
          </button>
        </>
      );
    case 1:
      return (
        <>
          <div className="questionCard">
            <h2>{questions[1].question}</h2>
            <label for="radio1">{questions[1].options[0]}</label>
            <input className="radio" type="radio" value={questions[1].options[0]} />
            <label for="radio2">{questions[1].options[1]}</label>
            <input className="radio" type="radio" value={questions[1].options[1]} />
          </div>
          <button
            onClick={() =>
              //this isn't working...
              updateAnswers((arr) => [...arr, document.getElementsByClassName("radio").value])
            }
          >
            Next question
          </button>
        </>
      );
    case 2:
      return (
        <>
          <div className="questionCard">
            <h2>{questions[2].question}</h2>
            <input id="questionColor" type="text"></input>
          </div>
          <button
            onClick={() =>
              updateAnswers((arr) => [...arr, document.getElementById("questionColor").value])
            }
          >
            Submit questions
          </button>
        </>
      );
    default:
      return <h1>Thank you! You answered: {answers}</h1>;
  }
};
