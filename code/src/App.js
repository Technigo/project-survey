import React, { useState } from "react";
import Question from "components/Question";
import Button from "components/Button";
import SubmittedView from "components/SubmittedView";

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
  const [buttonLabel, setButtonLabel] = useState("Next Question");
  const [index, setQuestionIndex] = useState(0);

  const onChange = (event) => setInputValue(event.target.value);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setAnswers((arr) => [...arr, inputValue]);
    setInputValue("");
    setQuestionIndex(index + 1);
    if (answers.length === questions.length - 2) {
      setButtonLabel("Submit");
    }
  };

  const resetForm = () => {
    setAnswers([]);
    setQuestionIndex(0);
  };

  if (questions.length === answers.length) {
    return <SubmittedView answers={answers} reset={resetForm} />;
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <Question {...questions[index]} inputValue={inputValue} onChange={onChange} />
      <Button label={buttonLabel} />
    </form>
  );
};
