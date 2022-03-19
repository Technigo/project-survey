import React, { useState, useEffect } from "react";
import Question from "components/Question";
import Button from "components/Button";
import SubmittedView from "components/SubmittedView";
import "./Form.css";

const questions = [
  {
    id: "preference",
    question_text: "What is your dietary preference",
    answer_type: "select",
    format_answer: (value) => value,
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
    answer_type: "radio",
    format_answer: (value) => value,
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
    answer_type: "range",
    format_answer: (value) => `Spice level: ${value} chilis`,
    options: [
      { value: 1, label: "\u{1F336}" },
      { value: 2, label: "\u{1F336}\u{1F336}" },
      { value: 3, label: "\u{1F336}\u{1F336}\u{1F336}" },
    ],
  },
  {
    id: "herbs",
    question_text: "Which of these herbs is superior?",
    answer_type: "select",
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
    answer_type: "text",
    format_answer: (value) => `Allergies: ${value.charAt(0).toUpperCase() + value.slice(1)}`,
  },
];

const Form = () => {
  const [currentQuestionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [buttonLabel, setButtonLabel] = useState("Next question");

  const handleInputChange = (event) => setInputValue(event.target.value);

  const formatInput = (value) => questions[currentQuestionIndex].format_answer(value);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setAnswers((arr) => [...arr, formatInput(inputValue)]);
    setQuestionIndex(currentQuestionIndex + 1);
    setInputValue("");
  };

  useEffect(() => {
    const isLastQuestion = () => currentQuestionIndex === questions.length - 1;
    if (isLastQuestion()) {
      setButtonLabel("Submit");
    }
  }, [currentQuestionIndex]);

  const didSubmit = () => questions.length === answers.length;

  const resetForm = () => {
    setAnswers([]);
    setQuestionIndex(0);
    setButtonLabel("Next question");
  };

  if (didSubmit()) {
    return <SubmittedView answers={answers} reset={resetForm} />;
  }

  return (
    <form onSubmit={handleOnSubmit} className="container">
      <Question
        {...questions[currentQuestionIndex]}
        inputValue={inputValue}
        onChange={handleInputChange}
      />
      <Button label={buttonLabel} inputValue={inputValue} />
    </form>
  );
};

export default Form;
