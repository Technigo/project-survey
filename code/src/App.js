import React, { useState } from "react";
import QuestionAboutName from "./components/QuestionAboutName";
import QuestionAboutPainting from "./components/QuestionAboutPainting";
import QuestionAboutAuthor from "./components/QuestionAboutAuthor";
import Summary from "./components/Summary";

export const App = () => {
  const [answers, setAnswers] = useState([]);
  const [count, setCount] = useState(0);
  const onFormSubmit = (value) => {
    answers.push(value);
    setCount((prev) => prev + 1);
  };

  return (
    <>
      {count === 0 && <QuestionAboutName onFormSubmit={onFormSubmit} />}
      {count === 1 && <QuestionAboutPainting onFormSubmit={onFormSubmit} />}
      {count === 2 && <QuestionAboutAuthor onFormSubmit={onFormSubmit} />}
      {count === 3 && <Summary result={answers} />}
    </>
  );
};
