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

  const [answers, updateAnswerArray] = useState([]);

  let question = "";

  if (answers.length === 0) {
    question = questions[0].question;
  } else if (answers.length === 1) {
    question = questions[1].question;
  } else if (answers.length === 2) {
    question = questions[2].question;
  } else {
    question = "Thank you";
  }

  return (
    <main>
      <h2>Arianna wonders...</h2>
      <form>
        <div className="questionCard">
          <label>{question}</label>
          <input id="questionColor" type="text"></input>
        </div>
      </form>

      <button
        onClick={() =>
          updateAnswerArray((arr) => [...arr, document.getElementById("questionColor").value])
        }
      >
        Next question
      </button>

      <h2>You answered: {answers}</h2>
    </main>
  );
};
