import React from "react";
import InputField from "./InputField";

const QuestionText = ({ question }) => {
  return (
    <div className="questionCard">
      <h2>{question.question_text}</h2>
      <input id={question.id} type="text"></input>
    </div>
  );
};

export default QuestionText;
