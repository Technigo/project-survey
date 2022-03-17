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
      { value: "persian", label: "Persian" },
      { value: "swedish", label: "Swedish" },
    ],
  },
  {
    id: "herbs",
    question_text: "What herb is superior?",
    answer_type: "select",
    options: [
      { value: "basil", label: "Basil" },
      { value: "coriander", label: "Coriander" },
      { value: "parsley", label: "Parsley" },
      { value: "mint", label: "Mint" },
      { value: "dill", label: "Dill" },
    ],
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

  if (questions.length === answers.length) {
    return (
      <h1>
        Thank you! You answered: {answers.map((answer, i) => <p key={i} >{answer}</p>)}
      </h1>
    );
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <Question {...questions[answers.length]} inputValue={inputValue} onChange={onChange} />

      <button type="submit">Next question</button>
    </form>
  );
};
