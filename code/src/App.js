import React, { useState } from "react";

export const App = () => {
  const questions = [
    {
      id: "dish",
      question: "If you could only eat one dish for the rest of your life, what would it be?Í",
      answer_type: "text",
    },
    {
      id: "cuisine",
      question: "Which of the two is your favorite cuisine?",
      answer_type: "radio",
      options: ["Mexican", "Japanese"],
    },
    {
      id: "herbs",
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
            <input id={questions[0].id} type="text"></input>
          </div>
          <button
            onClick={() =>
              updateAnswers((arr) => [...arr, document.getElementById(questions[0].id).value])
            }
          >
            Next question
          </button>
          {/* {console.log(questions[0].id)} */}
        </>
      );
    case 1:
      return (
        <>
          <div className="questionCard">
            <h2>{questions[1].question}</h2>
            <label htmlFor={questions[1].options[0]}>{questions[1].options[0]}</label>
            <input className="radio" type="radio" value={questions[1].options[0]} />
            <label htmlFor={questions[1].options[1]}>{questions[1].options[1]}</label>
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
          {/* {console.log(questions[1].id)} */}
        </>
      );
    case 2:
      return (
        <>
          <div className="questionCard">
            <h2>{questions[2].question}</h2>
            <input id={questions[2].id} type="text"></input>
          </div>
          <button
            onClick={() =>
              updateAnswers((arr) => [...arr, document.getElementById(questions[2].id).value])
            }
          >
            Submit questions
          </button>
          {/* {console.log(questions[2].id)} */}
        </>
      );
    default:
      return <h1>Thank you! You answered: {answers}</h1>;
  }
};
