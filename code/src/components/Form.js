import React, { useState } from "react";
import Question from "components/Question";
import Button from "components/Button";
import SubmittedView from "components/SubmittedView";
import "./Form.css";

const questions = [
  {
    id: "preference",
    question_text: "What is your dietary preference",
    input_type: "select",
    options: [
      { value: "Eat everything", label: "Eat everything" },
      { value: "Pescatarian", label: "Pescatarian" },
      { value: "Vegetarian", label: "Vegetarian" },
      { value: "Vegan", label: "Vegan" },
    ],
  },
  {
    id: "cuisine",
    question_text: "Which of the following cuisines are you craving most?",
    input_type: "radio",
    options: [
      { value: "Persian cuisine", label: "Persian" },
      { value: "Mexican cuisine", label: "Mexican" },
      { value: "Japanese cuisine", label: "Japanese" },
      { value: "Any cuisine", label: "Anything goes" },
    ],
  },
  {
    id: "spiciness",
    question_text: "How well can you handle spice?",
    input_type: "range",
    format_answer: (value) => `Spice level: ${value} ${Number(value) === 1 ? "chili" : "chilis"}`,
    options: [
      { value: 1, label: "\u{1F336}" },
      { value: 2, label: "\u{1F336}\u{1F336}" },
      { value: 3, label: "\u{1F336}\u{1F336}\u{1F336}" },
    ],
  },
  {
    id: "herbs",
    question_text: "Which of these herbs is superior?",
    input_type: "select",
    format_answer: (value) => `Heaps of ${value}`,
    options: [
      { value: "coriander", label: "Coriander" },
      { value: "basil", label: "Basil" },
      { value: "mint", label: "Mint" },
      { value: "dill", label: "Dill" },
      { value: "parsley", label: "Parsley" },
    ],
  },
  {
    id: "allergies",
    question_text: "Do you have an allergies we should know about?",
    input_type: "text",
    format_answer: (value) => `Allergies: ${value.charAt(0).toUpperCase() + value.slice(1)}`,
  },
];

const Form = () => {
  const [currentQuestionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const buttonLabel = currentQuestionIndex === questions.length - 1 ? "Submit" : "Next question";

  const isSubmitted = questions.length === answers.length;

  const formatInput = (value) =>
    questions[currentQuestionIndex].format_answer
      ? questions[currentQuestionIndex].format_answer(value)
      : value;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setAnswers((previousAnswers) => [...previousAnswers, formatInput(inputValue)]);
    setQuestionIndex(currentQuestionIndex + 1);
    setInputValue("");
  };

  const resetForm = () => {
    setAnswers([]);
    setQuestionIndex(0);
  };

  if (isSubmitted) {
    return <SubmittedView answers={answers} reset={resetForm} />;
  }

  return (
    <form onSubmit={handleOnSubmit} className="container">
      <Question
        {...questions[currentQuestionIndex]}
        inputValue={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <Button label={buttonLabel} inputValue={inputValue} />
    </form>
  );
};

export default Form;
