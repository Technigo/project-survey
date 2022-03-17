import React, { useState } from "react";
import Question from "components/Question";

const questions = [
  {
    id: "dish",
    question_text: "If you could only eat one dish for the rest of your life, what would it be?",
    answer_type: "text",
  },
  {
    id: "cuisine",
    question_text: "Which of the two is your favorite cuisine?",
    answer_type: "radio",
    options: [
      { value: "mexican", label: "Mexican" },
      { value: "japanese", label: "Japanese" },
    ],
  },
  {
    id: "herbs",
    question_text: "What herb is superior?",
    answer_type: "select",
    options: ["basil", "corander", "parsley"]
      // { value: "basil", label: "Basil" },
      // { value: "coriander", label: "Coriander" },
      // { value: "parsley", label: "Parsley" },
    // ],
  },
];

export const App = () => {
  const [answers, setAnswers] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const onChange = (e) => setInputValue(e.target.value);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setAnswers((arr) => [...arr, inputValue]);
    setInputValue("");
  };

  switch (answers.length) {
    case 0:
      return (
        <form onSubmit={handleOnSubmit}>
          <Question {...questions[0]} inputValue={inputValue} onChange={onChange} />

          <button type="submit">Next question</button>
        </form>
      );
    case 1:
      return (
        <form onSubmit={handleOnSubmit}>
          <Question {...questions[1]} inputValue={inputValue} onChange={onChange} />

          <button type="submit">Next question</button>
        </form>
      );
    case 2:
      return (
        <form onSubmit={handleOnSubmit}>
          <Question {...questions[2]} inputValue={inputValue} onChange={onChange} />

          <button type="submit">Submit questions</button>
        </form>
      );
    default:
      return (
        <h1>
          Thank you! You answered: {answers[0]}, {answers[1]}, and {answers[2]}
        </h1>
      );
  }
};
